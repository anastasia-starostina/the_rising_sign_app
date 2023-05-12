function getToday() {
  const date = new Date();

  let day = date.getDate();
  console.log(day)
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let newMonth;
    // If the day or month is less than 10, add a 0 to the front of the number.
    if (day < 10) {
        day = Number(`0${day}`);
    }
    if (month < 10) {
        newMonth = `0${month}`;}

  // This arrangement can be altered based on how we want the date's format to appear.
  let currentDate = `${newMonth}-${day}-${year}`;
  return currentDate; // "17-6-2022"
}

export default getToday;