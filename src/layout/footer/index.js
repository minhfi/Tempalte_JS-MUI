/**
 * File name: src\layout\footer\index.js
 * Created by Visual studio code
 * User: Danh Le / danh.le@dinovative.com
 * Date: 2020-04-12 23:17:05
 */
import React from 'react'

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-left">
        <div className="address">
          11 D1 Street, Tan Hung Ward, District 7, Ho Chi Minh City
        </div>
        <div className="contact">(+84) 28 73007880 | contact@dinosys.vn</div>
      </div>

      <div className="footer-right">
        <div className="social">
          <a href="#">Linkedin</a>
          <a href="#">Facebook</a>
        </div>
        <div className="policy">© 2015 – 2021 Dinosys | Privacy Policy</div>
      </div>
    </footer>
  )
}

export default Footer
