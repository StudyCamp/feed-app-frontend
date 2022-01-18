import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <br />
        <br />
        <div className="container" style={{ width: "100%" }}>
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <a href="/#" className="nav-link px-2 text-muted">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/StudyCamp"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Social
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://leonli.herokuapp.com/"
                  className="nav-link px-2 text-muted"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href={"/#"} className="nav-link px-2 text-muted">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link px-2 text-muted">
                  &uarr;
                </a>
              </li>
            </ul>
            <p className="text-center text-muted">
              © 2022 LeonOverFlow, GoogleSearchDev Inc
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
