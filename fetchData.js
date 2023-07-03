const booksContainer = document.querySelector('.books-container')


const fetchBook = async ()=>{
    const response = await fetch('http://localhost:8080')
    const data = await response.json()
    data.map(book => {
        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card')
        bookCard.innerHTML = `
            <div><img src="${book.image}"/></div>
            <h2>${book.title}</h2>
            ${book.genres.map(genre => `<p class="">${genre}</p>`).join('')}
        `

        booksContainer.appendChild(bookCard)
    })
    
}

fetchBook()