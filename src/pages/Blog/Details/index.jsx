import './style.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import { data } from '../../../blogData.js';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Index = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  let [blogDetail, setBlogDetail] = useState(data[id - 1]);
  let [blogRecent] = useState(data.slice(0, 4));

  useEffect(() => {
    setBlogDetail(data[id - 1]);
  }, [id]);

  const handleExplore = () => {
    navigate('/blogs');
  };

  return (
    <div className='blog-detail-main'>
      <div className='blog-detail-wrapper'>
        <img src={blogDetail.imageUrl} alt='' width='40%' />

        <p className='blog-detail-title'>{blogDetail.title}</p>
        <p>{blogDetail.desc}</p>

        <div className='tags'>
          {blogDetail?.tags?.map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </div>
      </div>

      <div className='blog-detail-right'>
        <p className='recent-title'>Recent Blog</p>

        <div>
          {blogRecent?.map((e, i) => (
            <Link to={`/blogs/${e.id}`} key={e.id}>
              <Card
                key={i}
                img={e.imageUrl}
                title={e.title}
                desc={e.desc}
                id={e.id}
                locId={id}
              />
            </Link>
          ))}
        </div>

        <p className='explore' onClick={handleExplore}>
          Explore
        </p>
      </div>
    </div>
  );
};

export default Index;
