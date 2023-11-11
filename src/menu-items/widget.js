// third-party
import { FormattedMessage } from 'react-intl';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const widget = {
  id: 'group-widget',
  title: <FormattedMessage id="sistemas" />,

  type: 'group',
  children: [
    {
      id: 'statistics',
      title: <FormattedMessage id="comarch" />,
      type: 'item',
      url: '/forms/wizard'
    },
    {
      id: 'data',
      title: <FormattedMessage id="wordtracer" />,
      type: 'item',
      url: '/widget/data'
    },
    {
      id: 'wizard',
      title: <FormattedMessage id="juniper" />,
      type: 'item',
      url: '/auth/reset-password'
    },
    {
      id: 'apdata',
      title: <FormattedMessage id="trax" />,
      type: 'item',
      url: '/maintenance/404'
    },

    {
      id: 'newskies',
      title: <FormattedMessage id="newskies" />,
      type: 'item',
      url: '/maintenance/404'
    },
    {
      id: 'apdata',
      title: <FormattedMessage id="apdata" />,
      type: 'item',
      url: '/maintenance/404'
    },
    {
      id: 'amadeus',
      title: <FormattedMessage id="amadeus" />,
      type: 'item',
      url: '/maintenance/404'
    },
    {
      id: 'sabre',
      title: <FormattedMessage id="sabre" />,
      type: 'item',
      url: '/maintenance/404'
    },
    {
      id: 'smartkargo',
      title: <FormattedMessage id="smartkargo" />,
      type: 'item',
      url: '/maintenance/404'
    },
    {
      id: 'smartkargo',
      title: <FormattedMessage id="portalrh" />,
      type: 'item',
      url: '/maintenance/404'
    },
    {
      id: 'smartkargo',
      title: <FormattedMessage id="concessao" />,
      type: 'item',
      url: '/maintenance/404'
    }
  ]
};

export default widget;
