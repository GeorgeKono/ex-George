export function BookPreview({book}) {
    return (
        <section className="book-preview">
            <h2 className="book-card-title">{book.title}</h2>
            <img src={book.thumbnail} alt={book.title} className="book-card-thumbail"/>
            <div className="book-card-details">
                <p><strong>Pages:</strong> {book.pageCount}</p>
                <p><strong>Price:</strong> {book.listPrice.amount} {book.listPrice.currencyCode}</p>
                {book.listPrice.isOnSale && <p className="sale">On Sale!</p>}
            </div>
        </section>
    )
}