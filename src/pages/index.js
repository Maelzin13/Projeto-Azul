// project import
import Layout from 'layout';
import Page from 'components/Page';
import DashboardDefault from './dashboard/default';

export default function HomePage() {
  return (
    <Page title="Landing">
      <DashboardDefault />
    </Page>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <Layout variant="landing">{page}</Layout>;
};
