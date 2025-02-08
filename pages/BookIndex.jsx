import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"

const { useState, useEffect, useRef } = React
 
export function BookIndex() {
    
    const [books, setBooks] = useState(null)
    const [filter, setFilter] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filter])

    function loadBooks() {
        bookService.query(filter).then(books => {
            setBooks(books)
        })
    }
    
    if (!books) return 'Loading data...'

    return (
        <section className="book-index">
            <BookList books = {books} />
        </section>
    )
}