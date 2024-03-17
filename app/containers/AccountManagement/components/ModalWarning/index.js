import React from 'react';
import PropTypes from 'prop-types';
import { t } from 'i18next';
import { Spin } from 'antd';
import {
  Container,
  CustomModal,
  IconWarning,
  MessageContainer,
  ButtonListContainer,
} from './styled';

import iconWarning from '../../../../images/icons/warning.svg';
import { ButtonActive, ButtonCancel } from '../../styled';

const ModalWarning = ({
  visible,
  data,
  onClose,
  onSubmit,
  message,
  buttonOk,
  buttonCancel,
  widthCustom,
  gap,
  loading,
}) => (
  <CustomModal
    width={widthCustom || 400}
    destroyOnClose
    open={visible}
    maskClosable={false}
    centered
    onCancel={onClose}
    footer={
      <ButtonListContainer gap={gap}>
        <ButtonCancel
          onClick={() => {
            onClose();
          }}
        >
          {buttonCancel ||
            t('accountManagement.modal.addAndEdit.button.cancel')}
        </ButtonCancel>
        <ButtonActive
          onClick={() => {
            onSubmit();
          }}
        >
          {buttonOk ||
            (data
              ? t('accountManagement.modal.addAndEdit.button.add')
              : t('accountManagement.modal.addAndEdit.button.edit'))}
        </ButtonActive>
      </ButtonListContainer>
    }
  >
    <Spin spinning={loading || false}>
      <Container>
        <IconWarning src={iconWarning} alt="icon warning" />
        <MessageContainer dangerouslySetInnerHTML={{ __html: message }} />
      </Container>
    </Spin>
  </CustomModal>
);

ModalWarning.propTypes = {
  visible: PropTypes.bool,
  data: PropTypes.object,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
  message: PropTypes.string,
  buttonOk: PropTypes.string,
  buttonCancel: PropTypes.string,
  widthCustom: PropTypes.number,
  gap: PropTypes.number,
  loading: PropTypes.bool,
};

export default ModalWarning;
