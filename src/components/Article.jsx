import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

function Article({
  title,
  author,
  date,
  imageUrl,
  content,
  tags,
 
}) {
  return (
    <div className='px-6 md:px-20 lg:px-56 mt-10'>
      <h1 className='text-4xl font-bold font-manrope mt-3 mb-3'>{title}</h1>
      <div className='flex justify-between items-center mb-4'>
        <div className='flex flex-col'>
          <h3 className='font-semibold text-lg mt-1 mb-1'>{author}</h3>
          <h4 className='text-gray-500 text-sm'>{date}</h4>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <img src={imageUrl} className='rounded-2xl mt-5 mb-5 w-full' alt="Blog Cover" />
        <div className="max-w-full text-justify font-manrope">
          <p className='text-base sm:text-sm font-normal font-mercury mt-4 mb-4 leading-6'>
            {content}
          </p>
        </div>
      </div>

      <div className='flex space-x-2 mt-2'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded text-white shadow-md bg-gradient-to-r from-${tag.color}-500 to-${tag.color}-700`}
          >
            {tag.name}
          </span>
        ))}
      </div>

      {/* <CommentSection blog={{
        title,
        author,
        date,
        image,
        content,
        tags,
      }} /> */}
    </div>
  );
}

Article.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.arrayOf(PropTypes.string),
  date: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  content: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
};

export default Article;
