import { useContext, useEffect } from 'react';
import classes from './IDoFrame.module.scss';
import NavContext from '../../context/nav-context';
import { FaGithub } from 'react-icons/fa';
import { SiNotion } from 'react-icons/si';

const TestData = [
  {
    title: 'Roecy',
    summary: 'ROYCE Chocolate 공식 홈페이지 클론 프로젝트',
    duration: '2022-08-29 ~ 2022-09-08 (2주)',
    personnel: '6명(Front-end: 4명, 백엔드: 2명)',
    url: require('../../assets/images/project_roecy.png'),
    assigned: ['회원가입&로그인', '마이페이지', '문의페이지'],
    link: 'https://github.com/SeanKim05/1st_project_roecy',
    link1:
      'https://dorian-gorgonzola-46b.notion.site/1-Roecy-29b07ad7a7bd46959bb963902a903029',
  },
  {
    title: '4조의 공방',
    summary: '모두의 공방 클론 프로젝트',
    duration: '2022-09-19 ~ 2022-09-30 (2주)',
    personnel: '6명(Front-end: 3명, 백엔드: 2명)',
    url: require('../../assets/images/project_sajo.png'),
    assigned: ['회원가입&로그인', '마이페이지', '상품리뷰 패이지'],
    link: 'https://github.com/SeanKim05/2nd_project_sajo_workshop',
    link1:
      'https://dorian-gorgonzola-46b.notion.site/2-e4a85349b5674e4bac3e947e958d0520',
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
    link: 'https://github.com/SeanKim05/project_haii',
    link1:
      'https://dorian-gorgonzola-46b.notion.site/HAII-e438d69a4c124abea867958b61217985',
  },
  {
    title: 'Winning-I',
    summary: 'Winning 기업협업 과제',
    duration: '2022/10/17 ~ 2022/10/20 (3일)',
    personnel: '개인작업',
    url: require('../../assets/images/project_winningi.png'),
    assigned: ['로그인', '매인페이지(그래프)', '게시글 페이지 '],
    link: 'https://dorian-gorgonzola-46b.notion.site/WINNING-I-aa57b4b77d0a472bb6ed1acb68aa905e',
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
    link: 'https://dorian-gorgonzola-46b.notion.site/Bodit-998f3e6ebae94aec8115dd220edcf82b',
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
            <li>
              &nbsp;바로가기&nbsp;
              <div className={classes.ido_link}>
                <a href={slide.link}>
                  <FaGithub alt="github" />
                </a>
                <a href={slide.link1}>
                  <SiNotion alt="github" />
                </a>
              </div>
            </li>
          </div>
        </section>
      ))}
    </div>
  );
};

export default IDoFrame;
