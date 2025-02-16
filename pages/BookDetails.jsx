import { bookService } from "../services/book.service.js"

const {useState, useEffect} = React

export function BookDetails({onSelectBook, selectedBookId}) {

    const [book, setBook] = useState(null)

    useEffect(() => {
        loadBook()
    }, [book])

    function getBookLng(lng) {
        switch (lng) {
            case 'he':
                return 'Hebrew'
            case 'sp':
                return 'Spanish'
            default:
                return 'English'
        }
    }

    function getPublishDate() {
        const currYear = new Date().getFullYear()
        let publishedYear = book.publishedDate
        let diff = currYear - publishedYear
        if (diff > 10) publishedYear += ' - Vintage'
        else if (diff < 1) publishedYear += ' - NEW'
        return publishedYear
    }

    function getPageCount() {
        let pageCount = book.pageCount
        if (pageCount > 500) pageCount += ' - Long reading'
        else if (pageCount > 200) pageCount += ' - Descent reading'
        else if (pageCount < 100) pageCount += ' - Light reading'
        return pageCount
    }

    function getPriceColor() {
        let bookPrice = book.listPrice.amount
        if (bookPrice > 150) return 'price-red'
        else if (bookPrice < 20) return 'price-green'
        return ''
    }

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
            <p><strong>Published:</strong> {getPublishDate()}</p>
            <p><strong>Category:</strong> {book.categories.join(', ')}</p>
            <p><strong>Pages:</strong> {getPageCount()}</p>
            <p><strong>Language:</strong> {getBookLng(book.language)}</p>
            <p className={getPriceColor()}><strong>Price:</strong> {book.listPrice.amount} {book.listPrice.currencyCode}</p>
            {book.listPrice.isOnSale && <p className="sale">On Sale!</p>}

            <button onClick={() => onSelectBook(null)}>Back</button>
        </section>
    )
}