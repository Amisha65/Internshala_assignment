import { useState } from "react";
import css from "./signUp.module.css";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          email: formData.email,
        })
      );
      navigate("/Home");
    }
  };

  return (
    <div
      className={`${css.mainContainer} d-flex justify-content-center align-items-center bg-light`}
    >
      <div className={`${css.subContainer} bg-white p-4 shadow-sm`}>
        <h4 className="fw-bold mb-2">
          Signin to your <br /> PopX account
        </h4>
        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className={css.custominputcontainer}>
            <div className={css.inputWrapper}>
              <input
                type="email"
                id="email"
                name="email"
                className={css.custominput}
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email" className={`pe-3 ${css.floatingLabel}`}>
                Email Address
              </label>
            </div>
            {errors.email && (
              <div className={css.tooltip}>⚠️ {errors.email}</div>
            )}
          </div>

          {/* Password */}
          <div className={css.custominputcontainer}>
            <div className={css.inputWrapper}>
              <input
                type="password"
                id="password"
                name="password"
                className={css.custominput}
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className={`pe-4 ${css.floatingLabel}`}>
                Password
              </label>
            </div>
            {errors.password && (
              <div className={css.tooltip}>⚠️ {errors.password}</div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={css.loginButton}
            disabled={!formData.email || !formData.password}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
