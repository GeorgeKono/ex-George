
const {useState, useEffect} = React

export function BookFilter({onUpdateFilter, filter}) {

    const [filterBy, setFilterBy] = useState({...filter})

    function onChangeFilter(ev) {
        let {type, name, value} = ev.target
        if(type === 'number') value = +value
        setFilterBy(prevFilterBy => ({...prevFilterBy, [name]: value}))
    }
    
    useEffect(() => {
        onUpdateFilter(filterBy)
    }, [filterBy])

    return (
        <section className="book-filter">
            <h1>book filter</h1>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={filterBy.title} name="title" onChange={onChangeFilter} />

                <label htmlFor="minPrice">Min price:</label>
                <input type="number" id="minPrice" value={filterBy.minPrice || ''} name="minPrice" onChange={onChangeFilter} />
        </section>
    )
}