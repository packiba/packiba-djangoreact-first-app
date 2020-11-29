import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar({ categories }) {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {categories.map((category) => (
              <Link
                to={{
                  pathname: `/category/${category.id}/`,
                  fromDashboard: false,
                }}
                className="nav-link"
                key={category.id}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
