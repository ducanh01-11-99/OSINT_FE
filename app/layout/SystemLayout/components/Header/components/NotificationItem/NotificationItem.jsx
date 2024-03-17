import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { Container, DateTime, Header, Icon, New, Title } from './styles';
import { PATHS } from '../../../../../../utils/constants';
import warning from '../../../../../../images/icons/warning.svg';
import { KEYWORD, TOPIC, OBJECT } from './constants';

const NotificationItem = ({
  data,
  id,
  closeDropdown,
  filterRef,
  isNew,
  border,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  // eslint-disable-next-line consistent-return
  const getTitle = () => {
    if (data.criteria === TOPIC) {
      return t('notification.topicTitle', {
        name: data.title,
      });
    }
    if (data.criteria === KEYWORD) {
      return t('notification.keywordTitle', {
        name: data.title,
      });
    }
    if (data.criteria === OBJECT) {
      return t('notification.objectTitle', {
        name: data.title,
      });
    }
  };

  // eslint-disable-next-line consistent-return
  const getContent = () => {
    if (data.criteria === TOPIC) {
      return t('notification.topicContent', {
        name: data.content,
      });
    }
    if (data.criteria === KEYWORD) {
      return t('notification.keywordContent', {
        name: data.content,
      });
    }
    if (data.criteria === OBJECT) {
      return t('notification.objectContent', {
        name: data.content,
      });
    }
  };
  const getDateTime = () =>
    format(new Date(data.created_at), 'yyyy-MM-dd HH:mm:ss');
  const onClickItem = () => {
    if (closeDropdown) {
      // Vì chức năng này dùng ở 2 màn hình nên phải đưa vào câu điều kiện
      closeDropdown(); // Sau khi click vào item thì đóng dropdown
    }
    if (filterRef) {
      // Sau khi click vào item thì reset filterRef để tránh xung đột dữ liệu.
      // eslint-disable-next-line no-param-reassign
      filterRef.current = {
        ...filterRef.current,
        page: 0,
        size: 10,
        keyword: '',
        all: false,
      };
    }
    navigate(`${PATHS.WARNING_TOPIC_ROOT}/${data.id}`);
  };
  return (
    <Container border={border} itemId={data.id} id={id} onClick={onClickItem}>
      {isNew && <New />}
      <Icon src={warning} alt="warning" />
      <div>
        <Header>{getTitle()}</Header>
        <Title>{getContent()}</Title>
        <DateTime>{getDateTime()}</DateTime>
      </div>
    </Container>
  );
};
NotificationItem.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
  closeDropdown: PropTypes.func,
  filterRef: PropTypes.func,
  isNew: PropTypes.bool,
  border: PropTypes.bool,
};
export default NotificationItem;
