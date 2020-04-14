import React from "react";
import { connect } from "react-redux";

const FormLogin = props => {
  const handleClick = e => {
    console.log("clic en el boton");
  };
  return (
    <React.Fragment>
      <div className="card-body">
        <div className="m-sm-4">
          <div className="text-center">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar6.png"
              alt="Andrew Jones"
              className="img-fluid rounded-circle"
              width="132"
              height="132"
            />
          </div>
          <form onSubmit={props.onSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                onChange={props.onChange}
                className="form-control form-control-lg"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={props.email}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                onChange={props.onChange}
                className="form-control form-control-lg"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={props.password}
              />
              <small>
                <a href="pages-reset-password.html">Forgot password?</a>
              </small>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn btn-lg btn-primary"
                onClick={handleClick}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default connect(null, null)(FormLogin);
