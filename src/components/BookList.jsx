import { useState, useEffect } from 'react';

export const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/books/')
        .then(response => response.json())
        .then(data => setBooks(data))
    },[])

    return (
        <>
            {books?.map((book, index) => {
                return (
                    <ul key={index}>
                        <li>{book.title}</li> 
                        <li>By: {book.author}</li>
                        <li>{book.description}</li>
                    </ul>
                )
            })}
        </>
    )
}