import PropTypes from 'prop-types';

import '../App.css'
import '../styles/button.css'
import '../styles/gallery.css'
import '../styles/card.css'

const FotoProfile = ({foto}) => {
    return (
        <>
      
<div className='profile-text'>    
<h1>Seu Sistema de Semiologia Farmacêutica</h1>
           
</div>
        </>
    );
}

FotoProfile.propTypes = {
    foto: PropTypes.string.isRequired
  };

export default FotoProfile
