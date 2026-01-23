import { Outlet } from "react-router-dom";
import Layout from "../components/Layout"

const Startpage = () => {
  return (
    <>
    <Layout />
    <main>
      <Outlet />
    </main></>
  )
}

export default Startpage
