function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        (i<span>M</span>)apVietnam®
      </div>

      <div className="nav-links">
        <a href="#top" className="nav-link active">/Tổng quan</a>
        <a href="#ecosystem" className="nav-link">/Hệ sinh thái</a>
        <a href="#cert" className="nav-link">/Xác thực</a>
        <a href="#pipeline" className="nav-link">/Pipeline</a>
        <a href="#register" className="nav-link">/Đăng ký</a>
        <a href="#dashboard" className="nav-link">/Dashboard</a>
      </div>

      <button className="nav-cta">Thêm doanh nghiệp +</button>
    </nav>
  )
}


export default Navbar