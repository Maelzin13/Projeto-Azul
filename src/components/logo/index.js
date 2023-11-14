import PropTypes from 'prop-types';
import NextLink from 'next/link';

// material-ui
import { ButtonBase } from '@mui/material';

// project import
import { DEFAULT_PATH } from 'config';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ sx, to }) => (
  <NextLink href={!to ? DEFAULT_PATH : to} passHref legacyBehavior>
    <ButtonBase disableRipple sx={sx}>
      {/* <img src="/assets/images/logo.png" alt="Your Logo Alt Text" style={{ width: '50%', height: 'auto' }} /> */}
    </ButtonBase>
  </NextLink>
);

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string
};

export default LogoSection;
