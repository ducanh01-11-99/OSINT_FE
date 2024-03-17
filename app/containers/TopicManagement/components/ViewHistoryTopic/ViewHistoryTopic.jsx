import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Body,
  HistoryContainer,
  HistoryHeader,
  IconClose,
  Title,
} from './styled';
import { TableCustom } from '../../../../components/ListSourceTable/styled';
import {
  RowCustom,
  TitleTable,
} from '../../../ArticleTracing/components/ListRelativeArticle/styled';
import iconClose from '../../../../images/icons/iconCloseWhite.svg';
import * as actions from '../../actions';
import { REDUX_KEY } from '../../../../utils/constants';
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from '../../saga';
import reducer from '../../reducer';
import { useInjectReducer } from '../../../../utils/injectReducer';
import { selectHistoryOfTopic } from '../../selectors';

const ViewHistoryTopic = ({ data, setOpen }) => {
  // Topic Management
  const key = REDUX_KEY.topicManagement;
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const listHistory = useSelector(selectHistoryOfTopic());
  const [dataSource, setDataSource] = useState([]);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const filterRef = useRef({
    from: '',
    to: '',
    page: 0,
    size: 10,
  });
  const loadData = () => {
    dispatch(
      actions.getHistoryOfTopic({
        id: data.id,
        body: {
          page: filterRef.current.page,
          size: filterRef.current.size,
          from_time: filterRef.current.from,
          to_time: filterRef.current.to,
        },
      }),
    );
  };
  const columns = [
    {
      title: (
        <TitleTable>{t('topicManagement.tableViewHistory.stt')}</TitleTable>
      ),
      dataIndex: 'id',
      render: text => <RowCustom>{text}</RowCustom>,
      width: '60px',
    },
    {
      title: (
        <TitleTable>
          {t('topicManagement.tableViewHistory.editedDate')}
          {/* <FilterCalender */}
          {/*  filterRef={filterRef} */}
          {/*  loadData={loadData} */}
          {/*  defaultFrom={filterRef.current.from} */}
          {/*  defaultTo={filterRef.current.to} */}
          {/* /> */}
        </TitleTable>
      ),
      dataIndex: 'editedDate',
      render: text => <RowCustom>{text}</RowCustom>,
      width: '200px',
    },
    {
      title: (
        <TitleTable>
          {t('topicManagement.tableViewHistory.editedBy')}
        </TitleTable>
      ),
      dataIndex: 'editedBy',
      render: text => <RowCustom>{text}</RowCustom>,
      width: '200px',
    },
    {
      title: (
        <TitleTable>{t('topicManagement.tableViewHistory.content')}</TitleTable>
      ),
      dataIndex: 'content',
      render: text => <RowCustom>{text}</RowCustom>,
    },
  ];
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    const { list } = listHistory;
    let stt = 0;
    const listArr = list.map(item => {
      stt += 1;
      return {
        id: stt,
        editedDate: item.time,
        editedBy: item.author,
        content:
          item.description === 'update'
            ? t('topicManagement.tableViewHistory.update')
            : item.description,
      };
    });
    setDataSource(listArr);
  }, [listHistory]);
  useEffect(() => {
    loadData();
  }, [data]);
  return (
    <HistoryContainer>
      <HistoryHeader>
        <span>{t('topicManagement.viewHistory.header')}</span>
        <IconClose src={iconClose} alt="iconClose" onClick={handleClose} />
      </HistoryHeader>
      <Title>
        {t('topicManagement.viewHistory.title')}
        <span>{data.name_topic_child}</span>
      </Title>
      <Body>
        <TableCustom
          textCellSize="14px"
          columns={columns}
          hasBorderTableHead
          dataSource={dataSource}
          // pagination={{
          //     current: filterRef.current.page + 1,
          //     pageSize: filterRef.current.size,
          //     total: articleTracingListCount,
          //     position: ['bottomCenter'],
          //     pageSizeOptions: [5, 10, 20, 50, 100],
          //     locale: { items_per_page: `/ ${t('common.page')}` },
          // }}
          // loading={false}
          // onChange={handleTableChange}
          scroll={{
            y: 500,
          }}
          // onRow={record => ({
          //   onClick: () => handleRowClick(record),
          // })}
        />
      </Body>
    </HistoryContainer>
  );
};
ViewHistoryTopic.propTypes = {
  data: PropTypes.object,
  setOpen: PropTypes.func,
};
export default ViewHistoryTopic;
