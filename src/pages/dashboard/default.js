import {
  // Avatar,
  // AvatarGroup,
  // Box,
  // Button,
  Grid
  // List,
  // ListItemAvatar,
  // ListItemButton,
  // ListItemSecondaryAction,
  // ListItemText,
  // MenuItem,
  // Stack,
  // TextField,
} from '@mui/material';

// project import
import Layout from 'layout';
import Page from 'components/Page';
// import MainCard from 'components/MainCard';
// import IncomeAreaChart from 'sections/dashboard/default/IncomeAreaChart';
// import MonthlyBarChart from 'sections/dashboard/default/MonthlyBarChart';
// import ReportAreaChart from 'sections/dashboard/default/ReportAreaChart';
// import SalesChart from 'sections/dashboard/SalesChart';
// import OrdersTable from 'sections/dashboard/default/OrdersTable';

// assets
// import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';

// const avatar1 = '/assets/images/users/avatar-1.png';
// const avatar2 = '/assets/images/users/avatar-2.png';
// const avatar3 = '/assets/images/users/avatar-3.png';
// const avatar4 = '/assets/images/users/avatar-4.png';

// // avatar style
// const avatarSX = {
//   width: 36,
//   height: 36,
//   fontSize: '1rem'
// };

// // action style
// const actionSX = {
//   mt: 0.75,
//   ml: 1,
//   top: 'auto',
//   right: 'auto',
//   alignSelf: 'flex-start',
//   transform: 'none'
// };

// // sales report status
// const status = [
//   {
//     value: 'today',
//     label: 'Today'
//   },
//   {
//     value: 'month',
//     label: 'This Month'
//   },
//   {
//     value: 'year',
//     label: 'This Year'
//   }
// ];

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  // const [value, setValue] = useState('today');
  // const [slot, setSlot] = useState('week');

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
