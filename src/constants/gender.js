const GENDER_LABEL = {
  MALE: "Bé trai",
  FEMALE: "Bé gái",
  UNKNOWN: "Chưa xác định",
};

const GENDER_MAPPING = {
  1: GENDER_LABEL.FEMALE,
  2: GENDER_LABEL.MALE,
  0: GENDER_LABEL.UNKNOWN,
};

export default { GENDER_LABEL, GENDER_MAPPING };
