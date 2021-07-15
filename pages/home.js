import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/Layouts/Mainlayout";
import FeaturedMedia from "../components/UI/Featured/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";
import JustAdded from "../components/UI/JustAdded/JustAdded";
import PosterView from "../components/UI/PoseterView/PosterView";

export default function HomeView() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  );
}
