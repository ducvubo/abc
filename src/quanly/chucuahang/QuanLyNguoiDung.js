import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./QuanLyNguoiDung.scss";

class QuanLyNguoiDung extends Component {
  render() {
    return (
      <div className="quanlynguoidung">
        <div className="row">
        <div className="form-group col-5">
          <label>Email</label>
          <input className="form-control" />
        </div>
        <div className="form-group col-5">
          <label>Password</label>
          <input className="form-control" />
        </div>

        <div className="form-group col-4">
          <label>Họ</label>
          <input className="form-control" />
        </div>
        <div className="form-group col-4">
          <label>Tên</label>
          <input className="form-control" />
        </div>
        <div className="form-group col-4">
          <label>Số điện thoại</label>
          <input className="form-control" />
        </div>

        <div className="form-group col-6">
          <label>Địa chỉ nhà</label>
          <input className="form-control" />
        </div>
        <div className="form-group col-6">
          <label>Địa chỉ cửa hàng</label>
          <input className="form-control" />
        </div>  

        <div className="form-group col-6">
          <label>Giới tính</label>
          <input className="form-control" />
        </div>
        <div className="form-group col-6">
          <label>Quyền</label>
          <input className="form-control" />
        </div>
        </div>
   
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(QuanLyNguoiDung);
