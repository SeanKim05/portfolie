import React, { useEffect, useState } from 'react';

const DayCounter = () => {
  const [startDate, setStartDate] = useState('');

  useEffect(() => {
    console.log('Example to Subtract two dates');
    var d1 = new Date('August 1, 2022');
    var d2 = new Date();
    const time = Math.abs(d2 - d1);
    const timeToDate = Math.ceil(time / (1000 * 60 * 60 * 24));
    setStartDate(timeToDate);
    console.log(timeToDate);
  }, []);

  return <div>출발으로 부터 +{startDate}일</div>;
};

export default DayCounter;
