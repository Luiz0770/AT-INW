import React from "react";
import Carrosel from "./Carrosel";
import Menu from "./Menu";
import Footer from "./Footer";
import Descript from "./Descript";
import Recursos from "./Recursos";
import Impact from "./DescriptImpacto";
import Ideia from "./DescriptIdeia";
import "./Home.css"; // Importe o arquivo CSS que você criou

function Home() {
  return (
    <div>
      <div className="menu">
        <Menu />
      </div>
      <Carrosel />

      <div className="conteudo">
        <div>
          <Descript
            text="O EcoPlanet é uma plataforma online que visa promover a conscientização e ações sustentáveis para ajudar a melhorar a saúde do planeta. Ele se baseia na colaboração de indivíduos, comunidades e organizações para fazer escolhas mais sustentáveis em suas atividades diárias."
            imageUrl="https://cdn.discordapp.com/attachments/769767224911069236/1138446230050058352/pexels-cottonbro-studio-4503265.jpg"
          />
        </div>
        <div className="conteudo">
          <Impact
            text="O EcoPlanet visa sensibilizar e educar as pessoas sobre a importância da sustentabilidade, incentivando ações positivas para minimizar o impacto ambiental. Ao reunir uma comunidade comprometida, a plataforma pode contribuir para a redução das emissões de carbono, a conservação de recursos naturais e o estímulo a uma economia mais verde."
            imageUrl="https://cdn.discordapp.com/attachments/769767224911069236/1138843267262328922/pexels-myburgh-roux-3335785.jpg"
          />
        </div>
        <div className="proposta">
          <Ideia
            text="Nossa proposta é criar um site de navegador interativo onde os usuários podem se envolver em atividades e desafios relacionados à sustentabilidade para ganhar EcoPoints. Esses EcoPoints seriam moedas virtuais que podem ser trocadas por recompensas reais, como descontos em produtos e serviços e doações para organizações ambientais."
            imageUrl="https://cdn.discordapp.com/attachments/769767224911069236/1140627310815498291/Untitled-2.jpg"
          />
        </div>
        <div className="cards">
          <Recursos />
        </div>
      </div>
      <div className="conteudo">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
