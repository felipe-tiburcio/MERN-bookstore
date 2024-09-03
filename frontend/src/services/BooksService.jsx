import axios from "axios";

const booksApi = "http://localhost:3000/books";

export const getBooksData = async () => {
  const response = await axios.get(booksApi);

  return response.data.data;
};
