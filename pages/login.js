import Head from "next/head";
import Image from "next/image";
import { useStateContext } from "../components/AnimeProvider";
import ls from "local-storage";
import { v4 } from "uuid";
import { useRouter } from "next/router";
import Router from "next/dist/next-server/server/router";
import Login from "../components/UI/Login/Login";
const loginPage = () => {
  return <Login />;
};
export default loginPage;
