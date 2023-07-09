import './style.css';
import PropTypes from 'prop-types';
import { FiChevronRight } from 'react-icons/fi';

const Index = ({ img, tags, title, desc }) => {
  return (
    <div className='card'>
      <img src={img} width='100%' />

      <div>
        <div className='card-tag-wrapper'>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <p className='card-title'>{title}</p>
        <p className='card-desc'>
          {desc}
          ......
        </p>
      </div>
      <div className='see-more-wrapper'>
        <p className='see-more'>See More</p>
        <FiChevronRight />{' '}
      </div>
    </div>
  );
};

Index.propTypes = {
  img: PropTypes.string,
  tags: PropTypes.array,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Index;

