import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import FormItem from 'antd/es/form/FormItem';
import { useForm } from 'antd/es/form/Form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  CustomForm,
  CustomModal,
  CustomSelect,
  InputCustom,
  ItemContainer,
  ItemContent,
  ItemLabel,
  RadioCustom,
} from './styled';
import DisableButton from '../../../../components/Button/DisableButton';
import { ACTIVE_KEY, ADMIN_KEY, LIST_ROLE, LIST_STATUS } from '../../constants';
import {
  compareTwoObjet,
  validateEmailText,
  validateFullName,
  validatePhoneText,
  validateUsername,
} from '../../../../utils/commonFunction';
import ModalWarning from '../ModalWarning';
import { ButtonActive, ButtonCancel, ButtonListContainer } from '../../styled';
import { REDUX_KEY } from '../../../../utils/constants';
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from '../../saga';
import { useInjectReducer } from '../../../../utils/injectReducer';
import reducer from '../../reducer';
import * as actions from '../../actions';
const key = REDUX_KEY.accountManagement;

const RedStar = () => <span style={{ fontSize: '16px', color: 'red' }}>*</span>;

const LIST_ACTIVE = LIST_STATUS();

const ModalAddAndEdit = ({ visible, data, onClose, onSubmit, reLoadData }) => {
  const [form] = useForm();
  const [roleSelected, setRoleSelected] = useState(ADMIN_KEY);
  const [statusSelected, setStatusSelected] = useState(ACTIVE_KEY);
  // Xác nhận thêm, sửa
  const [openWarning, setOpenWarning] = useState(false);
  const [activeButton, setActiveButton] = useState(false);

  // state quan ly su thay doi cua gia tri nhap
  const [checkExistUsername, setCheckExistUsername] = useState('');
  // state quản lý sự thay đổi của nội dung cảnh báo
  const [contentCheckExistUsername, setContentCheckExistUsername] = useState(
    '',
  );

  // Xác nhận hủy, sửa
  const [showWarning, setShowWarning] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!data) {
      const handler = setTimeout(() => {
        checkHandle();
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [checkExistUsername]);

  const ORIGIN_DATA_ADD = {
    email: undefined,
    full_name: undefined,
    phone: undefined,
    username: undefined,
    is_activated: statusSelected,
    role: roleSelected,
    status: statusSelected,
    id: null,
  };

  // api check, ok thì trả về rỗng, không thì trả về tin nhắn thông báo nội dung sai
  const checkHandle = () => {
    const fullName = form.getFieldValue('full_name');
    const username = form.getFieldValue('username');
    if (visible) {
      dispatch(
        actions.checkExistName(checkExistUsername, res => {
          if (res === 0) {
            setContentCheckExistUsername('');
            form.validateFields(['username']);
            if (fullName && username) {
              setCheck(!check);
            }
          } else {
            setContentCheckExistUsername(
              t('accountManagement.modal.validate.userName.userNameExist'),
            );
            form.validateFields(['username']);
            if (fullName && username) {
              setCheck(!check);
            }
          }
        }),
      );
    }
  };

  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });

  const dispatch = useDispatch();

  // đặt cờ để check lại trạng thái của button Lưu
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (data && visible) {
      form.setFieldsValue({ ...data, account: data.userName });
      setRoleSelected(data.role);
      setStatusSelected(data.status);
    } else {
      setActiveButton(false);
    }
  }, [data, visible]);

  // Xử lý khi bấm xác nhận tại modal xác nhận
  const addAndEdit = () => {
    form.validateFields().then(value => {
      const body = {
        ...value,
        status: statusSelected,
        role: roleSelected,
        id: data ? data.id : null,
        is_activated: statusSelected,
      };
      setOpenWarning(false);
      dispatch(
        actions.addCount(body, data ? 'edit' : 'add', res => {
          if (res.status === 200) {
            toast.success(
              data
                ? t('accountManagement.toastMessage.edit.success')
                : t('accountManagement.toastMessage.addCount.success'),
            );
            reLoadData();
            handleClose();
          } else {
            toast.error(
              data
                ? t('accountManagement.toastMessage.edit.error')
                : t('accountManagement.toastMessage.addCount.error'),
            );
          }
        }),
      );
    });
  };

  const handleClose = () => {
    resetState();
    onClose();
  };

  // reset state khi đóng modal
  const resetState = () => {
    setActiveButton(false);
    form.resetFields();
    setRoleSelected(ADMIN_KEY);
    setStatusSelected(ACTIVE_KEY);
  };

  useEffect(() => {
    if (visible) {
      form
        .validateFields()
        .then(() => {
          const datacheck = form.getFieldsValue();
          if (datacheck.full_name && datacheck.username) {
            setActiveButton(true);
          }
        })
        .catch(() => {
          setActiveButton(false);
        });
    }
  }, [check, visible]);

  // Xử lý trạng thái nút lưu
  const handleChangeForm = (dataChange, allData) => {
    if (allData.username && allData.full_name) {
      setCheck(!check);
    } else {
      setActiveButton(false);
    }
  };

  const checkShowWarningAdd = () => {
    let newData = form.getFieldsValue();
    newData = {
      ...newData,
      status: statusSelected,
      role: roleSelected,
      id: data ? data.id : null,
      is_activated: statusSelected,
    };
    if (compareTwoObjet(ORIGIN_DATA_ADD, newData)) {
      handleClose();
    } else {
      setShowWarning(true);
    }
  };

  const checkShowWarningEdit = () => {
    let newData = form.getFieldsValue();
    newData = {
      ...newData,
      status: statusSelected,
      role: roleSelected,
      id: data ? data.id : null,
      is_activated: statusSelected,
    };
    if (compareTwoObjet(newData, { ...data, is_activated: statusSelected })) {
      handleClose();
    } else {
      setShowWarning(true);
    }
  };

  return (
    <CustomModal
      width={708}
      centered
      destroyOnClose
      open={visible}
      title={
        data
          ? t('accountManagement.modal.addAndEdit.title.edit')
          : t('accountManagement.modal.addAndEdit.title.add')
      }
      onOk={onSubmit}
      onCancel={() => {
        resetState();
        onClose();
      }}
      maskClosable={false}
      footer={
        <ButtonListContainer>
          <ButtonCancel
            onClick={() => {
              // eslint-disable-next-line no-unused-expressions
              data ? checkShowWarningEdit() : checkShowWarningAdd();
            }}
          >
            {t('accountManagement.modal.addAndEdit.button.cancel')}
          </ButtonCancel>
          {activeButton ? (
            <ButtonActive
              onClick={() => {
                addAndEdit();
              }}
            >
              {data
                ? t('accountManagement.modal.addAndEdit.button.edit')
                : t('accountManagement.modal.addAndEdit.button.add')}
            </ButtonActive>
          ) : (
            <DisableButton
              title={
                data
                  ? t('accountManagement.modal.addAndEdit.button.edit')
                  : t('accountManagement.modal.addAndEdit.button.add')
              }
              isTooltip={false}
            />
          )}
        </ButtonListContainer>
      }
    >
      <CustomForm
        form={form}
        onValuesChange={(dataChange, allData) => {
          handleChangeForm(dataChange, allData);
        }}
      >
        {/* Tài khoản */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.modal.addAndEdit.form.label.account')}{' '}
            <RedStar />
          </ItemLabel>
          <ItemContent>
            <FormItem
              validateTrigger={['onChange', 'onBlur']}
              name="username"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject(
                        new Error(
                          t(
                            'accountManagement.modal.validate.userName.userNameNoBlank',
                          ),
                        ),
                      );
                    }
                    if (value.trim()) {
                      setCheckExistUsername(value);
                      const errMess = validateUsername(value.trim());
                      if (errMess !== '') {
                        return Promise.reject(new Error(errMess));
                      }
                      if (contentCheckExistUsername.length > 0) {
                        return Promise.reject(
                          new Error(contentCheckExistUsername),
                        );
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        t(
                          'accountManagement.modal.validate.userName.userNameNoBlank',
                        ),
                      ),
                    );
                  },
                }),
              ]}
            >
              <InputCustom
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.account',
                )}
                allowClear
                maxLength={50}
                disabled={!!data}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>

        {/* Họ và tên */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.modal.addAndEdit.form.label.fullName')}{' '}
            <RedStar />
          </ItemLabel>
          <ItemContent>
            <FormItem
              name="full_name"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject(
                        new Error(
                          t(
                            'accountManagement.modal.validate.fullName.blankErr',
                          ),
                        ),
                      );
                    }
                    if (value.trim()) {
                      const errMess = validateFullName(value.trim(), true);
                      if (errMess !== '') {
                        return Promise.reject(new Error(errMess));
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        t('accountManagement.modal.validate.fullName.blankErr'),
                      ),
                    );
                  },
                }),
              ]}
            >
              <InputCustom
                allowClear
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.fullName',
                )}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>

        {/* Email */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.modal.addAndEdit.form.label.email')}{' '}
          </ItemLabel>
          <ItemContent>
            <FormItem
              name="email"
              required={false}
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.resolve();
                    }
                    if (value.trim()) {
                      const errMess = validateEmailText(value.trim(), false);
                      if (errMess !== '') {
                        return Promise.reject(new Error(errMess));
                      }
                      return Promise.resolve();
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <InputCustom
                allowClear
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.email',
                )}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>
        {/* Số điện thoại */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.modal.addAndEdit.form.label.phoneNumber')}{' '}
          </ItemLabel>
          <ItemContent>
            <FormItem
              name="phone"
              required={false}
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.resolve();
                    }
                    if (value.trim()) {
                      const errMess = validatePhoneText(value.trim(), false);
                      if (errMess !== '') {
                        return Promise.reject(new Error(errMess));
                      }
                      return Promise.resolve();
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <InputCustom
                allowClear
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.phoneNumber',
                )}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>

        {/* Tên nhóm quyền */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.modal.addAndEdit.form.label.roleName')}{' '}
            <RedStar />
          </ItemLabel>
          <ItemContent>
            <FormItem>
              <CustomSelect
                options={LIST_ROLE()}
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.roleName',
                )}
                value={roleSelected}
                onChange={role => {
                  setRoleSelected(role);
                }}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>
        {/* Trạng thái */}
        <ItemContainer style={{ marginTop: '-7px' }}>
          <ItemLabel>
            {t('accountManagement.modal.addAndEdit.form.label.status')}{' '}
          </ItemLabel>
          <ItemContent>
            <FormItem>
              <RadioCustom.Group
                value={statusSelected}
                onChange={e => {
                  setStatusSelected(e.target.value);
                }}
              >
                {LIST_ACTIVE.map(item => (
                  <RadioCustom value={item.value}>{item.label}</RadioCustom>
                ))}
              </RadioCustom.Group>
            </FormItem>
          </ItemContent>
        </ItemContainer>
      </CustomForm>
      <ModalWarning
        visible={openWarning}
        message={
          data
            ? t('accountManagement.confirmModal.message.edit', {
                userName: form.getFieldValue('username'),
              })
            : t('accountManagement.confirmModal.message.add', {
                userName: form.getFieldValue('username'),
              })
        }
        onSubmit={() => {
          addAndEdit();
        }}
        onClose={() => {
          setOpenWarning(false);
        }}
        textSubmitButton={t('accountManagement.modal.addAndEdit.button.add')}
      />

      <ModalWarning
        visible={showWarning}
        message={
          data
            ? t('accountManagement.conformCancelEdit')
            : t('accountManagement.conformCancelAdd')
        }
        onSubmit={() => {
          handleClose();
        }}
        onClose={() => {
          setShowWarning(false);
        }}
        buttonOk={t('accountManagement.actionCancel')}
        buttonCancel={t('accountManagement.actionClose')}
      />
    </CustomModal>
  );
};
ModalAddAndEdit.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.object,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  reLoadData: PropTypes.func,
};
export default ModalAddAndEdit;
