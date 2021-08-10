// lazyRoutes
import { Register, Login, ForgotPassword, ResetPassword } from "./lazyRoutes";
// others
import CONSTANTS from "@/constants";

const nonUserRoutes = [
  {
    path: CONSTANTS.ROUTERS.LOGIN,
    component: Login,
    shouldResetReducer: true,
  },
  {
    path: CONSTANTS.ROUTERS.REGISTER,
    component: Register,
    shouldResetReducer: true,
  },
  {
    path: CONSTANTS.ROUTERS.FORGOT_PASSWORD,
    component: ForgotPassword,
    shouldResetReducer: true,
  },
  {
    path: CONSTANTS.ROUTERS.RESET_PASSWORD,
    component: ResetPassword,
    shouldResetReducer: true,
  },
];

export default nonUserRoutes;
