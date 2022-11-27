
import 'antd/dist/antd.css'
import "./DashboardPage.scss";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Layout, Menu, Row } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import Contents from './content/Contents';
import { useNavigate } from 'react-router';
import { ROUTERS } from '../../const';
import { logoutAction } from '../../stores/slices';
const { Header, Sider, Content } = Layout;


function DashboardPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch
    const userInfo = useSelector((state) => state.user.userInfoState.data);
  const [collapsed, setCollapsed] = useState(false);
  const gotoLoginPage = () => {
    navigate(ROUTERS.login);
  };

  const onLogout = () => {
    dispatch(logoutAction());
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Thông tin",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Quản lý",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Report",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Row>
            <Col md={18}>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Col>
            <Col md={6}>
                <div className='user'>
                    <Avatar className='ant-avatar' size='default' icon={<UserOutlined/>}></Avatar> {userInfo && <div className="user-logout">{userInfo.email}</div>}
                    {userInfo === null ? (
              <div className="header-login" onClick={gotoLoginPage}>
                LOGIN 
              </div>
            ) : (
              <div className="header-logout" onClick={onLogout}>Logout</div>
            )}
                </div>
            </Col>
          </Row>
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Contents/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default DashboardPage;


