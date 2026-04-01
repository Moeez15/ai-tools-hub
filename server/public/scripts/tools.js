const renderTools = async () => {
    
    const response = await fetch('/tools')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(tool => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${tool.image})`

            const name = document.createElement('h3')
            name.textContent = tool.name
            bottomContainer.appendChild(name)

            const category = document.createElement('p')
            category.textContent = tool.category
            bottomContainer.appendChild(category)

            const pricing = document.createElement('p')
            pricing.textContent = 'Price: ' + tool.pricing
            bottomContainer.appendChild(pricing)

            const useCase = document.createElement('p')
            useCase.textContent = tool.use_case
            bottomContainer.appendChild(useCase)

            const description = document.createElement('p')
            description.textContent = tool.description
            bottomContainer.appendChild(description)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/tools/${tool.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Tools Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderTools()
}