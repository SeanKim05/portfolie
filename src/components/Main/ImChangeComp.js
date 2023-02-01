import { useState, useCallback, useEffect } from 'react';

const names = ['학생', '백수', '개발자', '존재', '사람'];

function ImChangeComp() {
  const [newName, setnewName] = useState('');

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    console.log(index);
    setnewName(names[index]);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 1000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return <span>{newName}</span>;
}

export default ImChangeComp;
