import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { TableCustom } from '../../../../components/ListSourceTable/styled';
import {
  RowCustom,
  TitleTable,
} from '../../../ArticleTracing/components/ListRelativeArticle/styled';
import { ActionWrapper, Activate, Deactivate, Icon } from './TopicListStyled';
// Icons
import edit from '../../../../images/icons/_Edit.svg';
import history from '../../../../images/icons/accountManagement/historyIcon.svg';
import deleteIcon from '../../../../images/icons/topicManagement/delete.svg';
import { CustomModal } from '../../../Topics/components/ModalDetail/styled';
import { PATHS, REDUX_KEY } from '../../../../utils/constants';
import ViewHistoryTopic from '../ViewHistoryTopic/ViewHistoryTopic';
import FilterIcon from '../../../Tracking/components/TableKeyWordMap/Filter';
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from '../../../../layout/SystemLayout/saga';
import reducer from '../../../../layout/SystemLayout/reducer';
import { useInjectReducer } from '../../../../utils/injectReducer';
import * as actions from '../../../../layout/SystemLayout/actions';
import { selectTopics } from '../../../../layout/SystemLayout/selectors';
import FilterCalender from '../../../../components/FilterCalender/FilterCalender';
import ModalWarning from '../../../AccountManagement/components/ModalWarning';
import sagaTopicManagement from '../../saga';
import reducerTopicManagement from '../../reducer';
import * as actionsTopicManagement from '../../actions';

const TopicList = ({ data, count, filterRef, loadData }) => {
  const key = REDUX_KEY.topicsLayout;
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  const keyTopicManagement = REDUX_KEY.topicManagement;
  useInjectSaga({ key: keyTopicManagement, saga: sagaTopicManagement });
  useInjectReducer({
    key: keyTopicManagement,
    reducer: reducerTopicManagement,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openDel, setOpenDel] = useState(false);
  const { t } = useTranslation();
  const [dataSource, setDataSource] = useState([]);
  const [historyData, setHistoryData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [deleteData, setDeleteData] = useState('');
  const [selectTopicName, setSelectTopicName] = useState([]);
  const selectStatus = [
    {
      value: 0,
      label: t('topicManagement.active'),
    },
    {
      value: 1,
      label: t('topicManagement.deactivate'),
    },
  ];
  const topics = useSelector(selectTopics());
  const topicGroupFilter = value => {
    // eslint-disable-next-line no-param-reassign
    filterRef.current.parent_ids = value;
    loadData();
  };
  const statusFilter = value => {
    // eslint-disable-next-line no-param-reassign
    filterRef.current.is_active = value;
    loadData();
  };
  const columns = [
    {
      title: <TitleTable>{t('topicManagement.table.stt')}</TitleTable>,
      dataIndex: 'stt',
      width: '80px',
      render: text => <RowCustom>{text}</RowCustom>,
    },
    {
      title: (
        <TitleTable align="left">
          {t('topicManagement.table.topicName')}
        </TitleTable>
      ),
      dataIndex: 'topicName',
      ellipsis: true,
      render: text => <RowCustom align="left">{text}</RowCustom>,
    },
    {
      title: (
        <TitleTable align="left">
          {t('topicManagement.table.topicGroup')}
          {selectTopicName.length ? (
            <FilterIcon
              list={selectTopicName}
              listSelected={selectTopicName}
              setListSelected={arr => topicGroupFilter(arr)}
            />
          ) : null}
        </TitleTable>
      ),
      dataIndex: 'topicGroup',
      // eslint-disable--line no-unused-vars
      render: text => <RowCustom align="left">{text}</RowCustom>,
      ellipsis: true,
    },
    {
      title: (
        <TitleTable align="left">
          {t('topicManagement.table.createdDate')}
          <FilterCalender
            filterRef={filterRef}
            loadData={loadData}
            defaultFrom={filterRef.current.from}
            defaultTo={filterRef.current.to}
          />
        </TitleTable>
      ),
      dataIndex: 'createdDate',
      render: text => <RowCustom align="left">{text}</RowCustom>,
      ellipsis: true,
    },
    {
      title: (
        <TitleTable align="left">
          {t('topicManagement.table.createdBy')}
        </TitleTable>
      ),
      dataIndex: 'createdBy',
      render: text => <RowCustom align="left">{text}</RowCustom>,
      width: '200px',
      ellipsis: true,
    },
    {
      title: (
        <TitleTable align="left">
          {t('topicManagement.table.status')}
          <FilterIcon
            list={selectStatus}
            listSelected={[0, 1]}
            setListSelected={arr => statusFilter(arr)}
          />
        </TitleTable>
      ),
      dataIndex: 'status',
      render: text => <RowCustom align="left">{text}</RowCustom>,
      ellipsis: true,
    },
    {
      title: <TitleTable>{t('topicManagement.table.action')}</TitleTable>,
      dataIndex: 'action',
      render: text => <RowCustom align="left">{text}</RowCustom>,
      ellipsis: true,
    },
  ];
  const handleTableChange = pagination => {
    // eslint-disable-next-line no-param-reassign
    filterRef.current.page = pagination.current - 1;
    // eslint-disable-next-line no-param-reassign
    filterRef.current.size = pagination.pageSize;
    loadData();
  };
  const handleClickEdit = item => {
    const { id } = item;
    navigate(`${PATHS.TOPIC_MANAGEMENT}/edit/${id}`);
  };
  const handleSubmitDel = () => {
    setOpenDel(false);
    dispatch(
      actionsTopicManagement.deleteTopic({
        id: deleteData.id,
        callBackSuccess: () => {
          toast.success(t('topicManagement.deleteSuccess'));
          loadData();
        },
        callBackFailed: () => {
          toast.error(t('topicManagement.deleteFailed'));
        },
      }),
    );
  };
  const handleClickViewHistory = item => {
    setHistoryData(item);
    setOpenModal(true);
  };
  const handleClickDelete = item => {
    setDeleteData({
      id: item.id,
      name: item.name_topic_child,
    });
    setOpenDel(true);
  };
  const loadSelectTopic = () => {
    dispatch(actions.getTopics());
  };
  // eslint-disable-next-line no-shadow
  const convertData = data => {
    const dataMap = data.map((item, index) => ({
      ...item,
      stt: filterRef.current.size * filterRef.current.page + index + 1,
      status:
        item.is_active === 0 ? (
          <Activate>{t('topicManagement.active')}</Activate>
        ) : (
          <Deactivate>{t('topicManagement.deactivate')}</Deactivate>
        ),
      topicName: item.name_topic_child,
      topicGroup: item.name_topic_parent,
      createdDate: item.time_convert,
      createdBy: item.author,
      action: (
        <ActionWrapper>
          <Tooltip title={t('topicManagement.tooltip.edit')}>
            <Icon src={edit} alt="edit" onClick={() => handleClickEdit(item)} />
          </Tooltip>
          <Tooltip title={t('topicManagement.tooltip.history')}>
            <Icon
              src={history}
              alt="history"
              onClick={() => handleClickViewHistory(item)}
            />
          </Tooltip>
          <Tooltip title={t('topicManagement.tooltip.delete')}>
            <Icon
              src={deleteIcon}
              alt="delete"
              onClick={() => handleClickDelete(item)}
            />
          </Tooltip>
        </ActionWrapper>
      ),
    }));
    setDataSource(dataMap);
  };
  useEffect(() => {
    convertData(data);
    loadSelectTopic();
  }, [data]);
  useEffect(() => {
    const convertTopics = topics.map(item => ({
      value: item.id,
      label: item.name,
    }));
    // eslint-disable-next-line no-param-reassign
    filterRef.current.topicGroup = topics.map(item => item.id);
    setSelectTopicName(convertTopics);
  }, [topics]);
  return (
    <>
      <TableCustom
        textCellSize="14px"
        columns={columns}
        hasBorderTableHead
        dataSource={dataSource}
        pagination={{
          current: filterRef.current.page + 1,
          pageSize: filterRef.current.size,
          total: count,
          position: ['bottomCenter'],
          pageSizeOptions: [5, 10, 20, 50, 100],
          showSizeChanger: true,
          locale: { items_per_page: `/ ${t('common.page')}` },
        }}
        showSizeChanger
        loading={false}
        onChange={handleTableChange}
        scroll={{ y: 'auto' }}
      />
      <CustomModal
        open={openModal}
        maskClosable
        onOk={() => setOpenModal(false)}
        onCancel={() => setOpenModal(false)}
        width={1150}
        footer={null}
      >
        <ViewHistoryTopic data={historyData} setOpen={setOpenModal} />
      </CustomModal>
      <ModalWarning
        visible={openDel}
        onSubmit={() => {
          handleSubmitDel();
        }}
        onClose={() => {
          setOpenDel(false);
        }}
        message={t('topicManagement.deleteConfirm.description', {
          name: deleteData.name,
        })}
        buttonOk={t('topicManagement.buttonDeleteOk')}
        buttonCancel={t('topicManagement.buttonDeleteCancel')}
      />
    </>
  );
};
TopicList.propTypes = {
  data: PropTypes.array,
  filterRef: PropTypes.object,
  loadData: PropTypes.func,
  count: PropTypes.number,
};
export default TopicList;
