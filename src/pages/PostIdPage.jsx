import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostService.getById(params.id);
    setPost(responce.data);
  });
  const [fetchComments, isComLoading, commError] = useFetching(async () => {
    const responce = await PostService.getCommentsByPostId(params.id);
    setComments(responce.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <div className="PostIdItem">
          <h1 style={{ textAlign: "center" }}>
            {post.id}.{post.title}
          </h1>
          <p>{post.body}</p>
        </div>
      )}
      {isComLoading ? (
        <Loader />
      ) : (
        <div className="CommentsToPost">
          <h1>Комментарии</h1>
          {comments.map((comment) => {
            return (
              <div key={comment.id} className="commentItem">
                <h1
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>{comment.id}</p>
                  <p>{comment.email}</p>
                </h1>
                <p>{comment.body}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default PostIdPage;
