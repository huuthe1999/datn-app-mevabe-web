const baseService = "grownotes";

const GROW_NOTES = {
  GROW_NOTE_ID: (id) => `/${baseService}/${id}`,
  CHILD_ID: (childId) => `/${baseService}/${childId}`,
  ALL_CHILD_ID: (childId) => `/${baseService}/all/${childId}`,
  STANDARD_ALL: `/${baseService}/standard/all`,
};

export default GROW_NOTES;
