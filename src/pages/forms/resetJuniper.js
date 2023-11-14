import React from 'react';
import { Grid, Button } from '@mui/material';
import NextLink from 'next/link';
import Layout from 'layout';
import { styled } from '@mui/system';

const Background = styled('div')({
  backgroundImage: "url('/assets/images/maintenance/img3Borrada.png')",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  borderRadius: '90px'
});

const JuniperReset = () => {
  return (
    <Background>
      <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={6} lg={7} container justifyContent="center" spacing={2}>
          <Grid item>
            <NextLink href="/forms/juniper" passHref legacyBehavior>
              <Button
                variant="contained"
                color="secondary"
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
            </NextLink>
          </Grid>
          <Grid item>
            <NextLink href="/forms/juniperDesbloqueio" passHref legacyBehavior>
              <Button
                variant="contained"
                color="primary"
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
            </NextLink>
          </Grid>
        </Grid>
      </Grid>
    </Background>
  );
};

JuniperReset.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default JuniperReset;
