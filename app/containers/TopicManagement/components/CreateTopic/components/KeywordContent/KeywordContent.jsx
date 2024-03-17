import React, { useEffect, useState } from 'react';
import { Form, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { InputCustom } from '../../../../../../shared/styles/Input';
import {
  Buttons,
  ContentBox,
  IconFunction,
  PrimaryKey,
} from './styled';
import { FormCustom, RowCenter } from '../../styled';
import { hasNoSpecialCharacters } from '../../../../../../utils/commonFunction';

// Icons
import deleteIcon from '../../../../../../images/icons/topic/topicManagement/deleteRed.svg';
import disableDelIcon from '../../../../../../images/icons/iconDelete.svg';

const KeywordContent = ({
  data,
  index,
  setKeywords,
  check,
  keywords,
  deleteIndex,
}) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      primaryKey: data,
    });
  }, [data]);

  const checkDuplicate = text => {
    let count = 0;
    // todo
    // eslint-disable-next-line array-callback-return
    keywords.map(item => {
      if (item === text) {
        count += 1;
      }
    });
    if (count <= 1) {
      return Promise.resolve();
    }
    return Promise.reject();
  };

  // check duplicate khi mang khoa chinh thay doi
  useEffect(() => {
    // console.log('keywords', keywords);
    form.validateFields(['primaryKey']);
  }, [keywords]);

  const onChangePrimaryKey = event => {
    // todo
    const arr = keywords;
    arr[index] = event.target.value;
    setKeywords([...arr]);
  };

  return (
    <>
      <ContentBox key={index}>
        <FormCustom form={form} validateTrigger={['onChange', 'onBlur']}>
          <RowCenter>
            <PrimaryKey>
              <Form.Item
                name="primaryKey"
                rules={[
                  {
                    required: true,
                    message: t(
                      'topicManagement.create.primaryKey.rules.required',
                    ),
                  },
                  {
                    validator: (rule, value) => checkDuplicate(value),
                    message: t(
                      'topicManagement.create.primaryKey.rules.uniquePrimaryKey',
                    ),
                  },
                  {
                    validator: hasNoSpecialCharacters,
                    message: t(
                      'topicManagement.create.primaryKey.rules.noSpecialCharacter',
                    ),
                  },
                ]}
              >
                <InputCustom
                  placeholder={t(
                    'topicManagement.create.primaryKey.placeholder',
                  )}
                  maxLength={50}
                  onChange={onChangePrimaryKey}
                  allowClear
                />
              </Form.Item>
            </PrimaryKey>
            <Buttons>
              {check ? (
                <IconFunction
                  alt="cancel"
                  src={deleteIcon}
                  onClick={() => {
                    deleteIndex(index);
                  }}
                />
              ) : (
                <Tooltip title={t('topicManagement.disableDeleteMessage')}>
                  <IconFunction
                    style={{ cursor: 'not-allowed' }}
                    alt="cancel"
                    src={disableDelIcon}
                  />
                </Tooltip>
              )}
            </Buttons>
          </RowCenter>
        </FormCustom>
      </ContentBox>
    </>
  );
};
KeywordContent.propTypes = {
  data: PropTypes.object,
  index: PropTypes.number,
  setKeywords: PropTypes.func,
  deleteIndex: PropTypes.func,
  check: PropTypes.bool,
  keywords: PropTypes.array,
};
export default KeywordContent;
