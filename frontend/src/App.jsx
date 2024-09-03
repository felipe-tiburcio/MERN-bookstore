import { Routes, Route } from "react-router-dom";
import SaveBook from "./pages/SaveBook";
import UpdateBook from "./pages/UpdateBook";
import DeleteBook from "./pages/DeleteBook";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/save" element={<SaveBook />} />
      <Route path="/books/details/:id" element={<BookDetails />} />
      <Route path="/books/update/:id" element={<UpdateBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  );
};

export default App;
