import React from "react";
import { Button } from "antd";
import Logo from '../../../assets/img/png/logo-white.png'
import  {MenuUnfoldOutlined, PoweroffOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './MenuTop.scss' 

export default function MenuTop(props) {
    const {menuCollapsed, setMenuCollapsed} = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <img className="menu-top__left-logo" src={Logo} alt="David Diaz Logo"/>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link">
                    <PoweroffOutlined onClick={() => console.log("Desconexion")}/>
                </Button>
            </div>
        </div>
    )
}

