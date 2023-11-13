import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { useMediaQuery } from '../../../../../node_modules/@mui/material/index';
import Image from 'next/legacy/image';
import { useTheme } from '@mui/material/styles';

const juniper = '/assets/images/maintenance/Junipper/JuniperResetarAcesso/passo_4.png';

export default function AlterandoPass() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container spacing={3} style={{ height: '100%' }}>
      {/* Left side */}
      <Grid item xs={6}>
        <div
          sx={{ height: '40%' }}
          style={{
            background: 'rgba(0, 0, 0, 0.40)',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -5px 5px',
            borderRadius: '25px',
            marginLeft: '5px',
            marginRight: '5px',
            marginTop: '5px',
            padding: '-2px'
          }}
        >
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
      <Grid item xs={6}>
        <MainCard sx={{ height: '100%', textAlign: 'center', borderRadius: '25px' }}>
          <Typography variant="h6" style={{ fontSize: '17px' }}>
            <strong>Procedimentos</strong>
          </Typography>
          <hr></hr>
          <Typography variant="body1" style={{ fontSize: '17px' }}>
            <h2>Selecionar o usuário</h2>
            <h4 color='red' background="red">Caso o usuario não esteja ativo, em hipótese alguma ativar.</h4>
            <strong>
              Neste caso, não realize o reset da senha e oriente que o mesmo procure pelo seu gestor direto.
            </strong>
            <br></br>
            <br></br>
            <li>
              Caso esteja <strong>Ativo</strong>, digitar a nova senha em <strong>Cambiar Contraseña  </strong> e depois <strong> Confirmar Constrasenã </strong>
            </li>
          </Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
}
