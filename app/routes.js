import { useTranslation } from 'react-i18next';
import AuthenticationLayout from './layout/AuthenticationLayout/loadable';
import SystemLayout from './layout/SystemLayout/loadable';
import Login from './containers/Login/loginLoadable';
import Topics from './containers/Topics/loadable';
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
    {
      name: t('common.topics'),
      path: PATHS.TOPICS,
      exact: true,
      layout: SystemLayout,
      component: Topics,
      breadcrumb: '',
      code: CODES.TOPICS,
      redirect: '',
    },
  ];
}
