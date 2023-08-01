import * as Yup from "yup";

export const addPetShema = Yup.object().shape({
  categories: Yup.string()
    .oneOf(["sell", "lost-found", "in-good-hands", "your-pet"])
    .required("Поле categories обов'язкове"),

  name: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(16, "Maximum 16 characters")
    .required("Name is required field"),

  // date: Yup.string()
  //   .required("Поле date обов'язкове")
  //   .matches(
  //     /^(0[1-9]|[1-2]\d|3[0-1])-(0[1-9]|1[0-2])-\d{4}$/,
  //     "Use date format DD-MM-YYYY"
  //   ),

  type: Yup.string()
    .min(2, "Minimum 2 characters")
    .max(16, "Maximum 16 characters")
    .required("Type is required field"),

  // file: Yup.mixed()
  //   .required("Required field")
  //   .test(
  //     "fileSize",
  //     "Розмір файлу повинен бути до 3 МБ",
  //     (value) => {
  //       console.log(value.size);
  //       return value && value.size <= 3 * 1024 * 1024;
  //     } // 3 MB в байтах
  //   ),

  sex: Yup.string().when("categories", (categories, field) => {
    return categories == "sell" ||
      categories == "in-good-hands" ||
      categories == "lost-found"
      ? field.oneOf(["male", "female"]).required("Required field")
      : field.nullable(true);
  }),

  location: Yup.string().when("categories", (categories, field) => {
    return categories == "sell" ||
      categories == "in-good-hands" ||
      categories == "lost-found"
      ? field.required(
          "Location is required when category is sell, in-good-hands, or lost-found"
        )
      : field.nullable(true);
  }),

  price: Yup.number().when("categories", (categories, field) => {
    return categories == "sell"
      ? field.required("Price is required when category is sell")
      : field.nullable(true);
  }),

  comments: Yup.string().max(120, "Максимум 120 символів"),
});
