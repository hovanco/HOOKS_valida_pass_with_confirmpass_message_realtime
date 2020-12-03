import React from "react";
import { useForm } from "react-hook-form";

function FormLogin() {
  const { register, handleSubmit, errors, getValues, reset } = useForm({
    mode: "all", // add this  code row when add to react hooks form
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="App">
      <section className="form-container">
        <h2> Sign up</h2>

        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row">
            <input
              aria-label="Enter your email"
              aria-required="true"
              placeholder="Email"
              className="form-text"
              type="email"
              name="email"
              autoFocus
              ref={register({
                required: "Email required",
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div className="form-row">
            <input
              aria-label="Enter your password"
              aria-required="true"
              placeholder="Password"
              className="form-text"
              type="password"
              name="password"
              ref={register({
                required: "Password required",
                minLength: { value: 8, message: "Too short" },
              })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <div className="form-row">
            <input
              aria-label="Enter your password to confirm"
              aria-required="true"
              placeholder="Confirm Password"
              className="form-text"
              type="password"
              name="confirm"
              ref={register({
                validate: (value) => {
                  if (value === getValues("password")) {
                    return true;
                  } else {
                    return (
                      <span style={{ color: "red" }}>
                        Password fields don't match
                      </span>
                    );
                  }
                },
                required: "Password required",
                minLength: { value: 8, message: "Too short" },
              })}
            />
            {errors.confirm && (
              <p style={{ color: "red" }}>{errors.confirm.message}</p>
            )}
          </div>
          <button className="sub-btn" type="submit">
            Sign up
          </button>
        </form>
      </section>
    </div>
  );
}
export default FormLogin;
