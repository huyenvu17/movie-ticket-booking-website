import { DANG_NHAP, DANG_XUAT } from "../types/QuanLyNguoiDungType";

let taiKhoan = "";
if (localStorage.getItem("userLogin")) {
  taiKhoan = JSON.parse(JSON.stringify(localStorage.getItem("userLogin"))).taiKhoan;
}

const initialState = {
  taiKhoan: taiKhoan,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      state.taiKhoan = action.taiKhoan;
      return { ...state };
    }
    case DANG_XUAT: {
      localStorage.removeItem("userLogin");
      state.taiKhoan = "";
      window.location.reload();
      return { ...state };
    }
    default:
  }
  return { ...state };
};
