const baseService = "vaccinations";

const VACCINATIONS = {
  ALL_CHILD_ID: (childId) => `/${baseService}/all/${childId}`,
  SHOT_CHILDID_SHOTID: (childId, shotId) =>
    `/${baseService}/shot/${childId}/${shotId}`,
  SHOT_CHILD_CHILDID_SHOTID: (childId, shotId) =>
    `/${baseService}/shot/child/${childId}/${shotId}`,
};

export default VACCINATIONS;
