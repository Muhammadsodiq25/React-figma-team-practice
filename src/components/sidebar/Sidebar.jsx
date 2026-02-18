import "./Sidebar.css"

const Sidebar = ({logo}) => {
  return (
    <div className="sidebar">
      <img className="sidebar--logo" width={50} height={50} src={logo} alt="" />
    </div>
  )
}

export default Sidebar
