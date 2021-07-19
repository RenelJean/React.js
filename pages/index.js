import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useStateContext } from "../components/AnimeProvider";
import Login from "../components/UI/Login/Login";
import router, { useRouter } from "next/router";
import MainLayout from "../components/Layouts/Mainlayout";
import FeaturedMedia from "../components/UI/Featured/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";
import JustAdded from "../components/UI/JustAdded/JustAdded";
import PosterView from "../components/UI/PoseterView/PosterView";
import AuthCheck from "../components/AuthCheck";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  useEffect(() => {}, []);
  return AuthCheck(
    <div>
      <MainLayout>
        <FeaturedMedia />
        <ForYouList />
        <JustAdded />
        <PosterView />
      </MainLayout>{" "}
    </div>
  );
}
