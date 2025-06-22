function Layout({ children }) {
  return (
    <div className="sidebar-layout">
      {/* Left Sidebar */}
      <div className="sidebar"></div>
      
      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>
      
      {/* Right Sidebar */}
      <div className="sidebar"></div>
    </div>
  )
}

export default Layout