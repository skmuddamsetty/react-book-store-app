// get Visible Books
export const getVisibleBooks = (
  books,
  { text, sortBy, startDate, endDate }
) => {
  return books
    .filter(book => {
      const startDateMatch =
        typeof startDate !== 'number' || book.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || books.createdAt <= endDate;
      const textMatch = book.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'price') {
        return a.price < b.price ? -1 : 1;
      } else {
        return 0;
      }
    });
};
