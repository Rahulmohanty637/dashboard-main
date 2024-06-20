import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import {
  SystemUpdateAlt,
  SettingsEthernet,
  Policy,
  AccountTree,
  Public,
  Security,
  Category,
  ReceiptLong,
  VerifiedUser,
  Group,
  SwapHoriz,
  LibraryBooks,
  Description,
  EventNote,
  VpnLock,
  Build,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  


  const [dropdownOpen, setDropdownOpen] = useState({
    systemStatus: false,
    networkConfigure: false,
    flowControlPolicy: false,
    acManagement: false,
    authInternetAccess: false,
    behaviorControl: false,
    objectManagement: false,
    safetyProtection: false,
    logRecord: false,
    vpn: false,
    deviceMaintenance: false,
  });

  const toggleDropdown = (key) => {
    setDropdownOpen({ ...dropdownOpen, [key]: !dropdownOpen[key] });
  };

  return (
    <div className="w-64 h-full bg-white border-r">
      <div className="p-4">
        <List>
          <ListItem button onClick={() => toggleDropdown("systemStatus")}>
            <ListItemIcon>
              <SystemUpdateAlt />
            </ListItemIcon>
            <ListItemText primary="System Status" />
            {dropdownOpen.systemStatus ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.systemStatus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/deviceinfo">
                <ListItem>
                  <ListItemText primary="Device info" />
                </ListItem>
              </Link>

              <Link to="/interfacestatus">
                <ListItem>
                  <ListItemText primary="Interface Status" />
                </ListItem>
              </Link>

              <Link to="/lanipflow">
                <ListItem>
                  <ListItemText primary="LAN IP Flow" />
                </ListItem>
              </Link>

              <Link to="/applicationflow">
                <ListItem>
                  <ListItemText primary="Application Flow" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("networkConfigure")}>
            <ListItemIcon>
              <SettingsEthernet />
            </ListItemIcon>
            <ListItemText primary="Network Configure" />
            {dropdownOpen.networkConfigure ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={dropdownOpen.networkConfigure}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <Link to="/WANConfigure">
                <ListItem>
                  <ListItemText primary="WAN Configure" />
                </ListItem>
              </Link>

              <Link to="/landhcp">
                <ListItem>
                  <ListItemText primary="LANDHCP" />
                </ListItem>
              </Link>
              
              <Link to="/physicalport">
                <ListItem>
                  <ListItemText primary="Physical Port Definition" />
                </ListItem>
              </Link>

              <Link to="/multiline">
                <ListItem>
                  <ListItemText primary="Multi-line Diversion Rules" />
                </ListItem>
              </Link>

            

             <Link to="/staticroute">
                <ListItem>
                  <ListItemText primary="Static Route" />
                </ListItem>
              </Link>

              <Link to="/ddns">
                <ListItem>
                  <ListItemText primary="DDNS" />
                </ListItem>
              </Link>

              <Link to="/napport">
                <ListItem>
                  <ListItemText primary="NAT/Port Forwarding" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("flowControlPolicy")}>
            <ListItemIcon>
              <Policy />
            </ListItemIcon>
            <ListItemText primary="Flow Control Policy" />
            {dropdownOpen.flowControlPolicy ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={dropdownOpen.flowControlPolicy}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              <Link to="/smartflow">
                <ListItem>
                  <ListItemText primary="Smart Flow Control" />
                </ListItem>
              </Link>

              <Link to="/bandwidth">
                <ListItem>
                  <ListItemText primary="Band Width Control" />
                </ListItem>
              </Link>

              <Link to="/freeflow">
                <ListItem>
                  <ListItemText primary="Free flow Control" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("acManagement")}>
            <ListItemIcon>
              <AccountTree />
            </ListItemIcon>
            <ListItemText primary="AC Management" />
            {dropdownOpen.acManagement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.acManagement} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/aplist">
                <ListItem>
                  <ListItemText primary="AP List" />
                </ListItem>
              </Link>

              <Link to="/apconfigure">
                <ListItem>
                  <ListItemText primary="Ap Configure Template" />
                </ListItem>
              </Link>

              <Link to="/apgroup">
                <ListItem>
                  <ListItemText primary="AP Group Definition" />
                </ListItem>
              </Link>

              <Link to="/apupgrade">
                <ListItem>
                  <ListItemText primary="AP Upgrade" />
                </ListItem>
              </Link>

              <Link to="/blackandwhite">
                <ListItem>
                  <ListItemText primary="Black and White List" />
                </ListItem>
              </Link>

              <Link to="/seamlessroaming">
                <ListItem>
                  <ListItemText primary="Seamless Roaming" />
                </ListItem>
              </Link>

              <Link to="/autochannel">
                <ListItem>
                  <ListItemText primary="Auto Channel" />
                </ListItem>
              </Link>

              <Link to="/auditconfigure">
                <ListItem>
                  <ListItemText primary="Audit Configuration" />
                </ListItem>
              </Link>

              <Link to="/locatingserver">
                <ListItem>
                  <ListItemText primary="Locating Server" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("authInternetAccess")}>
            <ListItemIcon>
              <Public />
            </ListItemIcon>
            <ListItemText primary="Auth Internet Access" />
            {dropdownOpen.authInternetAccess ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={dropdownOpen.authInternetAccess}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              
            <Link to="/authconfigure">
                <ListItem>
                  <ListItemText primary="Auth Configure" />
                </ListItem>
              </Link>

              <Link to="/pppoeauth">
                <ListItem>
                  <ListItemText primary="PPPOE Auth" />
                </ListItem>
              </Link>

              <Link to="/portalauth">
                <ListItem>
                  <ListItemText primary="Portal Auth" />
                </ListItem>
              </Link>

              <Link to="/radiusbilling">
                <ListItem>
                  <ListItemText primary="Radius Billing" />
                </ListItem>
              </Link>

              <Link to="/authuser">
                <ListItem>
                  <ListItemText primary="Auth User" />
                </ListItem>
              </Link>

              <Link to="/authuserstatus">
                <ListItem>
                  <ListItemText primary="Auth User Status" />
                </ListItem>
              </Link>

              <Link to="/departmentleveldefinition">
                <ListItem>
                  <ListItemText primary="Department Level Definition" />
                </ListItem>
              </Link>

            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("behaviorControl")}>
            <ListItemIcon>
              <Security />
            </ListItemIcon>
            <ListItemText primary="Behavior Control" />
            {dropdownOpen.behaviorControl ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={dropdownOpen.behaviorControl}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
            <Link to="/applicationfirewall">
                <ListItem>
                  <ListItemText primary="Application Firewall" />
                </ListItem>
              </Link>

              <Link to="/urlredirect">
                <ListItem>
                  <ListItemText primary="URL Redirect" />
                </ListItem>
              </Link>

              <Link to="/domainredirect">
                <ListItem>
                  <ListItemText primary="Domain Redirect" />
                </ListItem>
              </Link>
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("objectManagement")}>
            <ListItemIcon>
              <Category />
            </ListItemIcon>
            <ListItemText primary="Object Management" />
            {dropdownOpen.objectManagement ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={dropdownOpen.objectManagement}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>

               <Link to="/timeobject">
                <ListItem>
                  <ListItemText primary="Time Object" />
                </ListItem>
              </Link>

               <Link to="/sourceipobject">
                <ListItem>
                  <ListItemText primary="Source IP Object" />
                </ListItem>
              </Link>

              <Link to="/portobject">
                <ListItem>
                  <ListItemText primary="Port Object" />
                </ListItem>
              </Link>

              <Link to="/destinitionipobject">
                <ListItem>
                  <ListItemText primary="Destinition IP Object" />
                </ListItem>
              </Link>

              <Link to="/buildinapplication">
                <ListItem>
                  <ListItemText primary="Build-in Application Object" />
                </ListItem>
              </Link>

              <Link to="/customapplication">
                <ListItem>
                  <ListItemText primary="Custom Application Object" />
                </ListItem>
              </Link>

            </List>

          </Collapse>

          <ListItem button onClick={() => toggleDropdown("safetyProtection")}>
            <ListItemIcon>
              <Security />
            </ListItemIcon>
            <ListItemText primary="Safety Protection" />
            {dropdownOpen.safetyProtection ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={dropdownOpen.safetyProtection}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>

            <Link to="/ipmacbinding">
                <ListItem>
                  <ListItemText primary="IP-MAC Binding" />
                </ListItem>
              </Link>

              <Link to="/conquantitylimit">
                <ListItem>
                  <ListItemText primary="Connection Quantity Limit" />
                </ListItem>
              </Link>

              <Link to="/lanabnormaldetection">
                <ListItem>
                  <ListItemText primary="LAN Abnormal Detection" />
                </ListItem>
              </Link>

              <Link to="/lanattackprotection">
                <ListItem>
                  <ListItemText primary="LAN Attack Protection" />
                </ListItem>
              </Link>

              <Link to="/wanpingforbid">
                <ListItem>
                  <ListItemText primary="WAN Ping Forbid/WAN Login" />
                </ListItem>
              </Link>
              
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("logRecord")}>
            <ListItemIcon>
              <ReceiptLong />
            </ListItemIcon>
            <ListItemText primary="Log Record" />
            {dropdownOpen.logRecord ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.logRecord} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

            <Link to="/userauthlog">
                <ListItem>
                  <ListItemText primary="User Auth Log" />
                </ListItem>
              </Link>

              <Link to="/onlineuserlog">
                <ListItem>
                  <ListItemText primary="Online User Log" />
                </ListItem>
              </Link>

              <Link to="/interfaceflowlog">
                <ListItem>
                  <ListItemText primary="Interface Flow Log" />
                </ListItem>
              </Link>

              <Link to="/systemlog">
                <ListItem>
                  <ListItemText primary="System Log" />
                </ListItem>
              </Link>

              <Link to="/acoperationlog">
                <ListItem>
                  <ListItemText primary="AC Operation Log" />
                </ListItem>
                </Link>

                <Link to="/aceventlog">
                <ListItem>
                  <ListItemText primary="AP Event Log" />
                </ListItem>
                </Link>

            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("vpn")}>
            <ListItemIcon>
              <VpnLock />
            </ListItemIcon>
            <ListItemText primary="VPN" />
            {dropdownOpen.vpn ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={dropdownOpen.vpn} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>

            <Link to="/ptp">
                <ListItem>
                  <ListItemText primary="PPTP" />
                </ListItem>
                </Link>

                <Link to="/l2t">
                <ListItem>
                  <ListItemText primary="L2TP" />
                </ListItem>
                </Link>

                <Link to="/vtnusconfig">
                <ListItem>
                  <ListItemText primary="VTNUS Configure" />
                </ListItem>
                </Link>

                <Link to="/vtnussta">
                <ListItem>
                  <ListItemText primary="VTNUS Status" />
                </ListItem>
                </Link>
              
            </List>
          </Collapse>

          <ListItem button onClick={() => toggleDropdown("deviceMaintenance")}>
            <ListItemIcon>
              <Build />
            </ListItemIcon>
            <ListItemText primary="Device Maintenance" />
            {dropdownOpen.deviceMaintenance ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={dropdownOpen.deviceMaintenance}
            timeout="auto"
            unmountOnExit
          >
            <List component="div" disablePadding>
              
            <Link to="/firmware">
                <ListItem>
                  <ListItemText primary="Firmware Upgrade" />
                </ListItem>
                </Link>

                <Link to="/modify">
                <ListItem>
                  <ListItemText primary="Modify Password" />
                </ListItem>
                </Link>

                <Link to="/pingdetect">
                <ListItem>
                  <ListItemText primary="Ping Detection" />
                </ListItem>
                </Link>

                <Link to="/configfile">
                <ListItem>
                  <ListItemText primary="Configure File Maintenance" />
                </ListItem>
                </Link>

                <Link to="/restart">
                <ListItem>
                  <ListItemText primary="Restart Device" />
                </ListItem>
                </Link>

                <Link to="/timedtask">
                <ListItem>
                  <ListItemText primary="Timed Task" />
                </ListItem>
                </Link>

                <Link to="/timesynchro">
                <ListItem>
                  <ListItemText primary="Time Synchronization" />
                </ListItem>
                </Link>

                <Link to="/cloudconfig">
                <ListItem>
                  <ListItemText primary="Cloud Configure" />
                </ListItem>
                </Link>

            </List>
          </Collapse>
        </List>
      </div>
    </div>
    
  );
};

export default Sidebar;
