import { BookFilter } from "../cmps/BookFilter.jsx"
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
        bookService.remove(bookId)
            .then(() => setBooks(prevBooks => 
                prevBooks.filter(book => book.id !== bookId)))
    }

    function onUpdateFilter(filter) {
        setFilter(filter)
    }

    if (!books) return 'Loading data...'

    return (
        <section className="book-index">
            {selectedBookId ? (
                <BookDetails onSelectBook={onSelectBook} selectedBookId={selectedBookId} />
            ) : ( 
                <React.Fragment>
                    <BookFilter onUpdateFilter = {onUpdateFilter} filter={filter} />
                    {books.length > 0 ? (
                        <BookList books = {books} onRemoveBook={onRemoveBook} onSelectBook={onSelectBook} /> 
                    ) : (
                        <div>No books found...</div>
                    )}
                </React.Fragment>
            )}
        </section>
    )
}