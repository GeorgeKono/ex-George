export function BookPreview({book}) {
    return (
        <section className="book-preview">
            <img src={book.thumbnail} alt={book.title} />
            <h2>{book.title}</h2>
            <p><strong>Pages:</strong> {book.pageCount}</p>
            <p><strong>Price:</strong> {book.listPrice.amount} {book.listPrice.currencyCode}</p>
            {book.listPrice.isOnSale && <p className="sale">On Sale!</p>}
        </section>
    )
}