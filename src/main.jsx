import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter
  
} from "react-router-dom";
import Layout from "./Layout.jsx";
import DeviceInfo from "./components/SubMenuPages/DeviceInfo.jsx";
import LANIPflow from "./components/SubMenuPages/LANIPflow.jsx";
import InterfaceStatus from "./components/SubMenuPages/InterfaceStatus.jsx";
import ApplicationFlow from "./components/SubMenuPages/ApplicationFlow.jsx";
import ACOperationLog from "./components/SubMenuPages/ACOperationLog.jsx";
import WANConfigure from "./components/SubMenuPages/WANConfigure.jsx";
import LANDHCP from "./components/SubMenuPages/LANDHCP.jsx";
import PhysicalPortDefinition from "./components/SubMenuPages/PhysicalPortDefinition.jsx";
import StaticRoute from "./components/SubMenuPages/StaticRoute.jsx";
import DDNS from "./components/SubMenuPages/DDNS.jsx";
import NatPortForward from "./components/SubMenuPages/NatPortForward.jsx";
import SmartFlowControl from "./components/SubMenuPages/SmartFlowControl.jsx";
import BandWidthControl from "./components/SubMenuPages/BandWidthControl.jsx";
import FreeFlowControl from "./components/SubMenuPages/FreeFlowControl.jsx";
import APList from "./components/SubMenuPages/APList.jsx";
import APConfigTemp from "./components/SubMenuPages/APConfigTemp.jsx";
import APGroupDefinition from "./components/SubMenuPages/APGroupDefinition.jsx";
import APUpgrade from "./components/SubMenuPages/APUpgrade.jsx";
import BlackWhiteList from "./components/SubMenuPages/BlackWhiteList.jsx";
import SeamlessRoming from "./components/SubMenuPages/SeamlessRoming.jsx";
import AutoChannel from "./components/SubMenuPages/AutoChannel.jsx";
import AuditConfigure from "./components/SubMenuPages/AuditConfigure.jsx";
import LocatingServer from "./components/SubMenuPages/LocatingServer.jsx";
import AuthConfig from "./components/SubMenuPages/AuthConfig.jsx";
import PPPOEAuth from "./components/SubMenuPages/PPPOEAuth.jsx";
import PortalAuth from "./components/SubMenuPages/PortalAuth.jsx";
import RadiusBilling from "./components/SubMenuPages/RadiusBilling.jsx";
import AuthUser from "./components/SubMenuPages/AuthUser.jsx";
import AuthUserStatus from "./components/SubMenuPages/AuthUserStatus.jsx";
import DepartmentLevelDefination from "./components/SubMenuPages/DepartmentLevelDefination.jsx";
import ApplicationFirewall from "./components/SubMenuPages/ApplicationFirewall.jsx";
import URLRedirect from "./components/SubMenuPages/URLRedirect.jsx";
import DomainRedirect from "./components/SubMenuPages/DomainRedirect.jsx";
import TimeObject from "./components/SubMenuPages/TimeObject.jsx";
import SourceIPObject from "./components/SubMenuPages/SourceIPObject.jsx";
import PortObject from "./components/SubMenuPages/PortObject.jsx";
import DestinitionIPObject from "./components/SubMenuPages/DestinitionIPObject.jsx";
import BuildInApplication from "./components/SubMenuPages/BuildInApplication.jsx";
import CustomApplication from "./components/SubMenuPages/CustomApplication.jsx";
import IPMACBinding from "./components/SubMenuPages/IPMACBinding.jsx";
import ConQuanLimit from "./components/SubMenuPages/ConQuanLimit.jsx";
import LANAbnormal from "./components/SubMenuPages/LANAbnormal.jsx";
import LANAttack from "./components/SubMenuPages/LANAttack.jsx";
import WANPing from "./components/SubMenuPages/WANPing.jsx";
import UserAuth from "./components/SubMenuPages/UserAuth.jsx";
import OnlineUser from "./components/SubMenuPages/OnlineUser.jsx";
import InterfaceFlow from "./components/SubMenuPages/InterfaceFlow.jsx";
import SystemLog from "./components/SubMenuPages/SystemLog.jsx";
import APEvent from "./components/SubMenuPages/APEvent.jsx";
import PPTP from "./components/SubMenuPages/PPTP.jsx";
import L2TP from "./components/SubMenuPages/L2TP.jsx";
import VTNUS from "./components/SubMenuPages/VTNUS.jsx";
import VTNUSStatus from "./components/SubMenuPages/VTNUSStatus.jsx";
import Firmware from "./components/SubMenuPages/Firmware.jsx";
import Modify from "./components/SubMenuPages/Modify.jsx";
import PingDetection from "./components/SubMenuPages/PingDetection.jsx";
import ConfigFile from "./components/SubMenuPages/ConfigFile.jsx";
import Reatart from "./components/SubMenuPages/Reatart.jsx";
import TimedTask from "./components/SubMenuPages/TimedTask.jsx";
import TimeSynchronize from "./components/SubMenuPages/TimeSynchronize.jsx";
import CloudConfigure from "./components/SubMenuPages/CloudConfigure.jsx";
import Login from "./components/Login.jsx";
import MultiLineDiver from "./components/SubMenuPages/MultiLineDiver.jsx";
import Home from "./Home.jsx";
import HomePage from "./HomePage.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: 'deviceinfo', element: <DeviceInfo /> },
      { path: 'interfacestatus', element: <InterfaceStatus /> },
      { path: 'lanipflow', element: <LANIPflow /> },
      { path: 'applicationflow', element: <ApplicationFlow /> },
      { path: 'acoperationlog', element: <ACOperationLog /> },
      { path: 'WANConfigure', element: <WANConfigure /> },
      { path: 'landhcp', element: <LANDHCP /> },
      { path: 'physicalport', element: <PhysicalPortDefinition /> },
      { path: 'multiline', element: <MultiLineDiver /> },
      
      { path: 'staticroute', element: <StaticRoute /> },
      { path: 'ddns', element: <DDNS /> },
      { path: 'napport', element: <NatPortForward /> },
      { path: 'smartflow', element: <SmartFlowControl /> },
      { path: 'bandwidth', element: <BandWidthControl /> },
      { path: 'freeflow', element: <FreeFlowControl /> },
      { path: 'aplist', element: <APList /> },
      { path: 'apconfigure', element: <APConfigTemp /> },
      { path: 'apgroup', element: <APGroupDefinition /> },
      { path: 'apupgrade', element: <APUpgrade /> },
      { path: 'blackandwhite', element: <BlackWhiteList /> },
      { path: 'seamlessroaming', element: <SeamlessRoming /> },
      { path: 'autochannel', element: <AutoChannel /> },
      { path: 'auditconfigure', element: <AuditConfigure /> },
      { path: 'locatingserver', element: <LocatingServer /> },
      { path: 'authconfigure', element: <AuthConfig /> },
      { path: 'pppoeauth', element: <PPPOEAuth /> },
      { path: 'portalauth', element: <PortalAuth /> },
      { path: 'radiusbilling', element: <RadiusBilling /> },
      { path: 'authuser', element: <AuthUser /> },
      { path: 'authuserstatus', element: <AuthUserStatus /> },
      { path: 'departmentleveldefinition', element: <DepartmentLevelDefination /> },
      { path: 'applicationfirewall', element: <ApplicationFirewall /> },
      { path: 'urlredirect', element: <URLRedirect /> },
      { path: 'domainredirect', element: <DomainRedirect /> },
      { path: 'timeobject', element: <TimeObject /> },
      { path: 'sourceipobject', element: <SourceIPObject /> },
      { path: 'portobject', element: <PortObject /> },
      { path: 'destinitionipobject', element: <DestinitionIPObject /> },
      { path: 'buildinapplication', element: <BuildInApplication /> },
      { path: 'customapplication', element: <CustomApplication /> },
      { path: 'ipmacbinding', element: <IPMACBinding /> },
      { path: 'conquantitylimit', element: <ConQuanLimit /> },
      { path: 'lanabnormaldetection', element: <LANAbnormal /> },
      { path: 'lanattackprotection', element: <LANAttack /> },
      { path: 'wanpingforbid', element: <WANPing /> },
      { path: 'userauthlog', element: <UserAuth /> },
      { path: 'onlineuserlog', element: <OnlineUser /> },
      { path: 'interfaceflowlog', element: <InterfaceFlow /> },
      { path: 'systemlog', element: <SystemLog /> },
      { path: 'aceventlog', element: <APEvent /> },
      { path: 'ptp', element: <PPTP /> },
      { path: 'l2t', element: <L2TP /> },
      { path: 'vtnusconfig', element: <VTNUS /> },
      { path: 'vtnussta', element: <VTNUSStatus /> },
      { path: 'firmware', element: <Firmware /> },
      { path: 'modify', element: <Modify /> },
      { path: 'pingdetect', element: <PingDetection /> },
      { path: 'configfile', element: <ConfigFile /> },
      { path: 'restart', element: <Reatart /> },
      { path: 'timedtask', element: <TimedTask /> },
      { path: 'timesynchro', element: <TimeSynchronize /> },
      { path: 'cloudconfig', element: <CloudConfigure /> },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'home',
    element: <HomePage />,
  },
  
]);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="" element={<Layout />}>
//       <Route path="deviceinfo" element={<DeviceInfo />} />
//       <Route path="interfacestatus" element={<InterfaceStatus />} />
//       <Route path="lanipflow" element={<LANIPflow />} />
//       <Route path="applicationflow" element={<ApplicationFlow />} />
//       <Route path="acoperationlog" element={<ACOperationLog />} />
//       <Route path="WANConfigure" element={<WANConfigure />} />
//       <Route path="landhcp" element={<LANDHCP />} />
//       <Route path="physicalport" element={<PhysicalPortDefinition />} />
//       <Route path="staticroute" element={<StaticRoute />} />
//       <Route path="ddns" element={<DDNS />} />
//       <Route path="napport" element={<NatPortForward />} />
//       <Route path="smartflow" element={<SmartFlowControl />} />
//       <Route path="bandwidth" element={<BandWidthControl />} />
//       <Route path="freeflow" element={<FreeFlowControl />} />
//       <Route path="aplist" element={<APList />} />
//       <Route path="apconfigure" element={<APConfigTemp />} />
//       <Route path="apgroup" element={<APGroupDefinition />} />
//       <Route path="apupgrade" element={<APUpgrade />} />
//       <Route path="blackandwhite" element={<BlackWhiteList />} />
//       <Route path="seamlessroaming" element={<SeamlessRoming />} />
//       <Route path="autochannel" element={<AutoChannel />} />
//       <Route path="auditconfigure" element={<AuditConfigure />} />
//       <Route path="locatingserver" element={<LocatingServer />} />
//       <Route path="authconfigure" element={<AuthConfig />} />
//       <Route path="/pppoeauth" element={<PPPOEAuth />} />
//       <Route path="portalauth" element={<PortalAuth />} />
//       <Route path="radiusbilling" element={<RadiusBilling />} />
//       <Route path="authuser" element={<AuthUser/>} />
//       <Route path="authuserstatus" element={<AuthUserStatus/>} />
//       <Route path="departmentleveldefinition" element={<DepartmentLevelDefination/>} />
//       <Route path="applicationfirewall" element={<ApplicationFirewall/>} />
//       <Route path="urlredirect" element={<URLRedirect/>} />
//       <Route path="domainredirect" element={<DomainRedirect/>} />
//       <Route path="timeobject" element={<TimeObject/>} />
//       <Route path="sourceipobject" element={<SourceIPObject/>} />
//       <Route path="portobject" element={<PortObject/>} />
//       <Route path="destinitionipobject" element={<DestinitionIPObject/>} />
//       <Route path="buildinapplication" element={<BuildInApplication/>} />
//       <Route path="customapplication" element={<CustomApplication/>} />
//       <Route path="ipmacbinding" element={<IPMACBinding/>} />
//       <Route path="conquantitylimit" element={<ConQuanLimit/>} />
//       <Route path="lanabnormaldetection" element={<LANAbnormal/>} />
//       <Route path="lanattackprotection" element={<LANAttack/>} />
//       <Route path="wanpingforbid" element={<WANPing/>} />
//       <Route path="userauthlog" element={<UserAuth/>} />
//       <Route path="onlineuserlog" element={<OnlineUser/>} />
//       <Route path="interfaceflowlog" element={<InterfaceFlow/>} />
//       <Route path="systemlog" element={<SystemLog/>} />
//       <Route path="aceventlog" element={<APEvent/>} />
//       <Route path="ptp" element={<PPTP/>} />
//       <Route path="l2t" element={<L2TP/>} />
//       <Route path="vtnusconfig" element={<VTNUS/>} />
//       <Route path="vtnussta" element={<VTNUSStatus/>} />
//       <Route path="firmware" element={<Firmware/>} />
//       <Route path="modify" element={<Modify/>} />
//       <Route path="pingdetect" element={<PingDetection/>} />
//       <Route path="configfile" element={<ConfigFile/>} />
//       <Route path="restart" element={<Reatart/>} />
//       <Route path="timedtask" element={<TimedTask/>} />
//       <Route path="timesynchro" element={<TimeSynchronize/>} />
//       <Route path="cloudconfig" element={<CloudConfigure/>} />
      

      
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
