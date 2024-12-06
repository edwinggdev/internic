import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionDestiny from "../components/SectionDestiny";

export default function Home() {
  return (<>
    <Navbar></Navbar>
    <SectionDestiny country="Madrid" description=" Fui sobre agua edificada, mis muros de fuego son..." background="/dest-madrid.jpg" logo="/dest-logo-espana.png" ></SectionDestiny>
    <SectionDestiny country="Paris" description="«Fluctuat nec mergitur» batida por las olas, pero no hundida'," background="/dest-paris.jpg" logo="/dest-logo-francia.png" ></SectionDestiny>
    <SectionDestiny country="Roma" description="SPQR (senatus populusque romanus). el Senado y el pueblo de Roma" background="/dest-roma.jpg" logo="/dest-logo-italia.png" ></SectionDestiny>

    <Footer></Footer>
  </>
    
  );
}