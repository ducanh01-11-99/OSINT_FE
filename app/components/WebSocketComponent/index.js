import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import { notification } from 'antd';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
// import { REDUX_KEY } from '../../utils/constants';
// import { useInjectSaga } from '../../utils/injectSaga';
// import saga from '../../containers/Warning/saga';
// import { useInjectReducer } from '../../utils/injectReducer';
// import reducer from '../../containers/Warning/reducer';
// import * as action from '../../containers/Warning/actions';
// import { COUNT_NOTIFY } from '../../containers/Warning/constant';

const baseURL = `${
  process.env.NODE_ENV === 'production'
    ? window.SystemConfig.SOCKET_URL
    : process.env.SOCKET_URL
}`;

// const key = REDUX_KEY.warning;

// eslint-disable-next-line no-unused-vars
const WebSocketComponent = ({ type, isShowFloatMessage }) => {
  // const dispatch = useDispatch();
  // useInjectSaga({ key, saga });
  // useInjectReducer({ key, reducer });

  const { t } = useTranslation();
  const [stompClient, setStompClient] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  const [connected, setConnected] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const updateNotify = data => {
    // todo
    // dispatch(action.pushNotifySuccess(data));
    // const c = localStorage.getItem(COUNT_NOTIFY);
    // if (c) {
    //   localStorage.setItem(COUNT_NOTIFY, Number(c) + 1);
    // } else {
    //   localStorage.setItem(COUNT_NOTIFY, 1);
    // }
  };

  // const [time, setTime] = useState(1);

  // eslint-disable-next-line no-unused-vars
  const showMessage = data => {
    if (data.criteria === 0) {
      // Thông báo theo chủ đề
      api.warning({
        message: t('notification.topicTitle'),
        description: t('notification.topicContent', {
          name: data.content,
        }),
        placement: 'topRight',
        duration: 3,
      });
    }
    if (data.criteria === 1) {
      // Thông báo theo từ khóa
      api.warning({
        message: t('notification.keywordTitle'),
        description: t('notification.keywordContent', {
          name: data.content,
        }),
        placement: 'topRight',
        duration: 3,
      });
    }
    if (data.criteria === 2) {
      // Thông báo theo đối tượng
      api.warning({
        message: t('notification.objectTitle'),
        description: t('notification.objectContent', {
          name: data.content,
        }),
        placement: 'topRight',
        duration: 3,
      });
    }
  };

  // eslint-disable-next-line no-unused-vars
  const openNotification = body => {
    let notify = '';
    if (body.type === 'waring') {
      notify = 'warning';
    } else if (body.type === 'ok') {
      notify = 'success';
    } else {
      notify = 'error';
    }
    const message = 'title';
    const description = 'description';
    api[notify]({
      message,
      description,
      placement: 'bottomRight',
    });
  };

  useEffect(() => {
    const socket = new SockJS(`${baseURL}/websocket`);
    const client = Stomp.over(socket);
    client.debug = null; // Dong nay de an debug
    client.connect({}, () => {
      setStompClient(client);
      setConnected(true);
      // eslint-disable-next-line no-unused-expressions
      connected &&
        stompClient.subscribe('/topic/warning', message => {
          const body = JSON.parse(message.body);
          // console.log(body);
          updateNotify(body);
        });
    });
    return () => {
      if (connected) {
        try {
          client.unsubscribe();
          client.disconnect();
          socket.close();
        } catch (e) {
          console.log(e);
        }
      }
    };
  }, [connected]);

  return <div>{contextHolder}</div>;
};

WebSocketComponent.propTypes = {
  type: PropTypes.string,
  isShowFloatMessage: PropTypes.bool,
};

export default WebSocketComponent;
