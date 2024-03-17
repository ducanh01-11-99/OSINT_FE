import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Input, Tooltip } from 'antd';
import { t } from 'i18next';
import { toast } from 'react-toastify';
import { PlusOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet/es/Helmet';
import { REDUX_KEY } from '../../utils/constants';

import { useInjectSaga } from '../../utils/injectSaga';
import saga from './saga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import * as selector from './selector';
import {
  Container,
  ContainerSearch,
  HeaderPart,
  ImageFunction,
  InputSearch,
  ListButtonContainer,
  TableContainer,
  TableDiv,
  TitleTable,
} from './styled';
import { CardIcon } from '../Topics/components/SearchField/styled';
import { IconButton } from '../Topics/styled';
import SearchIcon from '../../images/icons/topic/search.svg';
import { TableCustom } from '../../components/HighLightTable/styled';
import FilterIcon from '../Tracking/components/TableKeyWordMap/Filter';

import iconEdit from '../../images/icons/_Edit.svg';
import iconLock from '../../images/icons/Chage pass.svg';
import iconDelete from '../../images/icons/accountManagement/deleteIcon.svg';

import * as actions from './actions';

import {
  ACTIVE_KEY,
  ADMIN_KEY,
  DEFAULT_PARAM_GET_LIST,
  INACTIVE_KEY,
  LIST_ROLE,
  LIST_STATUS,
  USER_KEY,
} from './constants';
import { calculateIndex } from '../../utils/commonFunction';
import ModalAddAndEdit from './components/ModalAddAndEdit';
import ModalWarning from './components/ModalWarning';
import { ButtonTracingActive } from '../ArticleTracing/styled';
import icon from '../../images/icons/iconKeyword.svg';
import { Icon } from '../TopicManagement/styled';
import {
  Activate,
  Deactivate,
} from '../TopicManagement/components/TopicList/TopicListStyled';
const key = REDUX_KEY.accountManagement;

const AccountManagement = () => {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const isLoading = useSelector(selector.selectLoadingChannel());
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState('');
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openResetPassword, setOpenResetPassword] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [rowSelected, setRowSelected] = useState({});

  const [listRoleSelected, setListRoleSelected] = useState([
    ADMIN_KEY,
    USER_KEY,
  ]);

  const [pageSize, setPageSize] = useState(10);
  const handlePageSizeChange = pagination => {
    setPageSize(pagination.pageSize);
    setPage(pagination.current);
  };

  const [page, setPage] = useState(1);

  const totalCount = useSelector(selector.selectTotalCount());
  const listAccount = useSelector(selector.selectListAccount());

  const loadData = () => {
    dispatch(actions.getListAccount(DEFAULT_PARAM_GET_LIST, page, pageSize));
  };

  const getNameRole = text => {
    if (text === ADMIN_KEY) {
      return t('accountManagement.role.admin');
    }
    if (text === USER_KEY) {
      return t('accountManagement.role.user');
    }
    return text;
  };

  const [listStatusSelected, setListStatusSelected] = useState([
    ACTIVE_KEY,
    INACTIVE_KEY,
  ]);

  const handleSubmitDel = () => {
    // todo Thực hiện hàm xóa tại đây
    dispatch(
      actions.deleteAccount(rowSelected, res => {
        if (res.data.status) {
          toast.success(t('accountManagement.toastMessage.delete.success'));
          loadData();
          setOpenDelete(false);
        } else {
          toast.error(t('accountManagement.toastMessage.delete.error'));
        }
      }),
    );
  };

  const handleSubmitChangePassword = () => {
    dispatch(
      actions.resetPassword(rowSelected.id, res => {
        if (res === 0) {
          toast.success(
            t('accountManagement.toastMessage.changePassword.success'),
          );
          loadData();
          setOpenResetPassword(false);
        } else {
          toast.error(t('accountManagement.toastMessage.changePassword.error'));
        }
      }),
    );
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const body = {
        keyword: valueSearch,
        roles: listRoleSelected,
        status: listStatusSelected,
      };
      dispatch(actions.getListAccount(body, page, pageSize));
    }, 500);
    return () => clearTimeout(delayDebounceFn);
  }, [valueSearch, listRoleSelected, listStatusSelected, pageSize, page]);

  const COLUMN = [
    {
      title: t('accountManagement.table.columns.STT'),
      dataIndex: 'no',
      ellipsis: true,
      width: '10%',
      render: (text, record, index) => (
        <span style={{ paddingLeft: '8px' }}>
          {calculateIndex(page, pageSize, index)}
        </span>
      ),
    },
    {
      title: t('accountManagement.table.columns.account'),
      dataIndex: 'username',
      ellipsis: true,
      width: '15%',
    },
    {
      title: t('accountManagement.table.columns.fullName'),
      dataIndex: 'full_name',
      ellipsis: true,
      width: '15%',
    },
    {
      title: (
        <span>
          {t('accountManagement.table.columns.roleGroup')}
          <FilterIcon
            list={LIST_ROLE()}
            listSelected={listRoleSelected}
            setListSelected={arr => setListRoleSelected(arr)}
          />
        </span>
      ),
      dataIndex: 'role',
      ellipsis: true,
      width: '15%',
      render: text => <span>{getNameRole(text)}</span>,
    },
    {
      title: (
        <span style={{ paddingLeft: '20px' }}>
          {t('accountManagement.table.columns.status')}
          <FilterIcon
            list={LIST_STATUS()}
            listSelected={listStatusSelected}
            setListSelected={arr => setListStatusSelected(arr)}
          />
        </span>
      ),
      dataIndex: 'status',
      ellipsis: true,
      width: '15%',
      render: (text, record) =>
        record.status === 0 ? (
          <Activate>{t('topicManagement.active')}</Activate>
        ) : (
          <Deactivate>{t('topicManagement.deactivate')}</Deactivate>
        ),
    },
    {
      title: (
        <div style={{ textAlign: 'center', paddingRight: '20px' }}>
          {t('accountManagement.table.columns.function')}
        </div>
      ),
      dataIndex: 'function',
      ellipsis: true,
      width: '15%',
      render: (text, record) => genFunction(record),
    },
  ];

  const reloadData = () => {
    loadData();
  };

  const genFunction = obj => (
    <ListButtonContainer>
      <Tooltip title={t('accountManagement.table.functionTooltip.edit')}>
        <ImageFunction
          src={iconEdit}
          onClick={() => {
            setRowSelected(obj);
            setOpenModalEdit(true);
          }}
        />
      </Tooltip>
      <Tooltip
        title={t('accountManagement.table.functionTooltip.resetPassword')}
      >
        <ImageFunction
          src={iconLock}
          onClick={() => {
            setRowSelected(obj);
            setOpenResetPassword(true);
          }}
        />
      </Tooltip>
      <Tooltip
        title={t('accountManagement.table.functionTooltip.deletePassword')}
      >
        <ImageFunction
          src={iconDelete}
          onClick={() => {
            setRowSelected(obj);
            setOpenDelete(true);
          }}
        />
      </Tooltip>
    </ListButtonContainer>
  );
  return (
    <Container>
      {/* <Helmet title={t('common.warning')}> */}
      {/*  <meta name="description" content="Osint" /> */}
      {/* </Helmet> */}
      <Helmet title={t('common.helmet.management')}>
        <meta name="description" content="Osint" />
      </Helmet>
      <HeaderPart>
        <ContainerSearch>
          <InputSearch>
            <Input
              addonBefore={
                // <CardIcon onClick={onClickIcon}>
                <CardIcon>
                  <IconButton alt="" src={SearchIcon} />
                </CardIcon>
              }
              placeholder={t('accountManagement.input.placeHolder')}
              allowClear
              value={valueSearch}
              onChange={e => {
                setValueSearch(e.target.value);
              }}
              size="large"
            />
          </InputSearch>
        </ContainerSearch>
        <ButtonTracingActive
          type="primary"
          onClick={() => {
            setOpenModalAdd(true);
          }}
        >
          <PlusOutlined />
          {t('accountManagement.button.content')}
        </ButtonTracingActive>
      </HeaderPart>

      <TableDiv>
        <div
          style={{
            display: 'flex',
            paddingBottom: '28px',
            paddingLeft: '16px',
          }}
        >
          <Icon alt="icon" src={icon} />
          <TitleTable
            dangerouslySetInnerHTML={{
              __html: t('accountManagement.table.title', {
                count: totalCount,
              }),
            }}
          />
        </div>
        <TableContainer>
          <TableCustom
            heightCustom="52px"
            loading={isLoading}
            columns={COLUMN}
            dataSource={listAccount}
            pagination={{
              position: ['bottomRight'],
              pageSizeOptions: [5, 10, 20, 50, 100],
              showSizeChanger: true,
              pageSize,
              total: totalCount,
              locale: { items_per_page: `/ ${t('common.page')}` },
            }}
            onChange={handlePageSizeChange}
            scroll={{ y: 'auto' }}
          />
        </TableContainer>
      </TableDiv>

      {/* Modal thêm tài khoản  */}
      <ModalAddAndEdit
        visible={openModalAdd}
        onClose={() => {
          setOpenModalAdd(false);
        }}
        reLoadData={reloadData}
      />

      {/* Modal sửa tài khoản  */}
      <ModalAddAndEdit
        visible={openModalEdit}
        onClose={() => {
          setOpenModalEdit(false);
        }}
        data={rowSelected}
        reLoadData={reloadData}
      />

      {/* Modal reset mật khẩu  */}
      <ModalWarning
        gap={8}
        widthCustom={394}
        buttonOk={t('topicManagement.buttonDeleteOk')}
        visible={openResetPassword}
        onClose={() => {
          setOpenResetPassword(false);
        }}
        onSubmit={() => {
          handleSubmitChangePassword();
        }}
        message={t('accountManagement.confirmModal.message.resetPassword', {
          userName: rowSelected.username,
        })}
      />

      {/* Modal xóa tài khoản  */}
      <ModalWarning
        gap={8}
        widthCustom={348}
        buttonOk={t('topicManagement.buttonDeleteOk')}
        visible={openDelete}
        onClose={() => {
          setOpenDelete(false);
        }}
        onSubmit={() => {
          handleSubmitDel();
        }}
        message={t('accountManagement.confirmModal.message.delete', {
          userName: rowSelected.username,
        })}
      />
    </Container>
  );
};
export default AccountManagement;
