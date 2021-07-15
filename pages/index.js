import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="login-user">
        <div className="login-user__top">
          <div className="login-user__logo" />
          <span className="login-user__title">Who Is Watching?</span>
        </div>

        <div className="login-user__form">
          <div className="login-user__user-box">
            <img
              className="login-user__user-img"
              src="https://i.pinimg.com/originals/90/71/88/90718823e398e86b0260ff47d7187acd.jpg"
            ></img>
            <div className="login-user__user-name"> Renel</div>
          </div>
        </div>
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Otaku </button>
          <button className="login-user__kid">Add Weeb</button>
        </div>
      </div>
    </div>
  );
}
