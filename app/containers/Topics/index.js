import React, { useRef } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Container, TopicsTimeFilter, TopicsWrapper } from './styles';
import TimeSelect from '../../components/TimeSelect';
import { DEFAULT_LIST_EVALUATE } from './constants';
import { selectTime } from './selector';

const Topics = () => {
  const { t } = useTranslation();
  const keyTopics = window.localStorage.getItem('keyMenu');
  const timeSelect = useSelector(selectTime());
  const filterRef = useRef({
    topic_id: keyTopics,
    page: 1,
    size: 10,
    source_data: {
      facebook_group: 1,
      facebook_page: 1,
      facebook_story: 1,
      facebook_comment: 0,
      tiktok_comment: 0,
      tiktok_video: 1,
      youtube: 1,
      youtube_comment: 0,
      electronic_media: 1,
      electronic_media_comment: 0,
    },
    filter: {
      key_word: '',
      search_keyword: '',
      evaluate: DEFAULT_LIST_EVALUATE,
    },
    time: timeSelect,
  });
  return (
    <Container>
      <Helmet title={t('common.menuTab.topic')}>
        <meta name="description" content="Osint" />
      </Helmet>
      <TopicsWrapper>
        <TopicsTimeFilter>
          <TimeSelect
            onChangeValue={value => {
              filterRef.current.time = value;
              // dispatch(actions.changeTime({ time: value }));
              // loadData();
            }}
            valueRangePicker={filterRef.current.time}
          />
        </TopicsTimeFilter>
      </TopicsWrapper>
    </Container>
  );
};

export default Topics;
