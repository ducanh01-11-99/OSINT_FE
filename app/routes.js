import { useTranslation } from 'react-i18next';
import AuthenticationLayout from './layout/AuthenticationLayout/loadable';
import Login from './containers/Login/loginLoadable';
import { CODES, PATHS } from './utils/constants';
export default function GetRoutes() {
  const { t } = useTranslation();
  return [
    {
      name: t('common.login'),
      path: PATHS.LOGIN,
      exact: true,
      layout: AuthenticationLayout,
      component: Login,
      breadcrumb: '',
      code: CODES.LOGIN,
      redirect: '',
    },
  ];
}
