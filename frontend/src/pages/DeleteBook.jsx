import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);

    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        enqueueSnackbar("Book removed successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        enqueueSnackbar(
          "Some error has occurred. Please check console for more information.",
          { variant: "error" }
        );
        console.log(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3>Do you really want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full rounded-md"
          onClick={handleDeleteBook}
        >
          Yes, delete it.
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
