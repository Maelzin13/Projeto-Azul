// material-ui

// project imports
import Layout from 'layout';
import Page from 'components/Page';
import SelectForms from 'sections/forms/validation/SelectForms';

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <Page title="Sample Page">
    <SelectForms />
  </Page>
);

SamplePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default SamplePage;
