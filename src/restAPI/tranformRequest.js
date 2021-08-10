export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const toFormData = (requestData) => {
  const formData = new FormData();
  Object.entries(requestData).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((singleValue) => formData.append(key, singleValue));
    } else formData.append(key, value);
  });
  return formData;
};
