function newImage(link, left, bottom){
    let picture = document.createElement('img')
    picture.src = url
    picture.style.position = 'fixed'
    picture.style.left = '100px'
    picture.style.bottom = '100px'
    document.body.append(picture)
    return picture
}

let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)

let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
