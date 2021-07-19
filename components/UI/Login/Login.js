import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import useRouter from "next/router";
import { useStateContext } from "../../AnimeProvider";
import ls from "local-storage";
import { useMounted } from "../../Hooks/useMounted";

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter;
  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls("users") !== null ? ls("users") : [];
  let { hasMounted } = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    console.log("load effect", users);
  }, []);

  console.log("declared effect", users);
  const selectUser = (id) => {
    ls("activeUID", id);
    router.push("/home");
  };
  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            className="login-user__user-box"
            key={user.id}
          >
            <img
              className="login-user__user-img"
              src="https://i.pinimg.com/originals/90/71/88/90718823e398e86b0260ff47d7187acd.jpg"
            ></img>
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push("/");
  };

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>

      <div className="login-user__form">{hasMounted ? showUsers() : ""}</div>
      <div className="login-user__buttons">
        <button className="login-user__adult" onClick={createUser}>
          Create Otaku
        </button>
      </div>
    </div>
  );
};
export default Login;
