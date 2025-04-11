import { Link } from "react-router-dom";
const DefaultProfile = () => {
      return (
          <>
            <p> This is the default profile page</p>
            <Link to="/"> Click for home screen </Link>
          </>
      );
};

export default DefaultProfile;
