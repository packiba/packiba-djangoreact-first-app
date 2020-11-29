import React from "react";
import axios from "axios";

function PostDetail({ match }) {
  const [post, setPost] = React.useState([]);
  const id = match.params.id;

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/post`).then((response) => {
      response.data.map((obj) => {
        if (obj.id === Number(id)) {
          setPost(obj);
        }
      });
    });
  }, [id]);

  return (
    <div>
      Post with id {post.id}
      <p>
        Title <strong>{post.title}</strong>
      </p>
    </div>
  );
}

export default PostDetail;
