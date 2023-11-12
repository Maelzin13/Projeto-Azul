import { FormattedMessage } from 'react-intl';
import { useSelector } from 'store';

export const Menu = () => {
  const { menu } = useSelector((state) => state.menu);

  const menuList = {
    ...menu,
    title: <FormattedMessage id={`${menu.title}`} />
  };

  return menuList;
};
