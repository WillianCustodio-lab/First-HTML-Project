function toggleMode() {
  const html =
    document.documentElement /*constante html armaz uma referencia direta para o elemento <html> da p�gina*/

  /*Altera o tema da p�gina
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  //Todo o comando pode ser convertido em:
  html.classList.toggle("light")

  //alterar foto do profile
  //pegar a tag primeiramente
  const img = document.querySelector("#profile img")

  //altera��o
  if (html.classList.contains("light")) {
    //se tiver light, add imagem do light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito de �culos escuros em um fundo colorido"
    )
  } else {
    //se tiver dark, mantem imagem do dark
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito de oculos claro em um fundo colorido"
    )
  }
}
