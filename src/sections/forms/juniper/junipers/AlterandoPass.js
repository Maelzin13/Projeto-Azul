import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import Image from 'next/legacy/image';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';

const juniper = '/assets/images/maintenance/Junipper/JuniperResetarAcesso/passo_4.png';

export default function AlterandoPass() {
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
            src={juniper}
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
          <Typography variant="h6" style={{ fontSize: '17px' }}>
            <strong>Procedimentos</strong>
          </Typography>
          <hr />
          <Typography variant="body1" style={{ fontSize: '17px' }}>
            <h2>Selecionar o usuário</h2>
            <h4 color="red" background="red">
              Caso o usuário não esteja ativo, em hipótese alguma ativar.
            </h4>
            <strong>Neste caso, não realize o reset da senha e oriente que o mesmo procure pelo seu gestor direto.</strong>
            <br />
            <br />
            <li>
              Caso esteja <strong>Ativo</strong>, digitar a nova senha em <strong>Cambiar Contraseña </strong> e depois{' '}
              <strong> Confirmar Constrasenã </strong>
            </li>
          </Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
}
