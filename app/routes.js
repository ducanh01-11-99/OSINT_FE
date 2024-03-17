import { useTranslation } from 'react-i18next';
import AuthenticationLayout from './layout/AuthenticationLayout/loadable';
import SystemLayout from './layout/SystemLayout/loadable';
import LayoutManagement from './layout/LayoutManagement/loadable';
import Login from './containers/Login/loginLoadable';
import Topics from './containers/Topics/loadable';
import TopicManagement from './containers/TopicManagement/loadable';
import AccountManagement from './containers/AccountManagement/loadable';
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
    {
      name: t('common.topicManagement'),
      path: PATHS.TOPIC_MANAGEMENT,
      exact: true,
      layout: LayoutManagement,
      component: TopicManagement,
      breadcrumb: '',
      code: CODES.TOPICS,
      redirect: '',
    },
    {
      name: t('common.accountManagement'),
      path: PATHS.ACCOUNT_MANAGEMENT,
      exact: true,
      layout: LayoutManagement,
      component: AccountManagement,
      breadcrumb: '',
      code: CODES.TOPICS,
      redirect: '',
    },
  ];
}
