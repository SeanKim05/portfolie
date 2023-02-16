import { useContext, useEffect } from 'react';
import classes from './IDoFrame.module.scss';
import NavContext from '../../context/nav-context';

const TestData = [
  {
    title: 'Roecy',
    summary: 'ROYCE Chocolate 공식 홈페이지 클론 프로젝트',
    duration: '2022-08-29 ~ 2022-09-08 (2주)',
    personnel: '6명(Front-end: 4명, 백엔드: 2명)',
    url: require('../../assets/images/project_roecy.png'),
    assigned: ['회원가입&로그인', '마이페이지', '문의페이지'],
  },
  {
    title: '4조의 공방',
    summary: '모두의 공방 클론 프로젝트',
    duration: '2022-09-19 ~ 2022-09-30 (2주)',
    personnel: '6명(Front-end: 3명, 백엔드: 2명)',
    url: require('../../assets/images/project_sajo.png'),
    assigned: ['회원가입&로그인', '마이페이지', '상품리뷰 패이지'],
  },
  {
    title: 'HAII',
    summary: 'HAII 기업협업 과제',
    duration: '2022/10/11 ~ 2022/10/14 (3일)',
    personnel: 'Front-end: 3명',
    url: require('../../assets/images/project_haii.png'),
    assigned: [
      '녹음 시 시간 및 음성에 대한 파형 표시',
      '녹음 시 시간 및 음성에 대한 파형 표시',
      '타이머 연동으로 시간별 녹화(30초, 1분, 5분)가능',
      '녹음된 파일 저장기능 추가',
    ],
  },
  {
    title: 'Winning-I',
    summary: 'Winning 기업협업 과제',
    duration: '2022/10/17 ~ 2022/10/20 (3일)',
    personnel: '개인작업',
    url: require('../../assets/images/project_winningi.png'),
    assigned: ['로그인', '매인페이지(그래프)', '게시글 페이지 '],
  },
  {
    title: 'Bodit',
    summary: 'Bodit 기업협업 과제',
    duration: '2022/10/04 ~ 2022/10/06',
    personnel: 'Front-end: 3명',
    url: require('../../assets/images/project_bodit.png'),
    assigned: [
      '배터리 상태에 따른 값 표 렌더링',
      '마우스 hover시 row 스타일 변경',
    ],
  },
];

const IDoFrame = () => {
  const { scrollHandler, yScrollVal } = useContext(NavContext);

  useEffect(() => {
    scrollHandler(1);
    document.getElementById('test_slideY').addEventListener('scroll', e => {
      scrollHandler(e.currentTarget.scrollTop);
    });
  }, []);

  // useEffect(() => {
  //   scrollHandler(1);
  //   document.getElementById('test_slideY').addEventListener('scroll', e => {
  //     scrollHandler(e.currentTarget.scrollTop);
  //   });
  // }, []);

  console.log(yScrollVal);

  return (
    <div id="test_slideY" className={classes.ido_container}>
      {TestData.map(slide => (
        <section
          className={classes.ido_slide}
          style={{ backgroundImage: `url(${slide.url})` }}
        >
          <div className={classes.ido_card_wrapper}>
            <h1>&nbsp;{slide.title}</h1>
            <li>
              <span>&nbsp;요약:</span> {slide.summary}
            </li>
            <li>
              <span>&nbsp;기간:</span> {slide.duration}
            </li>
            <li>
              <span>&nbsp;인원:</span> {slide.personnel}
            </li>
            <li>
              <span>
                &nbsp;담당파트:
                {slide.assigned.map(work => (
                  <li>&nbsp;{work}</li>
                ))}
              </span>
            </li>
          </div>
        </section>
      ))}
    </div>
  );
};

export default IDoFrame;
