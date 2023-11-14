import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { useMediaQuery } from '../../../../../node_modules/@mui/material/index';
import Image from 'next/legacy/image';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
const word = '/assets/images/maintenance/Wordtracer/passo_5.png';

export default function Reset() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const handleMouseEnterLeft = () => {
    setHoveredLeft(true);
  };

  const handleMouseLeaveLeft = () => {
    setHoveredLeft(false);
  };

  const handleMouseEnterRight = () => {
    setHoveredRight(true);
  };

  const handleMouseLeaveRight = () => {
    setHoveredRight(false);
  };

  return (
    <Grid container spacing={3} style={{ height: '100%' }}>
      {/* Left side */}
      <Grid
        item
        xs={6}
        style={{
          objectFit: 'cover',
          borderRadius: hoveredLeft ? '15px' : '25px',
          transform: hoveredLeft ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out, border-radius 0.3s ease-in-out'
        }}
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
      >
        <div sx={{ height: '40%' }}>
          <Image
            src={word}
            alt="mantis"
            layout="fixed"
            width={matchDownSM ? 460 : 475}
            height={matchDownSM ? 445 : 480}
            quality={85}
            style={{
              objectFit: 'cover',
              borderRadius: '25px'
            }}
          />
        </div>
      </Grid>

      {/* Right side */}
      <Grid
        item
        xs={6}
        style={{
          textAlign: 'center',
          borderRadius: hoveredRight ? '15px' : '25px',
          transform: hoveredRight ? 'scale(1.05)' : 'scale(1)',
          transition: 'transform 0.3s ease-in-out, border-radius 0.3s ease-in-out'
        }}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
      >
        <MainCard sx={{ height: '100%', textAlign: 'center', borderRadius: '25px' }}>
          <Typography variant="h6" style={{ fontSize: '20px' }}>
            <strong>
              <strong>Procedimentos</strong>
            </strong>
          </Typography>
          <hr></hr>
          <br></br>
          <Typography variant="body1">
            Inserir a senha em <strong>&rarr; New Password &larr;</strong>
          </Typography>
          <br></br>
          Segue a baixo o padrao de senha.
          <br />
          <br />
          <li>
            <strong>Password Tripulante:</strong> Primeiro letra do nome maiúsculo + último sobrenome minúsculo + primeiro número do RE +
            caractere especial &quot;*&quot;.
          </li>
          <br></br>
          <strong>EXEMPLO: Psilva1*.</strong>
          <br />
          <br />
          <li>
            <strong>Passord Terceiro:</strong> Primeira letra do nome maiúsculo + último sobrenome minúsculo + primeiro número do RG ou CPF
            + caractere especial.
          </li>
          <br />
          <strong>EXEMPLO:</strong> Rflemming4.
          <br />
          <hr></hr>
        </MainCard>
      </Grid>
    </Grid>
  );
}
