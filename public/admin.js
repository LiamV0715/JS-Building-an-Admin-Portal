async function main() {
    const response = await fetch('http://localhost:3000/listBooks')
    const data = await response.json()
    data.forEach(book => renderInput(book))
}

 

function renderInput(book) {
    const root = document.getElementById('root')
    const li = document.createElement('li')

    li.textContent = book.title

    const input = document.createElement('input')
    input.value = book.quantity

    const saveBtn = document.createElement('button')
    saveBtn.textContent = 'Save'

    function renderInput(book) {

        const root = document.getElementById('root')
        const li = document.createElement('li')
    
        li.textContent = book.title
        const input = document.createElement('input')
    
        input.value = book.quantity
        const saveBtn = document.createElement('button')
    
        saveBtn.textContent = 'Save'
        saveBtn.addEventListener('click', async function() {
            await fetch('http://localhost:3000/updateBook', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
    
                body: JSON.stringify({
                    id: book.id,
                    quantity: input.value
                })
            })
        })
    
     
        li.append(input, saveBtn)
        root.append(li)
    
    }

    li.append(input, saveBtn)
    root.append(li)
}

 

main()

