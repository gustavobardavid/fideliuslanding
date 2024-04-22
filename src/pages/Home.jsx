import Container from '@mui/material/Container';
import Presentation from '../components/Presentation';
import FotoProfile from '../components/FotoProfile';
import Habilidades from '../components/Habilidades';
import '../vendor/fontawesome-free/css/all.min.css' 
import Techstack from '../components/Techstack';
import Cabecalho from '../components/Cabecalho';
import Footer from '../components/Footer';
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';

export default function Home() {
  return (
     <>
     <div className='hello'>
          <Presentation
          foto = './assets/eu2.jpg'/>
          </div>
      <br />
      <aside>
         <FotoProfile />
      </aside>
      <Habilidades/>
        <Hero1 />
      <Techstack />
      <div className="proposta">
            <h2>Solicite sua instalação</h2>
            <a href="https://wa.me/5583991135073/?text=Oi,+Gustavo!+Quero+comprar+o+Fidelius">
            <button href='https://wa.me/5583991135073/?text=Oi,+Gustavo!+Quero+solicitar+um+orçamento'>Solicitar<span className="material-symbols-outlined">navigate_next</span></button>
            </a>
        </div>
        <Cabecalho />
        <footer>
         <Footer />
        </footer>
     </> 
  );
}