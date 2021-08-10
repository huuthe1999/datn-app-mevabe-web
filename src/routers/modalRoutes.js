// others
import CONSTANTS from "@/constants";
import StoryDetail from "@/pages/StoryDetail";

const publicRoutes = [
  {
    path: `${CONSTANTS.ROUTERS.STORIES}/:statusId`,
    component: StoryDetail,
    shouldResetReducer: true,
  },
];

export default publicRoutes;
