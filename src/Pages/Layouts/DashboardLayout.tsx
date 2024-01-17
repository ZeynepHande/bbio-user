import { Link, Outlet } from "react-router-dom"

export  const DashboardLayout = () => {
    return <div className=" w-screen h-screen">
        <nav className="px-8 py-4 flex gap-8 backdrop-blur-lg bg-slate-400/30 ">
          <Link to="/login">Login</Link>
          <Link to="/">List Users</Link>
          <Link to="/create">Create User</Link>
        </nav>
        <Outlet/>
    </div>
}