const renderTool = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/Tools')
    const data = await response.json()

    const toolContent = document.getElementById('tool-content')

    let tool
    if (data) {
        tool = data.find(tool => tool.id === requestedID)
    }

    if (tool) {
        document.getElementById('image').src = tool.image
        document.getElementById('name').textContent = tool.name
        document.getElementById('category').textContent = tool.category
        document.getElementById('pricing').textContent = 'Price: ' + tool.pricing
        document.getElementById('useCase').textContent = 'Great For: ' + tool.use_case
        document.getElementById('description').textContent = tool.description
        document.title = `AI Tool Hub - ${tool.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Tools Available 😞'
        giftContent.appendChild(message)
    }
}

renderTool()
