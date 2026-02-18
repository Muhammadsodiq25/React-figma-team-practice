import "./Sidebar.css"
import sidebarLogo from "../../assets/sidebar-logo.png"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar--logo" width={50} height={50} src={sidebarLogo} alt="" />
    </div>
  )
}

export default Sidebar
