import "../styles/styles.scss";
import { AnimeProvider } from "../components/AnimeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <AnimeProvider>
      <Component {...pageProps} />
    </AnimeProvider>
  );
}

export default MyApp;
