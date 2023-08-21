import Menu from "./Menu";
import Texto from "./Texto"
import Footer from "./Footer";

function Sobre() {
  return (
    <div>
      <Menu/>
      <div style={{marginTop: 35, marginBottom: 70}}>
      <Texto/>
      </div>
      <Footer />
    </div>
  );
}

export default Sobre;
