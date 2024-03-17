import React, { useEffect } from 'react';
import { t } from 'i18next';
import FormItem from 'antd/es/form/FormItem';
import { Form, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import PropTypes from 'prop-types';
import {
  ButtonActive,
  ButtonCancel,
  ButtonListContainer,
} from '../../../../../AccountManagement/styled';
import { FormCustom, Item, Label, Row } from '../../styled';
import { hasNoSpecialCharacters } from '../../../../../../utils/commonFunction';
import { InputCustom } from '../../../../../../shared/styles/Input';

const AddAndEditTopicGroup = ({ visible, onClose, data, loadTopicGroup }) => {
  const [form] = useForm();
  const handleSubmit = () => {
    form.validateFields().then(value => {
      // todo
    });
    loadTopicGroup();
  };

  useEffect(() => {
    if (data) {
      form.setFieldsValue({ name: data.name });
    }
  }, [data]);

  return (
    <Modal
      destroyOnClose
      maskClosable={false}
      width={450}
      open={visible}
      title={t('accountManagement.modal.changePassword.title')}
      onCancel={() => {
        onClose();
      }}
      centered
      footer={
        <ButtonListContainer>
          <ButtonCancel
            onClick={() => {
              onClose();
            }}
          >
            {t('accountManagement.modal.addAndEdit.button.cancel')}
          </ButtonCancel>
          <ButtonActive
            onClick={() => {
              handleSubmit();
            }}
          >
            {t('accountManagement.modal.addAndEdit.button.edit')}
          </ButtonActive>
        </ButtonListContainer>
      }
    >
      <div style={{ padding: '20px' }}>
        <FormCustom form={form}>
          <Row>
            <Item>
              <Label>
                {t('topicManagement.create.topicName')}
                <span>*</span>
              </Label>
              <Form.Item
                name="name"
                rules={[
                  {
                    validator: hasNoSpecialCharacters, // Quy định ko có kí tự đặc biệt
                    message: t(
                      'topicManagement.create.topicName.rules.noSpecial',
                    ),
                  },
                  {
                    required: true,
                    message: t(
                      'topicManagement.create.topicName.rules.required',
                    ),
                  },
                  // {
                  //   validator: () => {
                  //     if (isUsernameAlreadyExist) {
                  //       return Promise.reject();
                  //     }
                  //     return Promise.resolve();
                  //   },
                  //   message: t(
                  //     'topicManagement.create.topicName.rules.alreadyExist',
                  //   ),
                  // },
                ]}
              >
                <InputCustom
                  placeholder={t(
                    'topicManagement.create.topicName.placeholder',
                  )}
                  allowClear
                  maxLength={200} // Quy định ko vượt quá 200 kí tự
                />
              </Form.Item>
            </Item>
          </Row>
          <FormItem />
        </FormCustom>
      </div>
    </Modal>
  );
};

AddAndEditTopicGroup.propTypes = {
  data: PropTypes.object,
  loadTopicGroup: PropTypes.func,
  onClose: PropTypes.func,
  visible: PropTypes.bool,
};

export default AddAndEditTopicGroup;
