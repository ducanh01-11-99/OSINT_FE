import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { MenuCustom } from './styles';
import * as actions from '../../../../containers/Topics/actions';

const DotSubItem = () => (
  <span style={{ marginRight: '5px' }}>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#868E96" />
    </svg>
  </span>
);

const MenuSideBar = ({ permissionArray, dataMenu, onClickMenu }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  // eslint-disable-next-line consistent-return
  const items = _.flatMap(dataMenu, itemMenu => {
    if (permissionArray) {
      if (permissionArray.includes(itemMenu.key)) {
        if (itemMenu.child) {
          const filteredChildren = itemMenu.child.filter(childItem =>
            permissionArray.includes(childItem.key),
          );
          if (filteredChildren.length > 0) {
            return {
              label: itemMenu.label,
              key: itemMenu.key,
              children: filteredChildren.map(childItem => ({
                label: (
                  <>
                    <DotSubItem />
                    {childItem.label}
                  </>
                ),
                key: childItem.key,
              })),
            };
          }
        } else {
          return {
            label: itemMenu.label,
            key: itemMenu.key,
          };
        }
      }
    } else {
      return {
        label: itemMenu.label,
        key: itemMenu.key,
        children: itemMenu.child
          ? itemMenu.child.map(childItem => ({
              label: (
                <>
                  <DotSubItem />
                  {childItem.label}
                </>
              ),
              key: childItem.key,
            }))
          : null,
      };
    }
  });

  const getSelectedKeys = () => {
    if (pathname !== undefined) {
      if (_.filter(dataMenu, i => pathname.includes(i.key)).length !== 0) {
        return _.filter(dataMenu, i => pathname.includes(i.key))[0].key;
      }
      const menuHaveChilds = _.filter(dataMenu, i => i.child !== undefined);
      if (menuHaveChilds.length !== 0) {
        // eslint-disable-next-line no-plusplus
        for (let x = 0; x < menuHaveChilds.length; x++) {
          if (
            menuHaveChilds[x].child !== undefined &&
            _.filter(menuHaveChilds[x].child, i => pathname.includes(i.key))
              .length !== 0
          ) {
            return _.filter(menuHaveChilds[x].child, i =>
              pathname.includes(i.key),
            )[0].key;
          }
        }
      }
    }
    return '/news';
  };

  // lấy path từ key
  const getPath = item => {
    let res = '/news';
    // eslint-disable-next-line array-callback-return
    dataMenu.map(ele => {
      if (ele.key === item) {
        res = ele.path;
      }
    });
    return res;
  };

  const onClick = e => {
    const item = getPath(e.key);
    dispatch(actions.resetTime());
    onClickMenu(item);
  };

  return (
    <div style={{ width: '100%' }}>
      <MenuCustom
        mode="horizontal"
        items={items}
        onClick={onClick}
        selectedKeys={`${getSelectedKeys()}`}
      />
    </div>
  );
};

MenuSideBar.propTypes = {
  permissionArray: PropTypes.array,
  dataMenu: PropTypes.array,
  onClickMenu: PropTypes.func,
};

export default MenuSideBar;
