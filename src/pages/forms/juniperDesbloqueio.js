// material-ui
import { Grid } from '@mui/material';

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import JuniperDesbloqueio from 'sections/forms/juniper/junipersDesbloqueio/index';

// import ValidationWizard from 'sections/forms/wizard/validation-wizard';

// ==============================|| FORMS WIZARD ||============================== //

const JuniperTela = () => (
  <Page title="Forms Wizard">
    <Grid container spacing={2.5} justifyContent="center">
      <Grid item xs={12} md={6} lg={7}>
        <JuniperDesbloqueio />
      </Grid>
      {/* <Grid item xs={12} md={6} lg={7}>
        <ValidationWizard />
      </Grid> */}
    </Grid>
  </Page>
);

JuniperTela.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default JuniperTela;
