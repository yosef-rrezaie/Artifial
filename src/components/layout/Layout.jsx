import SideBar from "@components/modules/SideBar"

function Layout({children}) {
  return (
    <div dir="rtl" className="w-full h-screen flex font-Yekan">
      <SideBar/>
     <div>{children}</div>
    </div>
  )
}

export default Layout
