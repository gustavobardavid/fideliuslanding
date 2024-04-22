import Container from '@mui/material/Container';
import Presentation from '../components/Presentation';
import FotoProfile from '../components/FotoProfile';
import Habilidades from '../components/Habilidades';
import '../vendor/fontawesome-free/css/all.min.css' 

export default function Home() {
  return (
     <>
     <div className='hello'>
          <Presentation
          foto = './assets/eu2.jpg'/>
          </div>
      <br />
      <Habilidades/>
      <div className="proposta">
            <h2>Se interessou?</h2>
            <a href="https://wa.me/5583991135073/?text=Oi,+Gustavo!+Quero+comprar+o+Fidelius">
            <button href='https://wa.me/5583991135073/?text=Oi,+Gustavo!+Quero+solicitar+um+orçamento'>Solicitar<span className="material-symbols-outlined">navigate_next</span></button>
            </a>
        </div>
     </> 
  );
}