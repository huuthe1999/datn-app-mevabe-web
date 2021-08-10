import CONSTANTS from "@/constants";

const { USERNAME, PASSWORD } = CONSTANTS.FIELD_NAMES.LOGIN;

export const initialValues = ({ phone, email } = {}) => ({
  [USERNAME]: phone || email || "",
  [PASSWORD]: "",
});

export const rules = {
  [USERNAME]: [
    { required: true, message: "Vui lòng nhập email hoặc số điện thoại" },
  ],
  [PASSWORD]: [
    {
      required: true,
      message: "Mật khẩu không được để trống",
    },
  ],
};
