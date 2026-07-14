import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingEvents from "../components/TrendingEvents";
import UpcomingEvents from "../components/UpcomingEvents";
import LatestNews from "../components/LatestNews";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingEvents />
      <UpcomingEvents />
      <LatestNews />
    </>
  );
}

export default Home;