import { bookService } from "../services/book.service.js"

const {useState, useEffect} = React

export function BookDetails({onSelectBook, selectedBookId}) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        loadBook()
    }, [book])

    function loadBook() {
        bookService.get(selectedBookId).then(book => setBook(book))
    }

    if(!book) return 'Loading book..'

    return (
        <section className="book-preview">
            <img src={book.thumbnail} alt={book.title} />
            <h2>{book.title}</h2>
            <h3>{book.subtitle}</h3>
            <p><strong>Author(s):</strong> {book.authors.join(', ')}</p>
            <p><strong>Published:</strong> {book.publishedDate}</p>
            <p><strong>Category:</strong> {book.categories.join(', ')}</p>
            <p><strong>Pages:</strong> {book.pageCount}</p>
            <p><strong>Language:</strong> {book.language.toUpperCase()}</p>
            <p><strong>Price:</strong> {book.listPrice.amount} {book.listPrice.currencyCode}</p>
            {book.listPrice.isOnSale && <p className="sale">On Sale!</p>}

            <button onClick={() => onSelectBook(null)}>Back</button>
        </section>
    )
}