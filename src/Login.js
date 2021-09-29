import "./styles.css";

function Login() {
  return (
    <div
      className="container"
      style={{
        margin: "0 auto",
        textAlign: "center",
        marginTop: "150px",
        maxWidth: "550px"
      }}
    >
      <div
        style={{
          paddingTop: "50px",
          paddingBottom: "50px",
          backgroundColor: "white",
          margin: "0 auto",
          textAlign: "center"
        }}
        className="row"
      >
        <form
          className=""
          style={{
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <div className="row">
            <div className="input-field col l10 offset-l1 offset-s1 s10">
              <i className="material-icons prefix">account_circle</i>
              <input id="username" type="text" className="validate" />
              <label for="username">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col l10 offset-l1 offset-s1 s10">
              <i className="material-icons prefix">lock_outline</i>
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <label>
              <input type="checkbox" id="remember-me" />
              <span>Remember me</span>
            </label>
          </div>
          <div className="row">
            <div className="input-field col l4 s4 offset-l4 offset-s4 offset-l4">
              <a href="#" className="btn waves-effect waves-light col s12">
                Login
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
