import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { ContainerSider, MenuCustom, SiderCustom } from './styles';

const DotSubItem = () => (
  <span>
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="4" fill="#868E96" />
    </svg>
  </span>
);

const Sidebar = ({
  isExpand,
  minWidth,
  maxWidth,
  permissionArray,
  dataMenu,
  onClickMenu,
  pathname,
}) => {
  const [collapsedWidth, setCollapsedWidth] = useState(minWidth);
  const [expand, setExpand] = useState(isExpand);

  useEffect(() => {
    setCollapsedWidth(isExpand ? maxWidth : minWidth);
    setExpand(isExpand);
  }, [isExpand]);

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
              key: itemMenu.path,
              children: filteredChildren.map(childItem => ({
                label: (
                  <>
                    <DotSubItem />
                    {childItem.label}
                  </>
                ),
                key: childItem.path,
              })),
            };
          }
        } else {
          return {
            label: itemMenu.label,
            key: itemMenu.path,
          };
        }
      }
    } else {
      return {
        label: itemMenu.label,
        key: itemMenu.path,
        children: itemMenu.child
          ? itemMenu.child.map(childItem => ({
              label: (
                <>
                  <DotSubItem />
                  {childItem.label}
                </>
              ),
              key: childItem.path,
            }))
          : null,
      };
    }
  });
  useEffect(() => {
    if (items.length > 0) {
      window.localStorage.setItem('keyMenu', pathname || '0');
    }
  }, [items]);

  const getSelectedKeys = () => {
    if (pathname !== undefined) {
      if (_.filter(dataMenu, i => i.path === pathname).length !== 0) {
        return _.filter(dataMenu, i => i.path === pathname)[0].path;
      }
      const menuHaveChilds = _.filter(dataMenu, i => i.child !== undefined);
      if (menuHaveChilds.length !== 0) {
        // eslint-disable-next-line no-plusplus
        for (let x = 0; x < menuHaveChilds.length; x++) {
          if (
            menuHaveChilds[x].child !== undefined &&
            _.filter(menuHaveChilds[x].child, i => i.path === pathname)
              .length !== 0
          ) {
            return _.filter(
              menuHaveChilds[x].child,
              i => i.path === pathname,
            )[0].key;
          }
        }
      }
    }
    return dataMenu[0].path;
  };

  const onClick = e => {
    const foundTopics = dataMenu.find(item => item.path === e.key);
    // eslint-disable-next-line no-prototype-builtins
    const subMenuData = dataMenu.filter(item => item.hasOwnProperty('child'));
    const foundSubTopics = subMenuData.flatMap(item =>
      item.child.filter(subItem => subItem.path === e.key),
    );
    const selectedData = foundTopics || foundSubTopics;
    if (selectedData.length > 0) {
      window.localStorage.setItem('keyMenu', selectedData[0].key);
    } else {
      window.localStorage.setItem('keyMenu', 0);
    }
    onClickMenu(e.key);
  };

  return (
    <ContainerSider clickMenu={isExpand}>
      <SiderCustom
        width={maxWidth}
        collapsedWidth={collapsedWidth}
        theme="light"
        trigger={null}
        collapsible
        collapsed={!expand}
        // onMouseEnter={() => setCollapsedWidth(maxWidth)}
        // onMouseLeave={() => setCollapsedWidth(isExpand ? maxWidth : minWidth)}
        onMouseEnter={() => setExpand(isExpand ? expand : !expand)}
        onMouseLeave={() => setExpand(isExpand ? expand : false)}
      >
        <MenuCustom
          mode="inline"
          selectedKeys={`${[getSelectedKeys()]}`}
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
  pathname: PropTypes.string,
};

export default Sidebar;
