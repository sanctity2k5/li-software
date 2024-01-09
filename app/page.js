import Image from "next/image";
import backgroundImg from "../assets/background-image.jpg";
import Navbar from "@/components/nav/nav";
import Banner from "@/components/banner/banner";
import Patner from "@/components/patners/patner";
import Statistics from "@/components/statistics/statistics";
import picOne from "@/assets/statistics-one.png";
import picTwo from "@/assets/statistics-two.png";

function Home() {
  return (
    <div className="relative">
      <Image
        src={backgroundImg}
        alt="background"
        className="w-full h-[800px]"
      />
      <div className="absolute top-0 left-0 right-0 lg:px-24">
        <Navbar />
        <Banner />
        <Patner />
        <Statistics
          className="flex flex-col lg:flex-row items-center px-6 mt-10 text-xs gap-2"
          picOne={picOne}
          title="Decoding LU Software: A Journey into Next-Gen Digital Solutions"
          subtitle=" Unraveling the Intricacies of LU Software’s High-Tech Ecosystem: A
          Detailed Analysis of Its Revolutionary Features and Groundbreaking
          Tools"
        />
        <Statistics
          className="flex flex-col lg:flex-row-reverse items-center px-6 mt-1 text-xs gap-2"
          picOne={picTwo}
          title="Mastering LU Software: Pioneering the Digital Frontier"
          subtitle="Demystifying the Technological Marvels of LU Software: An In-Depth Examination of Its State-of-the-Art Features and Trailblazing Tools"
        />
      </div>
    </div>
  );
}

export default Home;
