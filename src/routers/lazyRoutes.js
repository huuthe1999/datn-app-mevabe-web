import { lazy } from "react";

const delayImport =
  (ms = 100) =>
  (promise) =>
    promise.then(
      (data) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        })
    );

export const Login = lazy(() => delayImport()(import("@/pages/Login")));
export const Register = lazy(() => delayImport()(import("@/pages/Register")));
export const ForgotPassword = lazy(() =>
  delayImport()(import("@/pages/ForgotPassword"))
);
export const Home = lazy(() => delayImport()(import("@/pages/Home")));
export const ActivityTrack = lazy(() =>
  delayImport()(import("@/pages/ActivityTrack"))
);
export const FAQ = lazy(() => delayImport()(import("@/pages/FAQ")));
export const Handbook = lazy(() => delayImport()(import("@/pages/Handbook")));
export const Stories = lazy(() => delayImport()(import("@/pages/Stories")));
export const Profile = lazy(() => delayImport()(import("@/pages/Profile")));
export const NotFound = lazy(() => delayImport()(import("@/pages/NotFound")));
export const ResetPassword = lazy(() =>
  delayImport()(import("@/pages/ResetPassword"))
);
export const DetailHandbook = lazy(() =>
  delayImport()(import("@/pages/DetailHandbook"))
);
export const ChildManage = lazy(() =>
  delayImport()(import("@/pages/ChildManage"))
);
export const StatusDetail = lazy(() =>
  delayImport()(import("@/pages/StatusDetail"))
);
export const Chat = lazy(() => delayImport()(import("@/pages/Chat")));
export const Calendar = lazy(() => delayImport()(import("@/pages/Calendar")));
