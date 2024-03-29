import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PostForm = ({ onSubmit }) => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const handleChangeInput = (e) => {
    setPost({
      ...post,
      // Dynamically the keys are created and set
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label) => (
    <div>
      <label>{label}</label>
      {/* The name attribute is set dynamically according to what arguement would be passed as input in the parameter label */}
      <input
        onChange={handleChangeInput}
        type="text"
        name={label.toLowerCase()}
        value={post[label.toLowerCase()]}
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(post);
    setPost({
      title: "",
      body: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderField("Title")}
      {renderField("Body")}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostForm;
