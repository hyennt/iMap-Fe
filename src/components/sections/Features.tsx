function Features() {
  return (
    // <section className="section alt fade-in">
    <section className="section alt">  
      <div className="section-header">
        <div>
          <div className="section-num">/003/ &mdash; Tính năng</div>
          <h2 className="section-title">
            Nền tảng <em>toàn diện.</em>
          </h2>
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <div className="feature-num">
            /001/ <span>Số hóa</span>
          </div>
          <div className="feature-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#1D9E75"
              strokeWidth="1.5"
            >
              <rect x="1" y="1" width="6" height="6" rx="1" />
              <rect x="9" y="1" width="6" height="6" rx="1" />
              <rect x="1" y="9" width="6" height="6" rx="1" />
              <rect x="9" y="9" width="6" height="6" rx="1" />
            </svg>
          </div>
          <div className="feature-title">Dashboard &amp; Heatmap</div>
          <div className="feature-desc">
            Doanh nghiệp tự cập nhật số liệu theo thời gian thực. Heatmap SDGs
            phân tích mức độ lan tỏa tác động theo vùng địa lý.
          </div>
          <div className="feature-arrow">&rarr;</div>
        </div>

        <div className="feature">
          <div className="feature-num">
            /002/ <span>Xác thực</span>
          </div>
          <div className="feature-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#B8860A"
              strokeWidth="1.5"
            >
              <path d="M8 1l1.5 3 3.5.5-2.5 2.5.5 3.5L8 9l-3 1.5.5-3.5-2.5-2.5 3.5-.5z" />
            </svg>
          </div>
          <div className="feature-title">Impactonomy Mark</div>
          <div className="feature-desc">
            Hệ thống chứng nhận 3 cấp: Basic &rarr; Verified &rarr; Gold Mark.
            Đánh giá 4 chiều: Quản trị, Tác động, Tài chính, Bền vững.
          </div>
          <div className="feature-arrow">&rarr;</div>
        </div>

        <div className="feature">
          <div className="feature-num">
            /003/ <span>Kết nối</span>
          </div>
          <div className="feature-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#2271D1"
              strokeWidth="1.5"
            >
              <circle cx="8" cy="8" r="3" />
              <circle cx="3" cy="4" r="1.5" />
              <circle cx="13" cy="4" r="1.5" />
              <line x1="5" y1="7" x2="6" y2="7" />
              <line x1="10" y1="7" x2="11" y2="7" />
            </svg>
          </div>
          <div className="feature-title">Ecosystem Visualization</div>
          <div className="feature-desc">
            Mạng lưới kết nối trực quan: ai đầu tư cho ai, doanh nghiệp thuộc
            vườn ươm nào. Tham chiếu từ ImpactLink Asia.
          </div>
          <div className="feature-arrow">&rarr;</div>
        </div>

        <div className="feature">
          <div className="feature-num">
            /004/ <span>Dữ liệu</span>
          </div>
          <div className="feature-icon">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#1D9E75"
              strokeWidth="1.5"
            >
              <path d="M2 14V6l6-4 6 4v8H2z" />
              <path d="M6 14V9h4v5" />
            </svg>
          </div>
          <div className="feature-title">Báo cáo &amp; Xuất dữ liệu</div>
          <div className="feature-desc">
            Báo cáo định kỳ theo quý và năm. Import Excel hàng loạt. Admin CRUD
            toàn bộ hệ thống. Phân quyền Public / Premium / Admin.
          </div>
          <div className="feature-arrow">&rarr;</div>
        </div>
      </div>
    </section>
  )
}

export default Features