import Image from "next/image";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

export default function Home() {
  return (
    <div className='home'>
        <span className='home_animation'></span>
        <Navbar />
        <Banner />
    </div>
  );
}
