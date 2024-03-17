import React, { useEffect, useState } from 'react';
import { Popover, Checkbox } from 'antd';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import filterFilledIcon from '../../images/icons/FilterFilled.svg';
import filterOutline from '../../images/icons/FilterOutline.svg';

import { CheckboxCustom, Icon } from './styles';

const FilterIcon = ({ list, setListSelected, isNotAllValue }) => {
  const { t } = useTranslation();
  const arr = [];
  // eslint-disable-next-line no-unused-expressions
  list &&
    // eslint-disable-next-line array-callback-return
    list.map(item => {
      arr.push(item.value);
    });

  const [listChecked, setListChecked] = useState(list.map(item => item.value));

  useEffect(() => {
    setListSelected(listChecked);
  }, [listChecked]);

  const indeterminate =
    listChecked.length > 0 && listChecked.length < list.length;

  const checkAll = list.length === listChecked.length;

  const onCheckAllChange = e => {
    setListChecked(e.target.checked ? arr : []);
  };

  const content = (
    <div>
      {!isNotAllValue && (
        <div>
          <CheckboxCustom
            heightFilter
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            <div style={{ paddingTop: '10px' }}>{t('common.all')}</div>
          </CheckboxCustom>
        </div>
      )}
      <Checkbox.Group
        style={{ width: '100%' }}
        onChange={value => {
          setListChecked(value);
        }}
        value={listChecked}
      >
        {list &&
          list.map((item, index) => (
            <div key={`checkbox${index + 1}`}>
              <CheckboxCustom value={item.value} heightFilter>
                {item.label}
              </CheckboxCustom>
              <br />
            </div>
          ))}
      </Checkbox.Group>
    </div>
  );

  return (
    <Popover placement="topLeft" content={content} trigger="click">
      {listChecked && listChecked.length > 0 ? (
        <Icon src={filterFilledIcon} alt="icon" />
      ) : (
        <Icon src={filterOutline} alt="icon" />
      )}
    </Popover>
  );
};

FilterIcon.propTypes = {
  list: PropTypes.array,
  setListSelected: PropTypes.func,
  isNotAllValue: PropTypes.bool,
};

export default FilterIcon;
