import React from "react";
import { useParams } from "react-router";
import { useRemoteService } from "../hooks";
import BookDetail from "./BookDetail";

const BookDetailContainer = () => {
  const { data } = useRemoteService(
    `http://localhost:8080/books/${useParams().id}`,
    {}
  );

  return (<BookDetail book={data} />);
};

export default BookDetailContainer;
