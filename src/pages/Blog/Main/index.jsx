import './style.css';
import Card from './Card';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../../../blogData.js';

const Index = () => {
  const [blogs] = useState(data);

  return (
    <div className='blog-detail-wrap'>
      <h3 className='text-3xl font-extrabold my-3  mb-[3%]'>Blogs</h3>

      <div className='card-wrapper'>
        {blogs &&
          blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <Card
                img={blog.imageUrl}
                tags={blog.tags}
                title={blog.title}
                desc={blog.desc}
              />
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Index;
