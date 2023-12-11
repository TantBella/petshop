import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/admin">Uppdatera sortiment (admin)</Link>
    </div>
  );
};

export default Footer;
