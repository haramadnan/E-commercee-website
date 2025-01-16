import Header from "./components/Header";
import Hero from "./components/Hero";
import EditorsPics from "./components/EditorsPics";
import FeatureProducts from "./components/FeatureProducts";
import FeauresPosts from "./components/FeauresPost";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
     <EditorsPics />
    <FeatureProducts />
  <FeauresPosts />
  <Blog />
    </>
  );
}