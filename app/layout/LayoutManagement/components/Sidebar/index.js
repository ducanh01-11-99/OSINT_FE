import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ContainerSider,
  MenuCustom,
  SiderCustom,
} from '../../../SystemLayout/components/Sidebar/styles';
import { PATHS } from '../../../../utils/constants';

// SidebarMenu
const Sidebar = ({
  isExpand,
  minWidth,
  maxWidth,
  permissionArray,
  dataMenu,
  onClickMenu,
  pathFocus,
  type,
}) => {
  const [collapsedWidth, setCollapsedWidth] = useState(minWidth);
  const [expand, setExpand] = useState(isExpand);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setCollapsedWidth(isExpand ? maxWidth : minWidth);
    setExpand(isExpand);
  }, [isExpand]);

  // eslint-disable-next-line consistent-return
  const items = _.flatMap(dataMenu, itemMenu => {
    if (permissionArray) {
      if (permissionArray.includes(itemMenu.key)) {
        return {
          label: itemMenu.label,
          key: itemMenu.path,
        };
      }
    } else {
      return {
        label: itemMenu.label,
        key: itemMenu.path,
      };
    }
  });

  const [keySelect, setKeySelect] = useState(pathFocus);

  const onClick = e => {
    onClickMenu(e.key);
    setKeySelect(e.key);
    navigate(e.key);
  };

  useEffect(() => {
    let res = '';
    if (type === 1) {
      res = location.pathname.includes('/manage/account')
        ? PATHS.ACCOUNT_MANAGEMENT
        : PATHS.TOPIC_MANAGEMENT;
    } else {
      res = location.pathname.includes('/warning/config')
        ? PATHS.WARNING_CONFIG
        : PATHS.WARNING_TOPIC_ROOT;
    }
    setKeySelect(res);
  }, [location.pathname]);

  return (
    <ContainerSider clickMenu={isExpand}>
      <SiderCustom
        width={maxWidth}
        collapsedWidth={collapsedWidth}
        theme="light"
        trigger={null}
        collapsible
        collapsed={!expand}
        onMouseEnter={() => setExpand(isExpand ? expand : !expand)}
        onMouseLeave={() => setExpand(isExpand ? expand : false)}
      >
        <MenuCustom
          mode="inline"
          selectedKeys={keySelect}
          items={items}
          onClick={onClick}
        />
      </SiderCustom>
    </ContainerSider>
  );
};

Sidebar.propTypes = {
  isExpand: PropTypes.bool,
  minWidth: PropTypes.string,
  maxWidth: PropTypes.string,
  permissionArray: PropTypes.array,
  dataMenu: PropTypes.array,
  onClickMenu: PropTypes.func,
  pathFocus: PropTypes.string,
  type: PropTypes.number,
};

export default Sidebar;
