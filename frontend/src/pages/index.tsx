import { NextPage } from "next";
import { useRouter } from "next/router";
import { IoIosSearch } from "react-icons/io";

import SEO from "../components/SEO";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
    <h1>Landing page</h1>
    </div>
  );
};

export default Home;
