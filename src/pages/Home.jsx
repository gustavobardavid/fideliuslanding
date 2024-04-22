import Container from '@mui/material/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Docs from '../components/Docs';
import Buttons from '../components/Buttons';

export default function Home() {
  return (
     <>
     <body>
     <header>  
        <Header />
     </header>
        <main>
         <Docs />
        </main>
        <div className='hero'>
            <Hero  />
        </div>
      </body>
     </> 
  );
}