import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="top"><span className = "logo">Isuru</span></div>
        <hr/>
        <div className="center">
              <ul>  <p className = "tittle">MAIN</p>
                    <li><DashboardIcon className = "icon"/><span>Dashboard</span></li>
                    <p className = "tittle">LISTS</p>
                    <li><PersonOutlineOutlinedIcon className = "icon"/><span>Users</span></li>
                    <li><StoreIcon className = "icon"/><span>Product</span></li>
                    <li><CreditCardIcon className = "icon"/><span>Orders</span></li>
                    <li><LocalShippingIcon className = "icon"/><span>Delivery</span></li>
                    <p className = "tittle">USEFUL LINKS</p>
                    <li><AssessmentIcon className = "icon"/><span>Stats</span></li>
                    <li><NotificationsNoneOutlinedIcon className = "icon"/><span>Notifications</span></li>
                    <p className = "tittle">SERVICE</p>
                    <li><SettingsSystemDaydreamOutlinedIcon className = "icon"/><span>SystemHealth</span></li>
                    <li><PsychologyOutlinedIcon className = "icon"/><span>Logs</span></li>
                    <li><SettingsIcon className = "icon"/><span>Settings</span></li>
                    <p className = "tittle">USER</p>
                    <li><AccountCircleOutlinedIcon className = "icon"/><span>Profile</span></li>
                    <li><ExitToAppOutlinedIcon className = "icon"/><span>Logout</span></li>
              </ul>
        </div>
        <div className="bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
          {/* <div className="colorOption"></div> */}
        </div>
    </div>
  )
}

export default Sidebar