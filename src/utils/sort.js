export const sortByDate = (arr) => {
  return arr.slice().sort((a, b) => {
    const dateA = new Date(
      a.startDate.year,
      a.startDate.month - 1,
      parseInt(a.startDate.day, 10)
    );
    const dateB = new Date(
      b.startDate.year,
      b.startDate.month - 1,
      parseInt(b.startDate.day, 10)
    );
    return dateB.getTime() - dateA.getTime();
  });
};
