import React from 'react';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import { CustomButton } from './style';

const DisableButton = ({ title, tooltipContent, isTooltip }) => (
  <div>
    {isTooltip ? (
      <Tooltip placement="topLeft" title={tooltipContent}>
        <CustomButton type="primary" disabled>
          {title}
        </CustomButton>
      </Tooltip>
    ) : (
      <CustomButton type="primary" disabled>
        {title}
      </CustomButton>
    )}
  </div>
);

DisableButton.propTypes = {
  title: PropTypes.string,
  tooltipContent: PropTypes.string,
  isTooltip: PropTypes.bool,
};

export default DisableButton;
