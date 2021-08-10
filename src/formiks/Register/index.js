import CONSTANTS from "@/constants";

const {
  EMAIL,
  PASSWORD,
  FULL_NAME,
  CONFIRM_PASSWORD,
  PHONE,
} = CONSTANTS.FIELD_NAMES.REGISTER;

export const initialValues = {
  [FULL_NAME]: "",
  [EMAIL]: "",
  [PASSWORD]: "",
  [CONFIRM_PASSWORD]: "",
  [PHONE]: "",
};

export const rules = {
  [FULL_NAME]: [{ required: true, message: "Họ tên không được để trống" }],
  [EMAIL]: [
    { required: true, message: "Email không được để trống" },
    {
      type: "email",
      message: "Email không hợp lệ",
    },
  ],
  [PHONE]: [
    { required: true, message: "Điện thoại không được để trống" },
    {
      len: 10,
      message: "Số điện thoại phải có 10 chữ số",
    },
    { pattern: /^[0-9]+$/, message: "Số điện thoại không hợp lệ" },
  ],
  [PASSWORD]: [
    {
      required: true,
      message: "Mật khẩu không được để trống",
    },
    {
      min: 8,
      message: "Mật khẩu phải có ít nhất 8 kí tự",
    },
  ],
  [CONFIRM_PASSWORD]: [
    {
      required: true,
      message: "Bạn chưa xác nhận mật khẩu",
    },
    ({ getFieldValue }) => ({
      validator(_, value) {
        if (!value || getFieldValue(PASSWORD) === value) {
          return Promise.resolve();
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject("Mật khẩu xác nhận không trùng khớp");
      },
    }),
  ],
};
