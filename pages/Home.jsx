export function Home({onSetPage}) {
    return (
        <section className="home main-layout">
            <div className="hero">
                <h1>Welcome to Miss Books</h1>
                <p>Your gateway to discovering amazing books! Browse, explore, and find your next favorite read.</p>
                <a href="#" className="btn" onClick={() => onSetPage('book')}>Explore Books</a>
            </div>

            <section className="features">
                <div className="feature">
                    <h2>📚 Huge Collection</h2>
                    <p>Discover thousands of books across all genres, from fiction to non-fiction.</p>
                </div>
                <div className="feature">
                    <h2>🔍 Easy Search</h2>
                    <p>Use our smart search and filtering options to find books that match your taste.</p>
                </div>
                <div className="feature">
                    <h2>💰 Best Prices</h2>
                    <p>Compare prices and get the best deals on your favorite books.</p>
                </div>
            </section>

            <section className="quote">
                <blockquote>"A reader lives a thousand lives before he dies." – George R.R. Martin</blockquote>
            </section>
        </section>
    )
}