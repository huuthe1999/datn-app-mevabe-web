import CONSTANTS from "@/constants";

const { EMAIL } = CONSTANTS.FIELD_NAMES.FORGOT_PASSWORD;

export const initialValues = {
  [EMAIL]: "",
};

export const rules = {
  [EMAIL]: [
    { required: true, message: "Email không được để trống" },
    {
      type: "email",
      message: "Email không hợp lệ",
    },
  ],
};
