import { BookPreview } from "./BookPreview.jsx"

export function BookList({books, onRemoveBook, onSelectBook}) {
    return (
        <section className="book-list">
            <ul>
                {books.map(book => 
                <li key={book.id}>
                    <BookPreview book = {book}/>
                    <button onClick={() => onRemoveBook(book.id)}>Delete</button>
                    <button onClick={() => onSelectBook(book.id)}>Details</button>
                </li>)}
            </ul>
        </section>
    )
}