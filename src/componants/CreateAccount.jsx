import css from "./CreateAccount.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    password: "",
    agency: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name is required";

    if (!formData.mobileNo) newErrors.mobileNo = "Mobile number is required";
    else if (
      formData.mobileNo.length !== 10 ||
      !/^\d+$/.test(formData.mobileNo)
    ) {
      newErrors.mobileNo = "Mobile number must be 10 digits.";
    }

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!formData.agency) newErrors.agency = "Agency selection is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          fullName: formData.fullName,
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
      <div className={`${css.subContainer} border  shadow-lg bg-white p-4`}>
        <h4 className="fw-bold mb-4">
          Create your <br /> PopX account
        </h4>

        <form onSubmit={handleSubmit} noValidate>
          {/* Input Fields */}
          <div className={`${css.custominputcontainer}`}>
            <label className={`${css.customlabel}`}>
              Full Name<span className="text-danger me-4">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              className={`${css.custominput}`}
              placeholder="Marry Doe"
              required
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <div className={css.tooltip}>⚠️ {errors.fullName}</div>
            )}
          </div>

          <div className={`${css.custominputcontainer}`}>
            <label className={`${css.customlabel}`}>
              Phone number<span className="text-danger">* </span>
            </label>
            <input
              type="text"
              name="mobileNo"
              className={`${css.custominput}`}
              placeholder="Marry Doe"
              required
              value={formData.mobileNo}
              onChange={handleChange}
            />
            {errors.mobileNo && (
              <div className={css.tooltip}>⚠️ {errors.mobileNo}</div>
            )}
          </div>

          <div className={`${css.custominputcontainer}`}>
            <label className={`${css.customlabel}`}>
              Email address<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`${css.custominput}`}
              placeholder="Marry Doe"
              required
              value={formData.email}
              onChange={handleChange}
              autoComplete="username"
            />
            {errors.email && (
              <div className={css.tooltip}>⚠️ {errors.email}</div>
            )}
          </div>

          <div className={`${css.custominputcontainer}`}>
            <label className={`${css.customlabel}`}>
              Password<span className="text-danger me-4">*</span>
            </label>
            <input
              type="password"
              name="password"
              className={`${css.custominput}`}
              placeholder="Marry Doe"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              autoComplete="new-password"
            />
            {errors.password && (
              <div className={css.tooltip}>⚠️ {errors.password}</div>
            )}
          </div>

          <div className={`${css.custominputcontainer}`}>
            <label className={`${css.customlabel}`}>Company name</label>
            <input
              type="text"
              className={`${css.custominput}`}
              placeholder="Marry Doe"
            />
          </div>

          {/* Radio Buttons */}
          <div className="mb-3">
            <label className={`d-block ${css.customlabelradio}`}>
              Are you an Agency?<span className="text-danger">*</span>
            </label>

            <div className="d-flex gap-4 mt-2">
              <label htmlFor="agencyYes" className="d-flex align-items-center">
                <input
                  className={`${css.customradio}`}
                  type="radio"
                  name="agency"
                  id="agencyYes"
                  value="yes"
                  checked={formData.agency === "yes"}
                  onChange={handleChange}
                />
                <span className="ms-2">Yes</span>
              </label>

              <label htmlFor="agencyNo" className="d-flex align-items-center">
                <input
                  className={`${css.customradio}`}
                  type="radio"
                  name="agency"
                  id="agencyNo"
                  value="no"
                  checked={formData.agency === "no"}
                  onChange={handleChange}
                />
                <span className="ms-2">No</span>
              </label>
            </div>

            {errors.agency && (
              <div className={css.tooltip}>⚠️ {errors.agency}</div>
            )}
          </div>

          <button type="submit" className={`btn ${css.btnpurple} w-100 mt-4`}>
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
