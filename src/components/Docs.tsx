import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const tiers = [
  {
    title: 'O que é Fidelius?',
    description: [
      'Fidelius é um sistema de semiologia farmacêutica leve e de fácil uso. Ele foi criado com ajuda de profissionais da área de farmácia para oferecer o necessário para o usuário.'
    ]
  },
  {
    title: 'Fidelius como produto',
    description: [
      'A licença do Fidelius é vendida apenas uma vez; Correções de bugs e de qualidade não tem custos adicionais; É cobrado uma taxa de instalação por máquina.'
    ]
  },
  {
    title: 'Diferenciais',
    description: [
      'Leve, simples acesso e mutável. Basta abrir o seu navegador e já está pronto pra uso. Funcionalidades podem ser adicionadas com a preferência do usuário.'
    ]
  },
];

export default function Pricing() {
  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography style={{fontFamily:'gow-font'}} component="h2" variant="h4" color="#fff">
        What is GoW DB?
        </Typography>
        <Typography variant="body1" color="#fff" style={{fontFamily:'gow-font'}}>
        See some of the documentation
        </Typography>
      </Box>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        {tiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            md={4}
          >
            <Card
              sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                border: tier.title === 'Fidelius' ? '1px solid' : undefined,
                borderColor:
                  tier.title === 'Fidelius' ? '#fff' : undefined,
                background:
                  tier.title === 'Fidelius'
                    ? '#000'
                    : undefined,
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    mb: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color:
                      tier.title === 'Fidelius' ? '#fff' : '',
                  }}
                >
                  <Typography component="h3" variant="h6" style={{fontFamily:'gow-font'}}>
                    {tier.title}
                  </Typography>
                  
                </Box>
                <Divider
                  sx={{
                    my: 2,
                    opacity: 0.2,
                    borderColor: 'grey.500',
                  }}
                />
                {tier.description.map((line) => (
                  <Box
                    key={line}
                    sx={{
                      py: 1,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      component="text"
                      style={{fontFamily:'gow-font', textAlign: 'left'}}
                      sx={{
                        color:
                          tier.title === 'Fidelius'
                            ? '#fff'
                            : undefined,
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}