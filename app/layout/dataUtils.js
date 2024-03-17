import { useTranslation } from 'react-i18next';
import { ACCOUNT_SETTING_OPTION_ID, LOGOUT_OPTION_ID } from '../containers/App/constants';

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
