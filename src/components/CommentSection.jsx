import PropTypes from 'prop-types';

const CommentSection = ({ blog }) => {
  return (
    <div className="mt-8">
      {/* Likes */}
      <div className="mb-4 flex items-center">
        <span role="img" aria-label="like-icon" className="like-icon">
          {blog.likes.includes("currentUser") ? (
            <span className="text-blue-500 cursor-pointer font-bold">👍 Liked</span>
          ) : (
            <span className="text-gray-500 cursor-pointer hover:text-blue-500 transition duration-300 ease-in-out font-bold">
              👍 Likes
            </span>
          )}
        </span>
        <span className="ml-2 text-gray-500">{blog.likes.length}</span>
      </div>

      {/* Comments */}
      <div>
        <h3 className="text-lg font-semibold mb-4">
          <span className="text-blue-500 border-b-4 border-blue-500 pb-2">Comments</span>
        </h3>
        {blog.comments.map((comment, index) => (
          <div key={index} className="mb-4 bg-gray-100 p-4 rounded">
            <p className="text-gray-800">{comment.text}</p>
            <div className="flex items-center mt-2">
              <span className="text-gray-500 text-sm">{comment.username}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Comment input */}
      <div className="mt-4">
        <textarea
          rows="3"
          placeholder="Add a comment..."
          className="w-full p-2 border border-gray-300 rounded"
        ></textarea>
        <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition duration-300 ease-in-out">
          Post Comment
        </button>
      </div>
    </div>
  );
};
CommentSection.propTypes = {
  blog: PropTypes.shape({
    likes: PropTypes.arrayOf(PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};
export default CommentSection;
