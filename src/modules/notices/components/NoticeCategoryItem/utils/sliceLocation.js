const sliceLocation = (location) => {
  if (location.length > 4) {
    return location.slice(0, 4) + "...";
  } else {
    return location;
  }
};

export default sliceLocation;
