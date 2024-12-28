import ProjectTable from "./ProjectTable"
import SideBar from "./SideBar"

const DashBoard = () => {
  return (
    <div className="flex h-screen">
        <SideBar/>
        <div className="flex-1 bg-gray-900">
            <ProjectTable/>
        </div>
    </div>
  )
}

export default DashBoard