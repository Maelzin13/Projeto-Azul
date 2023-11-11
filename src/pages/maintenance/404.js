// next
import Image from 'next/legacy/image';
import NextLink from 'next/link';

// material-ui
import { Button, Grid, Stack } from '@mui/material';

// project import
import { DEFAULT_PATH } from 'config';
import Layout from 'layout';
import Page from 'components/Page';

// assets
// const error404 = '/assets/images/maintenance/Error404.png';
const error404 = '/assets/images/maintenance/coming_soon_Azul.png';

// ==============================|| ERROR 404 - MAIN ||============================== //

function Error404() {
  return (
    <Page title="404">
      <style jsx global>{`
        body {
          margin: 0; /* Remove default margin */
          padding: 0; /* Remove default padding */
          background-image: url(${error404});
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .button-container {
          position: absolute;
          top: 20px; /* Adjust the top position as needed */
          right: 20px; /* Adjust the right position as needed */
        }
      `}</style>

      <Grid item xs={12} className="button-container">
        <Stack spacing={2} justifyContent="center" alignItems="center">
          <NextLink href={DEFAULT_PATH} passHref legacyBehavior>
            <Button variant="contained">Back To Home</Button>
          </NextLink>
        </Stack>
      </Grid>
    </Page>
  );
}

Error404.getLayout = function getLayout(page) {
  return <Layout variant="blank">{page}</Layout>;
};

export default Error404;
