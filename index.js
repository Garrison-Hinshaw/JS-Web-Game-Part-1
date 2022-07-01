function newImage(link, left, bottom){
    let image = document.createElement('img')
    image.src = link
    image.style.position = 'fixed'
    image.style.left = left + 'px'
    image.style.bottom = bottom + 'px'
    document.body.append(image)
    return image
}

function newItem(link, left, bottom){
    let image = newImage(link, left, bottom)

    link.addEventListener('dblclick', ()=> {
        link.remove()
    })
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 300);
newImage('assets/well.png', 500, 425);
newItem('assets/sword.png', 500, 405);
newItem('assets/shield.png', 165, 185);
newItem('assets/staff.png', 600, 100);
