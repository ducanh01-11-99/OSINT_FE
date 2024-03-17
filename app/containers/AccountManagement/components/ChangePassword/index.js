import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { useForm } from 'antd/es/form/Form';
import FormItem from 'antd/es/form/FormItem';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import {
  CustomForm,
  CustomModal,
  InputPassword,
  ItemContainer,
  ItemContent,
  ItemLabel,
  NoticeItem,
} from '../ModalAddAndEdit/styled';
import { validatePassword } from '../../../../utils/commonFunction';
import ModalWarning from '../ModalWarning';
import { ButtonActive, ButtonCancel, ButtonListContainer } from '../../styled';
import { COOKIES, REDUX_KEY } from '../../../../utils/constants';
import { useInjectSaga } from '../../../../utils/injectSaga';
import saga from '../../saga';
import { useInjectReducer } from '../../../../utils/injectReducer';
import reducer from '../../reducer';
import * as actions from '../../actions';
import DisableButton from '../../../../components/Button/DisableButton';
const RedStar = () => <span style={{ fontSize: '16px', color: 'red' }}>*</span>;
const key = REDUX_KEY.accountManagement;

const ModalChangePassword = ({ visible, data, onClose, reload }) => {
  const dispatch = useDispatch();
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const [form] = useForm();
  const [openWarning, setOpenWarning] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  // đặt cờ để check lại trạng thái của button Lưu
  const [check, setCheck] = useState(false);

  const idUser = Cookies.get(COOKIES.userId);

  useEffect(() => {
    if (visible) {
      form.setFieldsValue({ ...data });
    }
  }, [data, visible]);

  const handleClickSubmit = () => {
    form.validateFields().then(() => {
      setOpenWarning(true);
    });
  };

  const handleConfirm = () => {
    form.validateFields().then(value => {
      const body = { ...value, id: idUser };
      // todo api đổi mật khẩu
      dispatch(
        actions.changePassword(body, res => {
          if (res.status === 200) {
            toast.success(t('accountManagement.changePassword.success'));
            reset();
            reload();
            onClose();
          } else {
            toast.error(t('accountManagement.changePassword.error'));
            setOpenWarning(false);
          }
        }),
      );
    });
  };

  const reset = () => {
    form.resetFields();
    setActiveButton(false);
    setOpenWarning(false);
  };

  const handleChangeForm = (dataChange, allData) => {
    if (
      allData.old_password &&
      allData.new_password &&
      allData.confirm_password
    ) {
      setCheck(!check);
    } else {
      setActiveButton(false);
    }
  };

  useEffect(() => {
    if (visible) {
      form
        .validateFields()
        .then(() => {
          setActiveButton(true);
        })
        .catch(setActiveButton(false));
    }
  }, [check]);

  return (
    <CustomModal
      destroyOnClose
      maskClosable={false}
      width={708}
      open={visible}
      title={t('accountManagement.modal.changePassword.title')}
      onCancel={() => {
        reset();
        onClose();
      }}
      centered
      footer={
        <ButtonListContainer>
          <ButtonCancel
            onClick={() => {
              reset();
              onClose();
            }}
          >
            {t('accountManagement.modal.addAndEdit.button.cancel')}
          </ButtonCancel>
          {activeButton ? (
            <ButtonActive
              onClick={() => {
                handleClickSubmit();
              }}
            >
              {t('accountManagement.modal.addAndEdit.button.edit')}
            </ButtonActive>
          ) : (
            <DisableButton
              title={t('accountManagement.modal.addAndEdit.button.edit')}
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
        {/* Mật khẩu cũ */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.changePassword.oldPassword')} <RedStar />
          </ItemLabel>
          <ItemContent>
            <FormItem
              name="old_password"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject(
                        new Error(
                          t(
                            'accountManagement.modal.validate.password.errBlank',
                          ),
                        ),
                      );
                    }
                    if (value.trim()) {
                      const errMess = validatePassword(value.trim(), 50, 8);
                      if (errMess !== '') {
                        return Promise.reject(new Error(errMess));
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        t('accountManagement.modal.validate.password.errBlank'),
                      ),
                    );
                  },
                }),
              ]}
            >
              <InputPassword
                allowClear
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.password',
                )}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>

        {/* Mật khẩu mới */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.changePassword.newPassword')} <RedStar />
          </ItemLabel>
          <ItemContent>
            <FormItem
              name="new_password"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value) {
                      return Promise.reject(
                        new Error(
                          t(
                            'accountManagement.modal.validate.password.errBlank',
                          ),
                        ),
                      );
                    }
                    if (value.trim()) {
                      const errMess = validatePassword(value.trim(), 50, 8);
                      if (errMess !== '') {
                        return Promise.reject(new Error(errMess));
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
              <InputPassword
                allowClear
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.password',
                )}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>

        {/* Xác nhận Mật khẩu */}
        <ItemContainer>
          <ItemLabel>
            {t('accountManagement.changePassword.confirmPassword')} <RedStar />
          </ItemLabel>
          <ItemContent>
            <FormItem
              name="confirm_password"
              rules={[
                () => ({
                  validator(_, value) {
                    if (!value || !value.trim()) {
                      return Promise.reject(
                        new Error(
                          t(
                            'accountManagement.modal.validate.confirmPassword.errBlank',
                          ),
                        ),
                      );
                    }
                    const password = form.getFieldValue('new_password');
                    if (password) {
                      if (value.trim() !== password.trim()) {
                        return Promise.reject(
                          new Error(
                            t(
                              'accountManagement.modal.validate.confirmPassword.notSame',
                            ),
                          ),
                        );
                      }
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        t(
                          'accountManagement.modal.validate.confirmPassword.notSame',
                        ),
                      ),
                    );
                  },
                }),
              ]}
            >
              <InputPassword
                allowClear
                placeholder={t(
                  'accountManagement.modal.addAndEdit.form.placeHolder.confirmPassword',
                )}
              />
            </FormItem>
          </ItemContent>
        </ItemContainer>
        <NoticeItem>{t('accountManagement.changePassword.notice')}</NoticeItem>
        <div style={{ height: '28px' }} />
      </CustomForm>
      <ModalWarning
        visible={openWarning}
        message={t('accountManagement.confirmModal.message.changePassword')}
        onSubmit={() => {
          handleConfirm();
        }}
        onClose={() => {
          setOpenWarning(false);
        }}
        textSubmitButton={t('accountManagement.modal.addAndEdit.button.save')}
      />
    </CustomModal>
  );
};

ModalChangePassword.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.object,
  onClose: PropTypes.func,
  reload: PropTypes.func,
};

export default ModalChangePassword;
