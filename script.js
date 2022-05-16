var header = document.getElementById("headerIcons")
var headerLinks = document.getElementById("myLinks")
var showingMenu = false;

function openMenu() {
  if(window.innerWidth < 993 ){

    // Fjerner eller tilføjer en class, ved at toggle
    var links = document.getElementById("myLinks")
    links.classList.toggle("hideLinks")
    links.classList.toggle("showLinks")
    // Sætter showingMenu til at være det modsatte af hvad den er
    // Når siden reloader, vil den starte på false pga. den er sat til det på linje 4
    showingMenu = !showingMenu;
    // Hvis headerTop har samme værdi som window.pageYOffset, så sætter den bl.a. en baggrundsfarve på eller fjerner
    // Den skal kun toggle den déroppe, fordi den ingen baggrundsfarve har i toppen, men det får den når man scroller, også skal den ikke toggle
    if(headerTop == window.pageYOffset){
      header.classList.toggle("headerShowMenu")
    }
  }
}