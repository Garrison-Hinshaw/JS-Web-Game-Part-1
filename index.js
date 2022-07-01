function newImage(link, left, bottom){
    let image = document.createElement('img')
    image.src = link
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}


newImage('assets/green-character.gif', 100, 100)

newImage('assets/pine-tree.png', 450, 200)

