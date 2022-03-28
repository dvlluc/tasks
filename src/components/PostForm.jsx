import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });

  // ! получить данные из неуправляемого инпута
  // const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <div>
      <form>
        {/* управляемый компониент */}
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название"
        />
        {/* неуправляемый компонент или неконтролируемый */}
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание" /> */}
        <MyInput
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание"
        />
        <MyButton onClick={addNewPost}>Добавить</MyButton>
      </form>
    </div>
  );
};

export default PostForm;
