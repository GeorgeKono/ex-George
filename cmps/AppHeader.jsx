export function AppHeader({onSetPage}) {
    
    return (
        <header className="app-header full main-layout">
                <div className="logo" onClick={() => onSetPage('home')}>
                    <h1>Miss Books</h1>
                </div>

            <nav className="app-nav">
                <a onClick={() => onSetPage('home')} href="#">Home</a>
                <a onClick={() => onSetPage('about')} href="#">About</a>
                <a onClick={() => onSetPage('book')} href="#">Books</a>
            </nav>
        </header>
    )
}