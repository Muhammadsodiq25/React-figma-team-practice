import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Projects from "./pages/projects/Projects"
import Calendar from "./pages/calendar/Calendar"
import MyProfile from "./pages/myProfile/MyProfile"
import Employees from "./pages/employees/Employees"
import Vacations from "./pages/vacations/Vacations"
import Sidebar from "./components/sidebar/Sidebar"


const App = () => {
  return (
    <div className="container">
      <Sidebar/>
      <div style={{width:"80%"}}>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="calendar" element={<Calendar/>}/>
        <Route path="myprofile" element={<MyProfile/>}/>
        <Route path="employees" element={<Employees/>}/>
        <Route path="vacations" element={<Vacations/>}/>
      </Routes>
      </div>
    </div>
  )
}

export default App
