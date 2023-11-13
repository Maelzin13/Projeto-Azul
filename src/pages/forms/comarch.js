import { Grid } from '@mui/material';

import Layout from 'layout';
import Page from 'components/Page';
import Comarch from 'sections/forms/comarch/comarchs/index';

const ComarchTela = () => (
  <Page title="Forms Wizard">
    <Grid container spacing={2.5} justifyContent="center">
      <Grid item xs={12} md={6} lg={7}>
        <Comarch />
      </Grid>
    </Grid>
  </Page>
);

ComarchTela.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ComarchTela;
