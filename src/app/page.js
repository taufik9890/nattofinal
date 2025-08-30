import About from "./components/About";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import Layout from "./components/Layout/layout";
import Partners from "./components/Partners";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";


export default function Home() {
  return (
    <> 
    <Layout>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Blog/>
      <Partners/>
      <Subscribe/>
    </Layout>
    </>
  )
}
