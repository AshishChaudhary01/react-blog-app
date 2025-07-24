import { NavLink } from "react-router";

const Home = () => {
  return (
    <>
      <h3>This is Home page.</h3>

      <div class="navbar">
        <button>
          <NavLink to={"/about-us"}>About Us</NavLink>
        </button>
        <button>
          <NavLink to={"/contact-us"}>Contact Us</NavLink>
        </button>
        <button>
          <NavLink to={"/our-services"}>Our Services</NavLink>
        </button>
        <div>
          <button>
            <NavLink to={"/admin"}>Admin Login</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;