function Hero() {
  return (
    <section className="hero" id="top">
      <div>
        <div className="hero-kicker">
          Impact Economy Digital Hub &mdash; Q1/2026
        </div>

        <h1 className="hero-h1">
          Từ <em>hiện diện</em>
          <br />
          đến <em>uy tín.</em>
        </h1>

        <p className="hero-sub">
          Nền tảng số trung tâm cho hệ sinh thái doanh nghiệp tạo tác động xã hội Việt Nam.
          Dữ liệu thực, xác thực khoa học, kết nối nguồn lực.
        </p>

        <div className="hero-actions">
          <a href="#ecosystem" className="btn-primary">
            Khám phá hệ sinh thái
          </a>
          <a href="#cert" className="btn-ghost">
            Xem Impactonomy Mark &rarr;
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="stat-stack">
          <div className="stat-block">
            <div className="stat-num">1,247</div>
            <div className="stat-unit">doanh nghiệp</div>
            <div className="stat-desc">Đã đăng ký trên nền tảng</div>
          </div>

          <div className="stat-block">
            <div className="stat-num">389</div>
            <div className="stat-unit">Verified</div>
            <div className="stat-desc">Đã qua bộ lọc của IID</div>
          </div>

          <div className="stat-block">
            <div className="stat-num" style={{ color: 'var(--gold)' }}>87</div>
            <div className="stat-unit" style={{ color: 'var(--gold)' }}>Gold Mark</div>
            <div className="stat-desc">Chứng nhận Impactonomy</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero