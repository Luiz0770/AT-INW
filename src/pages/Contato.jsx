import Menu from "./Menu";
import Formulario from "./Formulario";
import Footer from "./Footer";

function Contato() {
  return (
    <div>
      <Menu />
      <div style={{ marginTop: 50, marginBottom: 200 }}>
        <h1 className="container">Contato</h1>
        <Formulario />
      </div>
      <Footer />
    </div>
  );
}

export default Contato;
