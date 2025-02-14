const { useState } = React

import { AppHeader } from './cmps/AppHeader.jsx'

import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

export function App() {
    const [page, setPage] = useState('book')

    function onSetPage(page) {
        setPage(page)
    }

    return (
        <section className="app">
            <header>
                <AppHeader onSetPage={onSetPage} />
            </header>

            <main className="main-layout">
                {page === 'home' && <Home onSetPage={onSetPage}/>}
                {page === 'about' && <About />}
                {page === 'book' && <BookIndex />}
            </main>
        </section>
    )
}
