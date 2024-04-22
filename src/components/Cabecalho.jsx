import '../styles/button.css';
import '../styles/gallery.css';
import '../styles/card.css';
import '../vendor/fontawesome-free/css/all.min.css'; 

const Cabecalho = () => {
  return (
    <header>   
    <span className="btn">
        <a
            href="#"
            className='button'
        >
            <svg>
                <rect
                    x="0" y="0" 
                    fill="none"
                    width="100%"
                    height="100%"
                />
            </svg>
            Programize
        </a>            
    </span>
</header> 
  );
}

export default Cabecalho;