import { useTranslation } from 'react-i18next';
import iconDashboard from '../images/icons/dashboardMenu.svg';
import {
  ACCOUNT_SETTING_OPTION_ID,
  LOGOUT_OPTION_ID,
} from '../containers/App/constants';
import optionAccountSettingIcon from '../images/icons/optionAccountSetting.svg';
import optionLogoutIcon from '../images/icons/optionLogout.svg';

export function GetMenuPermission() {
  return [
    'p-setting',
    'p-news-topics',
    'p-ads-layout',
    'p-news',
    'p-news-tracking',
    'p-news-tracing',
    'p-news-report',
    'p-management',
    'p-topic-management',
    'p-warning',
    'p-new-warning',
    'p-warning-topic',
  ];
}

export function GetDataMenu() {
  const { t } = useTranslation();
  return [
    {
      key: 'p-news-topics',
      path: '/news/:topicId',
      icon: iconDashboard,
      label: t('common.topics'),
    },
    {
      key: 'p-tracking-topics',
      path: '/tracking/:topicId',
      icon: iconDashboard,
      label: t('common.tracking'),
    },
    // {
    //   key: 'p-demo',
    //   icon: iconDashboard,
    //   label: t('common.demo'),
    //   child: [
    //     {
    //       key: 'p-text-to-voice',
    //       path: '/demo/text-to-voice',
    //       label: t('common.textToVoice'),
    //     },
    //     {
    //       key: 'p-ads-layout',
    //       path: '/demo/ads-layout',
    //       label: t('common.adsLayout'),
    //     },
    //   ],
    // },
  ];
}

export function GetOptionList() {
  const { t } = useTranslation();
  return [
    {
      id: ACCOUNT_SETTING_OPTION_ID,
      icon: optionAccountSettingIcon,
      label: t('common.settingAccountOption'),
    },
    {
      id: LOGOUT_OPTION_ID,
      icon: optionLogoutIcon,
      label: t('common.logoutOption'),
    },
  ];
}
