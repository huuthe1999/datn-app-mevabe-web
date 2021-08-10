const baseService = "heightnotes";

const HEIGHT_NOTES = {
  ALL_CHILD_ID: (childId) => `/${baseService}/all/${childId}`,
  HEIGHT_NOTE_ID: (noteId) => `/${baseService}/${noteId}`,
  STANDARD_ALL: `/${baseService}/standard/all`,
  CHILD_ID: (childId) => `/${baseService}/${childId}`,
};

export default HEIGHT_NOTES;
