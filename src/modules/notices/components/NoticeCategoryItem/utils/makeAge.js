const makeAge = (petDate) => {
  const date = new Date(petDate);
  const currentDate = new Date();

  const yearDifference = currentDate.getFullYear() - date.getFullYear();
  const monthDifference = currentDate.getMonth() + 1 - (date.getMonth() + 1);

  if (yearDifference >= 1) {
    return yearDifference + " year";
  } else {
    return monthDifference + " month";
  }
};

export default makeAge;
