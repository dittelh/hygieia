function openMenu() {
    // Fjerner eller tilføjer en class, ved at toggle
    var links = document.getElementById("myLinks")
    links.classList.toggle("hideLinks")
    links.classList.toggle("showLinks")
}



// Funktion til at skifte mellem kundeudtalelser
var activeId = 0; 

function nextClient(){
  if(activeId !== 2){
    activeId = activeId + 1;
  } else {
    activeId = 0;
  }

  for (let i = 0; i < 3; i++){
    if(i == activeId){
      document.getElementById('client' + i).classList.add('clientActive');
    } else{
      document.getElementById('client' + i).classList.remove('clientActive')
    }
  }
}

function previousClient(){
  if(activeId !== 0){
    activeId = activeId - 1;
  } else {
    activeId = 2;
  }

  for (let i = 0; i < 3; i++){
    if(i == activeId){
      document.getElementById('client' + i).classList.add('clientActive');
    } else{
      document.getElementById('client' + i).classList.remove('clientActive')
    }
  }
}
