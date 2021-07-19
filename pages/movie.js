import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/Layouts/Mainlayout";
import FeaturedMedia from "../components/UI/Featured/FeaturedMedia";
import PosterView from "../components/UI/PoseterView/PosterView";
import CastInfo from "../components/UI/CastInfo/CastInfo";
import AuthCheck from "../components/AuthCheck";

export default function HomeView() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>
  );
}
