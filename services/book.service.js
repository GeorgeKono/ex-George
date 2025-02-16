import { storageService } from "./async-storage.service.js";
import { utilService } from "./util.service.js";
import { books as booksData} from "./books.js";

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
}

const BOOK_KEY = 'bookDB'

window.bs = bookService

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (!books || !books.length) {
                books = booksData
                utilService.saveToStorage(BOOK_KEY, books)
            }
            if (filterBy.title) {
                const regExp = new RegExp(filterBy.title, 'i')
                books = books.filter(book => regExp.test(book.title))
            }
            if (filterBy.minPrice) {
                books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
            }
            
            return books

        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    // return Promise.reject('Oh No!')
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', price = '') {
    return { title, price }
}

function getDefaultFilter() {
    return { title: '', minPrice: '' }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    
    if (!books || !books.length) {
        books = [
            _createBook('Harry Potter 1', 300),
            _createBook('Harry Potter 2', 120),
            _createBook('Harry Potter 3', 50),
            _createBook('Harry Potter 4', 150)
        ]
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, price = 250) {
    const book = getEmptyBook(title, price)
    book.id = utilService.makeId()
    return book
}