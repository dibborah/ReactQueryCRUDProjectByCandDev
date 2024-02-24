const PostForm = () => {
  const renderField = (label) => (
    <div>
      <label>{label}</label>
      <input type="text" name={label.toLowerCase()} />
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
