import React from 'react'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="top">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="" />
      </div>
      <div class="bottom">
        <div className="footerMenu">
          <dl>
            <dd><a href="">About</a></dd>
            <dd><a href="">Terms & Conditions</a></dd>
            <dd><a href="">Privacy</a></dd>
            <dd><a href="">Policy</a></dd>
            <dd><a href="">Partners</a></dd>
          </dl>
        </div>
        <div className="footerInfo">
          <address className='left'>
            <ul>
              <li>Company: (주)왁티</li>
              <li>Owner: 강정훈</li>
              <li>06028 서울특별시 강남구 압구정로10길 7 (신사동) 3층 왁티</li>
            </ul>
            <ul>
              <li>Company Registration No.: 240-88-00299</li>
              <li>Telecommunication services registration No.: 제2016-서울강남-03076호</li>
            </ul>
            <ul>
              <li>E-mail : <a href="support@sw19official.com">support@sw19official.com</a></li>
              <li>Tel: 070-4457-4194 (Mon-Fri 9:00-11:00 / 13:00-18:00)</li>
            </ul>
          </address>
        </div>
        <div className="Right">
          <p>Copyright &copy; Copyright © SW19. All rights reserved.</p>
          <ul>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>대량주문 / 제휴문의</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;