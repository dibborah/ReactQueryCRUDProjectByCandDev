import { useState } from "react";

const PostForm = () => {
  const [post, setPost] = useState({
    title: "",
    body: ""
  });

  console.log(post);

  const handleChangeInput = (e) => {
    setPost({
        ...post,
       [ e.target.name] : e.target.value
    })
  }
  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input onChange={handleChangeInput} type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]}/>
    </div>
  );
  return (
    <form>
      {renderField("Title")}
      {renderField("Body")}
    </form>
  );
};

export default PostForm;
