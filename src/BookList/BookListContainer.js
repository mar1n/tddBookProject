import React from "react";
import BookList from "./BookList";
import { useRemoteService } from "../hooks";

const BookListContainer = () => {
    const { data, loading, error } = useRemoteService(`http://localhost:8080/books`,[]);
    
    if(loading) {
        return <p>LOADING...</p>
    }
    if(error) {
        return <p>ERROR...</p>
    }

    return <BookList books={data} loading={loading} error={error} />
}

export default BookListContainer;