import './style.css';
import PropTypes from 'prop-types';

const Index = ({ id, locId, img, title, desc }) => {
  return (
    <div className={`blog-card ${+locId === +id && 'select'}`}>
      <img src={img} alt='' width='100%' height='200px' />
      <div className='blog-info'>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

Index.propTypes = {
  id: PropTypes.number,
  locId: PropTypes.number,
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Index;
