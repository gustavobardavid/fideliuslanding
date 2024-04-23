import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <>
    <div className='content'>
        <div className='harmony-video'>
        </div>
        <div className='hero'>
            <Box
        id="hero"
        sx={({
          width: '100%',
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat'
        })}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: { xs: 1, sm:  15 },
            pb: { xs: 22, sm: 12 }
          }}
        >
          <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
                component="span"
                variant="h2"
                sx={{
                  color: 'var(--secondary)',
                  fontFamily: 'Poppins',
                  fontWeight:'bold'
                }}
              >#Pacientes
              </Typography>
              <Typography
                component="span"
                variant="h4"
                sx={{
                  color: 'var(--secondary)',
                  fontFamily: 'Poppins'
                }}
              >
              Visualize seus pacientes, receite medicamentos e peça exames.  
              </Typography>
            <Typography variant="body2" textAlign="center" color='var(--secondary)' style={{ fontFamily: 'Poppins' }}>  
            Adicione, acompanhe e exclua exames e medicamentos. 
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              alignSelf="center"
              spacing={1}
              useFlexGap
              sx={{ pt: 2, width: { xs: '100%', sm: 'auto' }, fontFamily: 'Poppins' }}
            >
            </Stack>
          </Stack>
        </Container>
        </Box>
      </div>
      </div>
    </>
  );
}