import React from 'react'
import "./App.css";
import {Menu} from "antd";
import {Routes,Route,useNavigate} from "react-router-dom";
import {HomeOutlined,
  DashboardOutlined,
  UnorderedListOutlined,
  UserOutlined,
  PoweroffOutlined
} from "@ant-design/icons"

const App = () => {
  const navigate = useNavigate()
  
  function SideMenu() {
    return (
      <Menu
      onClick={({key}) => {
        if (key === "signout"){
          console.log("signout Popup");
        } else {
          navigate(key);
        }
      }}
        defaultSelectKeys={[window.location.pathname]}
        items={[
          {
            label: "Home",
            key:"/",
            icon: <HomeOutlined/>,
          },
          {
            label: "Dashboard",
            key:"/dashboard",
            icon: <DashboardOutlined/>
          },
          { label: "Users List",
            key:"/userslist",
            icon: <UnorderedListOutlined/>,
            children: [
              {
                label: "Active USers",
                key: "/activeUsers"
              },
              {
                label: "Disabled users",
                key: "/disableUsers"
              }
            ]
          },  
          { label: "Profile",
            key:"/profile",
            icon: <UserOutlined/>
          },
          {
            label: "Signout",
            key:"signout",
            icon: <PoweroffOutlined/>,
            danger:true
          },
        ]}
      ></Menu>
    )
  }
  
  function Content() {
    return <div>
      <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        <Route path='/dashboard' element={<div>Dashboard</div>}></Route>
        <Route path='/activeUsers' element={<div>Active Users list</div>}></Route>
        <Route path='/disableUsers' element={<div>Disabled Users list</div>}></Route>
        <Route path='/profile' element={<div>Profile</div>}></Route>
      </Routes>
    </div>
  }
  function Header() {
    return (
    <div 
      style={{
        height:80,
        backgroundColor: '#8ADAB2',
        color:'brown',
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        fontWeight: "bold"
      }}
    >
      HOME
    </div>
    );
  }
  function Footer() {
    return (
    <div
      style={{
        height:60,
        backgroundColor: "#D0F288",
        color: "brown",
        display: 'flex',
        justifyContent: "center",
        justifyItems: "center",
        fontWeight: "bold"
      }}
    >
      Footer
    </div>);
  }

  return (
    <div 
      style={{
        display:"flex",
        flexDirection: "column",
        flex: 1,
        height: '100vh'
      }}
    >
      <Header/>
      <div 
        style={{
          display:"flex", 
          flexDirection: "row",
          flex: 1
        }}
      >
        <SideMenu/>
        <Content/>
      </div>
      <Footer/>
    </div>
  )
}

export default App