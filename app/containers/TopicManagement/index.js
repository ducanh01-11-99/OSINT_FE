import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet/es/Helmet';
import { useTranslation } from 'react-i18next';
import { PlusOutlined } from '@ant-design/icons';
import SearchIcon from '../../images/icons/search.svg';

import {
  CardIcon,
  IconButton,
  InputSearch,
  SearchArea,
  TopicManagementContainer,
} from './styles';
import { PATHS, REDUX_KEY } from '../../utils/constants';
import { InputCustom } from '../../shared/styles/Input';
import { ButtonActive } from '../../shared/styles/ButtonActive';
const key = REDUX_KEY.topicManagement;

const TopicManagement = () => {
  const navigate = useNavigate();
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const [isFirst, setIsFirst] = useState(true);
  const { t } = useTranslation();
  const [valueSearch, setValueSearch] = useState();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!isFirst) {
        loadData();
      }
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [valueSearch]);

  const filterRef = useRef({
    page: 0,
    size: 10,
    keyword: '',
    parent_ids: [],
    from: '2022-01-01',
    to: currentDate,
    is_active: [0, 1], // 0: Đang hoạt đông, 1: Không hoạt động
    sort: 1,
  });

  const loadData = () => {
    // todo
  };

  const onChangeInput = event => {
    setIsFirst(false);
    setValueSearch(event.target.value);
    filterRef.current.keyword = event.target.value;
  };

  const handleAddTopic = () => {
    navigate(PATHS.CREATE_TOPIC);
  };

  return (
    <TopicManagementContainer>
      <Helmet title={t('common.helmet.topicManagement')}>
        <meta name="description" />
      </Helmet>
      <SearchArea>
        <InputSearch>
          <InputCustom
            addonBefore={
              <CardIcon>
                <IconButton alt="" src={SearchIcon} />
              </CardIcon>
            }
            placeholder={t('topicManagement.inputPlaceholder')}
            allowClear
            onChange={onChangeInput}
            size="large"
          />
        </InputSearch>
        <ButtonActive onClick={handleAddTopic}>
          {t('topicManagement.createTopic')}
          <PlusOutlined />
        </ButtonActive>
      </SearchArea>
    </TopicManagementContainer>
  );
};

export default TopicManagement;
