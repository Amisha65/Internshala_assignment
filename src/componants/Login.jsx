import { Link } from "react-router-dom";
import css from "./Login.module.css";

const Login = () => {
  return (
    <div
      className={`${css.mainContainer} d-flex justify-content-center align-items-center bg-light`}
    >
      <div className={`${css.subContainer} border shadow-lg bg-white`}>
        <div className="text-center w-100 px-4">
          <h4 className={`${css.welcomeText} fw-bold mb-2`}>Welcome to PopX</h4>
          <p className={`${css.text} mb-4`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          <Link
            to="/CreateAccount"
            className={` d-flex justify-content-center align-items-center btn w-100 mb-3 ${css.customPrimaryBtn}`}
          >
            Create Account
          </Link>

          <Link
            to="/SignUp"
            className={` d-flex justify-content-center align-items-center btn w-100 ${css.loginBtn}`}
          >
            Already Registered? Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
