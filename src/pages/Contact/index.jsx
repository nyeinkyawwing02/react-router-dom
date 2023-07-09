import './style.css';
import contactImg from '../../assets/react.svg';

import { FiMail, FiPhoneForwarded } from 'react-icons/fi';

const Index = () => {
  return (
    <>
      <h3 className='text-3xl font-extrabold my-3'>Contact</h3>

      <div className='contact-wrapper'>
        <img src={contactImg} alt='' width='50%' />
        <div className='contact-card'>
          <h1>Let&apos;s Start</h1>
          <p className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde,
            vel Lorem ipsum dolor sit
          </p>
          <div className='contact-info'>
            <div className='contact-detail-wrapper'>
              <FiMail color='#0284c7' />
              <p>example@com.mm</p>
            </div>

            <div className='contact-detail-wrapper'>
              <FiPhoneForwarded color='#0284c7' />
              <p>00-000-000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
