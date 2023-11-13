import { Grid } from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';

const DashboardDefault = () => {
  return (
    <Page title="Default Dashboard">
      <Grid container rowSpacing={4.5} columnSpacing={2.75}></Grid>
    </Page>
  );
};

DashboardDefault.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default DashboardDefault;
