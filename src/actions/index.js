export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property, and sometimes contains a payload.
  // Payload further describes the conditions of the action being created
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
