import { Grid, Typography } from '@mui/material';
import MainCard from 'components/MainCard';
import { useMediaQuery } from '../../../../../node_modules/@mui/material/index';
import Image from 'next/legacy/image';
import { useTheme } from '@mui/material/styles';

const comarch = '/assets/images/maintenance/Comarch/passo_2.png';
export default function ScharcUser() {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container spacing={3} style={{ height: '200%' }}>
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
            src={comarch}
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
          <Typography variant="h6" style={{ fontSize: '20px' }}>
            <strong>Procedimentos</strong>
          </Typography>
          <hr></hr>
          <Typography variant="body1">
            Na aba Adiministração vá em Usuarios, Encontrar Usuarios.
            <br></br>
            <br></br>
            Acesse o campo de Usuario faça a sua pesquisa.
          </Typography>
          <br />
          <Typography>
            <strong>Lembrando que o user só pode efetuar o reset e desbloqueio se estiver ATIVO.</strong>
          </Typography>
        </MainCard>
      </Grid>
    </Grid>
  );
}
