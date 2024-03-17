import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { format, subDays, subMonths } from 'date-fns';
import {
  ItemSelect,
  Label,
  RangePickerCustom,
  IconButton,
  ConfigItem,
  ConfigTitle,
  Wrapper,
} from './styled';

import iconCalendar from '../../images/icons/Calendar.svg';

import { ButtonDiv } from '../../shared/styles/ButtonDiv';

const TimeSelect = ({ onChangeValue, valueRangePicker }) => {
  const { t } = useTranslation();
  const [indexHightLight, setIndexHightLight] = useState(1);
  const [visible, setVisible] = useState(false);
  const [key, setKey] = useState(2);
  const [firstRender, setFirstRender] = useState(false);
  const ref = useRef();
  const disabledDate = current => current && current > dayjs().endOf('day');

  const currentDate = new Date();

  const onChange = valueSelect => {
    setVisible(false);
    if (valueSelect === 1) {
      setIndexHightLight(0);
      onChangeValue({
        from: format(currentDate, 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      });
    }
    if (valueSelect === 2) {
      setIndexHightLight(1);
      onChangeValue({
        from: format(subDays(currentDate, 7), 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      });
    }
    if (valueSelect === 3) {
      setIndexHightLight(2);
      onChangeValue({
        from: format(subMonths(currentDate, 1), 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      });
    }

    setKey(valueSelect);
  };

  useEffect(() => {
    if (ref.current && visible) {
      const icon = document.getElementById('calender-button');
      document.body.addEventListener('click', event => {
        if (
          !ref.current.contains(event.target) &&
          !icon.contains(event.target) &&
          !firstRender
        ) {
          setFirstRender(true);
          setVisible(false);
        }
      });
    }
  }, [visible]);

  const rangePresets = [
    {
      label: <Label>{t('common.time.today')}</Label>,
      value: {
        from: format(currentDate, 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      },
    },
    {
      label: <Label>{t('common.time.oneWeekAgo')}</Label>,
      value: {
        from: format(subDays(currentDate, 7), 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      },
    },
    {
      label: <Label>{t('common.time.oneMonthAgo')}</Label>,
      value: {
        from: format(subMonths(currentDate, 1), 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      },
    },
    {
      label: <Label>{t('common.time.threeMonthAgo')}</Label>,
      value: {
        from: format(subMonths(currentDate, 3), 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      },
    },
    {
      label: <Label>{t('common.time.sixMonthAgo')}</Label>,
      value: {
        from: format(subMonths(currentDate, 6), 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      },
    },
    {
      label: <Label>{t('common.time.oneYearAgo')}</Label>,
      value: {
        from: format(subMonths(currentDate, 12), 'yyyy-MM-dd'),
        to: format(currentDate, 'yyyy-MM-dd'),
      },
    },
  ];

  const customPicker = picker => (
    <div style={{ display: 'flex' }} ref={ref}>
      <Wrapper customWidth="780px">
        <ConfigItem flex={1.602} style={{ paddingLeft: '10px' }}>
          <ConfigTitle>{t('common.time.columnTime')}</ConfigTitle>
          <div>
            {rangePresets.map((ele, index) => (
              <ItemSelect
                key={`itemSelect${index + 1}`}
                hightLight={index === indexHightLight}
                onClick={() => {
                  onChangeValue(ele.value);
                  setIndexHightLight(index);
                }}
              >
                {ele.label}
              </ItemSelect>
            ))}
          </div>
        </ConfigItem>
        <ConfigItem flex={2}>{picker}</ConfigItem>
      </Wrapper>
    </div>
  );

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <ButtonDiv
        isFocus={key === 1}
        onClick={() => {
          onChange(1);
        }}
      >
        {t('common.time.today')}
      </ButtonDiv>
      <ButtonDiv
        isFocus={key === 2}
        onClick={() => {
          onChange(2);
        }}
      >
        {t('common.time.oneWeekAgo')}
      </ButtonDiv>
      <ButtonDiv
        isFocus={key === 3}
        onClick={() => {
          onChange(3);
        }}
      >
        {t('common.time.oneMonthAgo')}
      </ButtonDiv>
      {visible && (
        <RangePickerCustom
          panelRender={customPicker}
          value={[
            dayjs(valueRangePicker.from, 'YYYY-MM-DD'),
            dayjs(valueRangePicker.to, 'YYYY-MM-DD'),
          ]}
          onChange={(data, dateString) => {
            setKey(4);
            setIndexHightLight(100);
            const formattedDateString = [
              dayjs(dateString[0], 'DD-MM-YYYY').format('YYYY-MM-DD'),
              dayjs(dateString[1], 'DD-MM-YYYY').format('YYYY-MM-DD'),
            ];
            onChangeValue({
              from: formattedDateString[0],
              to: formattedDateString[1],
            });
          }}
          format="DD-MM-YYYY"
          disabledDate={disabledDate}
          allowClear={false}
        />
      )}
      <ButtonDiv
        isFocus={key === 4}
        id="calender-button"
        onClick={() => {
          setKey(4);
          setVisible(true);
        }}
      >
        <IconButton alt="" src={iconCalendar} />
      </ButtonDiv>
    </div>
  );
};

TimeSelect.propTypes = {
  onChangeValue: PropTypes.func,
  valueRangePicker: PropTypes.object,
};

export default TimeSelect;
