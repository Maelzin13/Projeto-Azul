import React from 'react';
import { Grid, Button } from '@mui/material';

import Layout from 'layout';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';

const Background = styled('div')({
  backgroundImage: "url('/assets/images/maintenance/img1Borrada.png')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px'
});

const ComarchReset = () => {
  const router = useRouter();

  return (
    <Background>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6} lg={7} container justifyContent="center" spacing={2} style={{ marginBottom: '1200px' }}>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => router.replace('/forms/comarch')}
              style={{
                textTransform: 'none',
                borderRadius: 8,
                padding: '10px 20px',
                backgroundColor: '#F44336',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#D32F2F'
                }
              }}
            >
              Resetar
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => router.replace('/forms/cormarch')}
              style={{
                textTransform: 'none',
                borderRadius: 8,
                padding: '10px 20px',
                backgroundColor: '#2196F3',
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#1565C0'
                }
              }}
            >
              Desbloquear
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Background>
  );
};

ComarchReset.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ComarchReset;
