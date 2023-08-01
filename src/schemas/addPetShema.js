import * as Yup from "yup";

export const addPetShema = Yup.object().shape({
  categories: Yup.string().required("Category is required"),
  //   location: Yup.string().when("categories", {
  //     is: (value) => ["sell", "for-free", "lost-found"].includes(value),
  //     then: Yup.string().required(
  //       'Location is required when category is "sell", "for-free", or "lost-found"'
  //     ),
  //   }),
  location: Yup.string().required(),
  name: Yup.string()
    .min(2, "Мінімум 2 символи")
    .max(16, "Максимум 16 символів")
    .required("Обовʼязкове поле"),
  type: Yup.string()
    .min(2, "Мінімум 2 символи")
    .max(16, "Максимум 16 символів")
    .required("Обовʼязкове поле"),

  sex: Yup.string()
    .oneOf(["male", "female"])
    .required("Оберіть один із типів (male або female)"),

  price: Yup.number().required("Обовʼязкове поле"),
  comments: Yup.string().max(120, "Максимум 120 символів"),

  //   date: Yup.date().required("Обовʼязкове поле"),
});

export const addPetShema2 = Yup.object().shape({
  categories: Yup.string().required("Category is required"),
  location: Yup.string(),
});
