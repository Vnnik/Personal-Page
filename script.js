function toggleMode(){
    const html = document.documentElement

    if(html.classList.contains('light')){
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    }

    // substituiur a imagem //
    const img = document.querySelector("#profile img")

    // se tiver light mode adicionar imagem light//
    if (html.classList.contains("light")){
        img.setAttribute("src", "./assets/avatar-light.png")
    }
    // se tiver sem light manter imagem origianl//
    else{
        img.setAttribute("src", "./assets/avatar dark.png")
    }
   




}

