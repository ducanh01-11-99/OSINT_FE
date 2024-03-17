import React, { useEffect, useState } from 'react';
import { Form, Radio, Spin, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { t } from 'i18next';
import iconPlusFilter from '../../../../images/icons/iconPlusFilter.svg';
import {
  Box,
  ButtonCustom,
  ButtonsWrapper,
  Container,
  FormCustom,
  FormWrapper,
  Function,
  Item,
  Keyword,
  KeywordBox,
  KeywordHeader,
  Label,
  LabelBox,
  MyFormItem,
  Row,
  SubRow,
} from './styled';
import { InputCustom } from '../../../../shared/styles/Input';
import { SelectCustom } from '../../../../shared/styles/SelectCustom';
import KeywordContent from './components/KeywordContent/KeywordContent';
import { CustomRadioGroup } from '../../../../shared/styles/CheckboxGroup/index';

import { ButtonDiv } from '../../../../shared/styles/ButtonDiv';
import { CREATE, EDIT, VIEW } from './constatns';
import { PATHS, REDUX_KEY } from '../../../../utils/constants';
import { useInjectSaga } from '../../../../utils/injectSaga';

// Layout System
import * as actionsLayout from '../../../../layout/SystemLayout/actions';
import saga from '../../../../layout/SystemLayout/saga';
import reducer from '../../../../layout/SystemLayout/reducer';

// Topic Management
import * as actionTopicManagement from '../../actions';
import sagaTopicManagement from '../../saga';
import reducerTopicManagement from '../../reducer';

import { useInjectReducer } from '../../../../utils/injectReducer';
// import { selectTopics } from '../../../../layout/SystemLayout/selectors';
import {
  compareTwoObjet,
  hasNoSpecialCharacters,
} from '../../../../utils/commonFunction';
import {
  selectCheckTopicNameAlreadyExist,
  selectTopicDetail,
  selectTopicManagementLoading,
} from '../../selectors';
import { AddNew, IconAddNew } from './components/KeywordContent/styled';

// Icons
import iconAddNew from '../../../../images/icons/iconAdd.svg';
import ModalWarning from '../../../AccountManagement/components/ModalWarning';
import AddAndEditTopicGroup from './components/AddAndEditGroupTopic';

const CreateTopic = () => {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const location = useLocation();
  const type = location.pathname.includes('edit') ? EDIT : CREATE;
  const [showWarning, setShowWarning] = useState(false);
  const [keywords, setKeywords] = useState(['']);
  const navigate = useNavigate();

  const detail = useSelector(selectTopicDetail());

  const handleClickCancel = () => {
    // todo navigate về trang quản lý chủ đề
    navigate('/manage/topic-management');
  };

  const handleAddKeyword = () => {
    // todo
    setKeywords([...keywords, '']);
  };

  const delElementInArrIndex = (indexEle, arr) => {
    if (indexEle < 0 || indexEle >= arr.length) {
      return arr;
    }
    return arr.filter((ele, indexElement) => indexElement !== indexEle);
  };

  const [openAddGroup, setOpenAddGroup] = useState(false);
  const handleClickAddGroup = () => {
    setOpenAddGroup(true);
  };

  return (
    <Spin spinning={loading}>
      <Container id="topic-create">
        <FormWrapper>
          <FormCustom
            initialValues={{
              status: 0,
            }}
            validateTrigger={['onChange', 'onBlur']}
          >
            <Row>
              <SubRow>
                <Item>
                  <Label>
                    {t('topicManagement.create.topicName.title')}
                    <span>*</span>
                  </Label>
                  <Form.Item
                    name="topicName"
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
                      onChange={event => setInputValue(event.target.value)}
                      allowClear
                      maxLength={200} // Quy định ko vượt quá 200 kí tự
                    />
                  </Form.Item>
                </Item>
                <Item ml={100}>
                  <Label>
                    {t('topicManagement.create.topicGroup.title')}
                    <span>*</span>
                  </Label>
                  <Form.Item
                    name="topicGroup"
                    rules={[
                      {
                        required: true,
                        message: t(
                          'topicManagement.create.topicGroup.rules.required',
                        ),
                      },
                    ]}
                  >
                    <SelectCustom
                      placeholder={t(
                        'topicManagement.create.topicGroup.placeholder',
                      )}
                      options={options}
                      disabled={type === EDIT}
                    />
                  </Form.Item>
                </Item>
                <Tooltip title={t('topicManagement.addGroup')}>
                  <img
                    style={{ paddingLeft: '10px' }}
                    src={iconPlusFilter}
                    alt={t('topicManagement.addGroup')}
                    onClick={() => {
                      handleClickAddGroup();
                    }}
                  />
                </Tooltip>
              </SubRow>
            </Row>
            <Row>
              <Label>
                {t('topicManagement.create.keyword')}
                <span>*</span>
              </Label>
              <Box>
                <KeywordBox>
                  <KeywordHeader>
                    <LabelBox>
                      <Keyword>
                        {t('topicManagement.create.primaryKey.title')}
                      </Keyword>
                    </LabelBox>
                    <Function>
                      <Keyword minWidth={10}>
                        {t('topicManagement.create.function')}
                      </Keyword>
                    </Function>
                  </KeywordHeader>
                  <div>
                    {keywords.map((ele, index) => (
                      <KeywordContent
                        check={keywords && keywords.length > 1}
                        index={index}
                        data={ele}
                        keywords={keywords}
                        setKeywords={setKeywords}
                        deleteIndex={x => {
                          const tempArr = delElementInArrIndex(x, keywords);
                          setKeywords([...tempArr]);
                        }}
                      />
                    ))}
                  </div>
                  <AddNew onClick={handleAddKeyword}>
                    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                    <IconAddNew alt="add-new" src={iconAddNew} />
                    {t('topicManagement.create.addKeyword')}
                  </AddNew>
                </KeywordBox>
              </Box>
            </Row>
            <Row>
              <Label>{t('topicManagement.create.status')}</Label>
              <Form.Item name="status">
                <CustomRadioGroup flex="row">
                  <Radio value={0}>
                    {t('topicManagement.create.activate')}
                  </Radio>
                  <Radio value={1}>
                    {t('topicManagement.create.deactivate')}
                  </Radio>
                </CustomRadioGroup>
              </Form.Item>
            </Row>
            <Row>
              <ButtonsWrapper>
                <ButtonCustom type="cancel" onClick={handleClickCancel}>
                  {t('topicManagement.create.cancel')}
                </ButtonCustom>
                <MyFormItem>
                  <ButtonCustom htmlType="submit" type="ok">
                    {type === CREATE
                      ? t('topicManagement.create.create')
                      : t('topicManagement.create.editButton')}
                  </ButtonCustom>
                </MyFormItem>
              </ButtonsWrapper>
            </Row>
          </FormCustom>
        </FormWrapper>
        <ModalWarning
          visible={showWarning}
          message={
            detail
              ? t('topicManagement.conformCancelEdit')
              : t('topicManagement.conformCancelAdd')
          }
          onSubmit={() => {
            navigate(PATHS.TOPIC_MANAGEMENT);
          }}
          onClose={() => {
            setShowWarning(false);
          }}
          buttonOk={t('topicManagement.actionCancel')}
          buttonCancel={t('topicManagement.actionClose')}
        />
      </Container>
      <AddAndEditTopicGroup
        data={{}}
        loadTopicGroup={() => {}}
        onClose={() => {
          setOpenAddGroup(false);
        }}
        visible={openAddGroup}
      />
    </Spin>
  );
};
CreateTopic.propTypes = {};
export default CreateTopic;
