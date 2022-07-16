import styled from "styled-components";
import { Menu, MenuProps } from "antd";
import { AiFillHome } from "react-icons/ai";
import React from "react";

type MenuItem = Required<MenuProps>["items"][number];

const rootSubmenuKeys = ["sub1", "sub2", "sub4"];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Navigation One", "sub1", <AiFillHome />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),
  getItem("Navigation Two", "sub2", <AiFillHome />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  getItem("Navigation Three", "sub4", <AiFillHome />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
];

interface Props {
  color?: string;
  activeColor?: string;
  submenuBackgrouncColor?: string;
}

const AccordionMenu: React.FC<Props> = ({
  color,
  activeColor,
  submenuBackgrouncColor,
}) => {
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <MenuWrapper
      color={color}
      activeColor={activeColor}
      submenuBackgrouncColor={submenuBackgrouncColor}
    >
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 256 }}
        items={items}
      />
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div<{
  color?: string;
  activeColor?: string;
  backgrouncColor?: string;

  submenuBackgrouncColor?: string;
}>`
  ${(props) => `
 width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row wrap;

  .ant-menu-title-content{  
    color: ${props.color || "#1a1a1a"};   
  }
  .ant-menu-submenu-title {
    padding: 0 !important;
  }
  .ant-menu-item-only-child {
    padding: 0 !important;
  }
  .ant-menu-title-content {
    padding: 10px !important;
  }
  .ant-menu-submenu-title {
    // padding: 20px !important;
    color:${props.color || "#1a1a1a"} !important; 
  }
  .ant-menu-submenu-title i {color:${props.color || "#1a1a1a"} !important; 

  }
  .ant-menu {
    border: none !important;
  }
  .ant-menu-submenu-active > .ant-menu-title-content {
    color: ${props.activeColor || "#206c9c"} !important;
  }

  .ant-menu-sub{background: ${props.submenuBackgrouncColor || "#ededed"};}  

  .ant-menu-item-selected {
    // 액티브 된 서브메뉴 Style
    background: none !important;
    border: none !important;
    color: ${props.activeColor || "#206c9c"} !important;
    :after,
    :before {
      // 액티브 된 서브메뉴 우측라인 제거
      display: none !important;
    }
  }
  .ant-menu-submenu-selected > .ant-menu-submenu-title > span,
  .ant-menu-submenu-selected > .ant-menu-submenu-title > svg,
  .ant-menu-submenu-selected > .ant-menu-submenu-title > i {
    color: ${props.activeColor || "#206c9c"} !important;
  }
  .ant-menu-submenu-active > .ant-menu-submenu-title > span,
  .ant-menu-submenu-active > .ant-menu-submenu-title > svg,
  .ant-menu-submenu-active > .ant-menu-submenu-title > i {
    color: ${props.activeColor || "#206c9c"} !important;
  }
`}
`;

export default AccordionMenu;
