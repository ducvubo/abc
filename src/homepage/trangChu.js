import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./trangChu.scss";
import logo from '../image/logo.png'
class trangChu extends Component {
  render() {
    return (
      <>
        <div className="item1">
          <div className="sdt">HOTLINE: 1900 633 045 | 0865 160 360</div>
          <div className="tk-gh-tt">
            <div className="icon">
              <span>
                <i className="fas fa-user"></i>
              </span>
              <span>Tài khoản</span>
            </div>
            <div className="icon">
              <span>
                <i className="fas fa-shopping-cart"></i>
              </span>
              <span>Giỏ hàng</span>
            </div>
            <div className="icon">
              <span>
                <i className="fas fa-share"></i>
              </span>
              <span>Thanh toán</span>
            </div>
          </div>
        </div>
        <div className="item2">
          <div className="fb-tw-it">
            <span>
              <i className="fab fa-facebook"></i>
            </span>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span>
              <i className="fab fa-instagram"></i>
            </span>
          </div>
          <div className="logo">
            <img src={logo} width="150" height="150"/>
          </div>
          <div className="tk-gh">
            <input className="form-control" />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(trangChu);
