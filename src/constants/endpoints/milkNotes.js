const baseService = "milknotes";

const MILK_NOTES = {
  ALL_CHILD_ID: (childId) => `/${baseService}/all/${childId}`,
  MILK_NOTE_ID: (milkNoteId) => `/${baseService}/${milkNoteId}`,
  CHILD_ID: (childId) => `/${baseService}/${childId}`,
};

export default MILK_NOTES;
