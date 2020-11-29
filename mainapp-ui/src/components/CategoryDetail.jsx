import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryDetail({ match }) {
  const [category, setCategory] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const id = match.params.id;

  React.useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/category/${id}`).then((response) => {
      setCategory(response.data);
      setPosts(response.data.posts);
    });
  }, [id]);

  return (
    <div>
      Category with id {category.id}
      <p>
        Category: <strong>{category.name}</strong>
      </p>
      <hr />
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
            <p>{post.id}</p>
            <Link to={{ pathname: `/post/${post.id}`, fromDashboard: false }}>
              <strong>Детали</strong>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryDetail;
