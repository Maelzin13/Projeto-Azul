import React from 'react';
import { Grid, Button } from '@mui/material';

import Layout from 'layout';
import Page from 'components/Page';
import { useRouter } from 'next/router';


const WordTracerReset = () => {
  const router = useRouter();
  

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
    <Grid item xs={12} md={6} lg={7} container justifyContent="center" spacing={2} style={{ marginBottom: '1200px' }}>
      {/* Ajuste a propriedade marginBottom conforme necessário */}
      <Grid item>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => router.replace('/forms/words')}
          style={{
            textTransform: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            backgroundColor: '#F44336',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#D32F2F',
            },
          }}
        >
          Resetar
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.replace('/forms/words')}
          style={{
            textTransform: 'none',
            borderRadius: 8,
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: '#FFFFFF',
            '&:hover': {
              backgroundColor: '#1565C0',
            },
          }}
        >
          Desbloquear
        </Button>
      </Grid>
    </Grid>
  </Grid>
);
};
WordTracerReset.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default WordTracerReset;
