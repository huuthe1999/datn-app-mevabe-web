const baseService = "weightnotes";

const WEIGHT_NOTES = {
  ALL_CHILD_ID: (childId) => `/${baseService}/all/${childId}`,
  WEIGHT_NOTE_ID: (noteId) => `/${baseService}/${noteId}`,
  STANDARD_ALL: `/${baseService}/standard/all`,
  CHILD_ID: (childId) => `/${baseService}/${childId}`,
};

export default WEIGHT_NOTES;
