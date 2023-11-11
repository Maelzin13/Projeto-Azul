import { Grid } from '@mui/material';

import Layout from 'layout';
import Page from 'components/Page';
import WordTracer from 'sections/forms/word-tracer/basic-wizard/index';

const WordTracerTela = () => (
  <Page title="Forms Wizard">
    <Grid container spacing={2.5} justifyContent="center">
      <Grid item xs={12} md={6} lg={7}>
        <WordTracer />
      </Grid>
    </Grid>
  </Page>
);

WordTracerTela.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default WordTracerTela;
