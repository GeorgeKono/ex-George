import { AppHeader } from "./cmps/AppHeader.jsx"
import { About } from "./pages/About.jsx"
import { Home } from "./pages/Home.jsx"
import { BookIndex } from "./pages/BookIndex.jsx"

const { useState } = React

export function App() {

    const [page, setPage] = useState('home')

    function onSetPage(page) {
        setPage(page)
    }

    return (
        <section className="app">
            <AppHeader onSetPage={onSetPage}/>

            <main className="main-layout">
                {page === 'home' && <Home onSetPage={onSetPage}/>}
                {page === 'about' && <About />}
                {page === 'book' && <BookIndex />}
            </main>
        </section>
    )
}