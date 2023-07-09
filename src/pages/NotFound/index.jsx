import './style.css';
import { useEffect, useState } from 'react';
import NoFoundImage from '../../assets/react.svg';
import { Link, useNavigate } from 'react-router-dom';

const Index = () => {
  let [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    let getCount = () => {
      if (count === 0) {
        setCount(0);
        navigate('/');
      } else {
        setCount(--count);
      }
    };

    const interval = setInterval(getCount, 1000);

    return () => clearInterval(interval);
  }, [count, navigate]);

  console.log('Count', count);
  return (
    <div className='not-found-wrapper'>
      <p className='count'>{count}</p>

      <img src={NoFoundImage} alt='' width='20%' />

      <div className='no-found-text-wrap'>
        <p> Go back Home in {count} seconds.</p>
        <p className='text-link'>
          <Link to='/'>Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Index;
