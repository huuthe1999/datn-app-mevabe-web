import ROUTERS from "../routers";

const {
  HOME,
  LOGIN,
  REGISTER,
  HANDBOOK,
  STORIES,
  FAQ,
  FORGOT_PASSWORD,
  PROFILE,
  RESET_PASSWORD,
  CHILD_MANAGE,
  ACTIVITY_TRACK,
  CHAT,
  PROFILE_INFO,
  PROFILE_BLOCKED_USER,
  CALENDAR,
  PROFILE_CHILD,
  PROFILE_STORY,
} = ROUTERS;

const PAGE_NAMES = {
  [PROFILE_STORY]: "Khoảnh khắc của bạn",
  [HOME]: "Mẹ và bé",
  [LOGIN]: "Đăng nhập",
  [REGISTER]: "Đăng kí",
  [HANDBOOK]: "Cẩm nang",
  [STORIES]: "Khoảnh khắc",
  [FAQ]: "Hỏi đáp",
  [FORGOT_PASSWORD]: "Quên mật khẩu",
  [PROFILE]: "Thông tin tài khoản",
  [RESET_PASSWORD]: "Khôi phục mật khẩu",
  [CHILD_MANAGE]: "Thông tin của bé",
  [ACTIVITY_TRACK]: "Theo dõi hoạt động",
  [CHAT]: "Tin nhắn",
  [PROFILE_INFO]: "Thông tin tài khoản",
  [PROFILE_BLOCKED_USER]: "Người dùng đã chặn",
  [CALENDAR]: "Hoạt động",
  [PROFILE_CHILD]: "Danh sách bé",
};

export default PAGE_NAMES;
