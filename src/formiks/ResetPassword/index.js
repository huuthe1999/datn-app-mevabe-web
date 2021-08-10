import CONSTANTS from "@/constants";

const { PASSWORD, CONFIRM_PASSWORD } = CONSTANTS.FIELD_NAMES.RESET_PASSWORD;

export const initialValues = {
  [PASSWORD]: "",
  [CONFIRM_PASSWORD]: "",
};

export const rules = {
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
