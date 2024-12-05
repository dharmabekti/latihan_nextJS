import { useState } from "react";
import style from "./Login.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const LoginView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push, query } = useRouter();
  const callbackUrl: any = query.callbackUrl || "/";
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email or password is incorrect");
      }
    } catch (error: any) {
      setIsLoading(false);
      setError("Email or password is incorrect");
    }
  };
  return (
    <div className={style.login}>
      <h1 className={style.login__title}>Sign In</h1>
      {error && <p className={style.login__error}>{error}</p>}
      <div className={style.login__form}>
        <form onSubmit={handleSubmit} method="post">
          <div className={style.login__form__item}>
            <label
              htmlFor="email"
              className={style.login__form__item__label}
            ></label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className={style.login__form__item__input}
            />
          </div>
          <div className={style.login__form__item}>
            <label
              htmlFor="password"
              className={style.login__form__item__label}
            ></label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              className={style.login__form__item__input}
            />
          </div>
          <button
            type="submit"
            className={style.login__form__button}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>
        <button
          className={style.login__form__google}
          onClick={() =>
            signIn("google", {
              redirect: false,
              callbackUrl,
            })
          }
        >
          Sign In with Google
        </button>
      </div>
      <p className={style.login__link}>
        Dont have an account? Sign up <Link href="/auth/register">here</Link>
      </p>
    </div>
  );
};

export default LoginView;
