import React, { Component } from 'react';
import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-left">
                <div className="footer-left-icon"><i class="fas fa-home"></i><span>  Địa chỉ: xxx </span></div>
                <div className="footer-left-icon"><i class="far fa-envelope"></i> <span>  Mail: frogsleapvietnam@gmail.com </span></div>
                <div className="footer-left-icon"><i class="fas fa-phone"></i><span>  Số điện thoại: +84 97 4239 122 </span></div>
                </div>
                <div className="footer-right">
                    <span className="footer-right-title" >Connect with us</span>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-youtube"></i>
                </div>
            </div>
        )
    }
}

export default Footer;