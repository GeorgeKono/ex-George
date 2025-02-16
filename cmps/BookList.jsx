import { BookPreview } from "./BookPreview.jsx"

export function BookList({books, onRemoveBook, onSelectBook}) {
    return (
        <section className="book-list">
            <ul>
                {books.map(book => 
                <li key={book.id} className="book-card">
                    <BookPreview book = {book}/>

                    <div className="book-card-buttons">
                        <button onClick={() => onSelectBook(book.id)}>Details</button>
                        <button onClick={() => onRemoveBook(book.id)}>Delete</button>
                    </div>
                </li>)}
            </ul>
        </section>
    )
}