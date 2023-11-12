import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, CardMedia } from '@mui/material';
import { ThemeDirection } from 'config';

const FooterBlock = ({ isFull }) => {
  const theme = useTheme();

  return (
    <>
      {isFull && (
        <Box
          sx={{
            position: 'relative',
            bgcolor: theme.palette.grey.A700,
            zIndex: 1,
            mt: { xs: 0, md: 13.75 },
            pt: { xs: 8, sm: 7.5, md: 18.75 },
            pb: { xs: 2.5, md: 10 },
            '&:after': {
              content: '""',
              position: 'absolute',
              width: '100%',
              height: '80%',
              bottom: 0,
              left: 0,
              background:
                theme.direction === ThemeDirection.RTL
                  ? `linear-gradient(transparent 100%, rgb(31, 31, 31) 70%)`
                  : `linear-gradient(180deg, transparent 0%, ${theme.palette.grey.A700} 70%)`
            }
          }}
        >
          <CardMedia />
        </Box>
      )}
    </>
  );
};

FooterBlock.propTypes = {
  isFull: PropTypes.bool
};

export default FooterBlock;
