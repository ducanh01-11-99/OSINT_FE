import React, { useEffect, useState } from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import {
  DivFloatLabel,
  InputText,
  InputPassword,
  LabelNormal,
  Icon,
} from './styles';

// Icons
import open from '../../../images/icons/openEyeIconDefault.svg';
import openHover from '../../../images/icons/openEyeIconHover.svg';
import close from '../../../images/icons/closeEyeIcon.svg';
import closeHover from '../../../images/icons/closeEyeIconHover.svg';

const InputLogin = ({
  label,
  defaultValue,
  type,
  error,
  onChange,
  onEnter,
}) => {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);
  const [value, setValue] = useState('');
  const isOccupied = focus || (value && value.length !== 0);

  setTimeout(() => {
    const autofilled = document.querySelectorAll('input:-webkit-autofill');
    if (autofilled.length > 0) setFocus(true);
  }, 500);

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <DivFloatLabel
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {type === 'password' ? (
        <InputPassword
          onKeyPress={handleKeyPress}
          onChange={e => setValue(e.target.value)}
          type={type}
          defaultValue={defaultValue}
          placeholder={label}
          style={{
            borderRadius: '8px',
          }}
          status={error ? 'error' : null}
          iconRender={visible =>
            visible ? (
              <div>
                <Tooltip mouseLeaveDelay={0} title="Ẩn mật khẩu">
                  <Icon alt="open" src={hover ? openHover : open} />
                </Tooltip>
              </div>
            ) : (
              <div>
                <Tooltip mouseLeaveDelay={0} title="Hiển thị mật khẩu">
                  <Icon alt="hide" src={hover ? closeHover : close} />
                </Tooltip>
              </div>
            )
          }
        />
      ) : (
        <InputText
          onChange={e => setValue(e.target.value)}
          type={type}
          defaultValue={defaultValue}
          placeholder={label}
          style={{
            borderRadius: '8px',
          }}
          status={error ? 'error' : null}
        />
      )}
      {isOccupied ? <LabelNormal> {label}</LabelNormal> : null}
    </DivFloatLabel>
  );
};

InputLogin.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.bool,
  onChange: PropTypes.func,
  onEnter: PropTypes.func,
};

export default InputLogin;
