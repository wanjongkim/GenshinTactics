function Footer() {
  return (
    <footer className="page-footer" style={{ marginTop: "50px" }}>
      <div className="container">
        <div className="row">
          <div className="col l12 s12" style={{ textAlign: "center" }}>
            <i className="material-icons medium">dashboard</i>
            <ul className="grey-text text-lighten-4">
              <li style={{ display: "inline", margin: "0px 10px" }}>
                <a href="#">Home</a>
              </li>
              <li style={{ display: "inline", margin: "0px 10px" }}>
                <a href="#">GitHub</a>
              </li>
              <li style={{ display: "inline", margin: "0px 10px" }}>
                <a href="#">Contact</a>
              </li>
              <li style={{ display: "inline", margin: "0px 10px" }}>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container" style={{ textAlign: "center" }}>
          © 2021 Copyright Wan Jong Kim
        </div>
      </div>
    </footer>
  );
}

export default Footer;
