import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "./BookDetails.jsx"

const { useState, useEffect, useRef } = React
 
export function BookIndex() {
    
    const [books, setBooks] = useState(null)
    const [filter, setFilter] = useState(bookService.getDefaultFilter())
    const [selectedBookId, setSelectedBookId] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [filter])

    function loadBooks() {
        bookService.query(filter).then(books => {
            setBooks(books)
        })
    }
    
    function onSelectBook(bookId) {
        setSelectedBookId(bookId)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => 
        setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId)))
    }

    if (!books) return 'Loading data...'

    return (
        <section className="book-index">
            {selectedBookId ? <BookDetails onSelectBook={onSelectBook} selectedBookId={selectedBookId} /> :
            <BookList books = {books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} />}
        </section>
    )
}