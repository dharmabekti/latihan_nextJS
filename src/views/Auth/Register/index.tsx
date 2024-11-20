import { useState } from "react";
import style from "./Register.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "Email already exists" : "");
    }
  };
  return (
    <div className={style.register}>
      <h1 className={style.register__title}>Register</h1>
      {error && <p className={style.register__error}>{error}</p>}
      <div className={style.register__form}>
        <form onSubmit={handleSubmit} method="post">
          <div className={style.register__form__item}>
            <label
              htmlFor="fullname"
              className={style.register__form__item__label}
            ></label>
            <input
              type="text"
              placeholder="Fullname"
              id="fullname"
              name="fullname"
              className={style.register__form__item__input}
            />
          </div>
          <div className={style.register__form__item}>
            <label
              htmlFor="email"
              className={style.register__form__item__label}
            ></label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className={style.register__form__item__input}
            />
          </div>
          <div className={style.register__form__item}>
            <label
              htmlFor="password"
              className={style.register__form__item__label}
            ></label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className={style.register__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={style.register__form__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
      </div>
      <p className={style.register__link}>
        Have an account? Sign in <Link href="/auth/login">here</Link>
      </p>
    </div>
  );
};

export default RegisterView;
