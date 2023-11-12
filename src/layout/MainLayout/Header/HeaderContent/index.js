import { Grid, useMediaQuery } from '@mui/material';
import Customization from './Customization';
import DrawerHeader from 'layout/MainLayout/Drawer/DrawerHeader';
import { MenuOrientation } from 'config';
import useConfig from 'hooks/useConfig';

const HeaderContent = () => {
  const { menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <Grid container justifyContent="center" alignItems="center">
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && (
        <Grid item>
          <DrawerHeader open={true} sx={{ width: '100%', ml: 1 }} />
        </Grid>
      )}

      <Grid item>
        <Customization />
      </Grid>
    </Grid>
  );
};

export default HeaderContent;
