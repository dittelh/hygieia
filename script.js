var showingMenu = false

function openMenu() {
  // Fjerner eller tilføjer en class, ved at toggle
  var links = document.getElementById("myLinks")
  links.classList.toggle("hideLinks")
  links.classList.toggle("showLinks")

  showingMenu = !showingMenu;
}

window.onclick = ((event) => {
  let classes = event.target.classList
  let isShowLinks = false
  let isMenu = false

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] == "showLinks"){
      isShowLinks = true
    }
    if (classes[i] == "menu-icon"){
      isMenu = true
    }
  }
  if (showingMenu && !isShowLinks && !isMenu) {
    openMenu()
  }
})

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



// Denne sektion af kode fra postman, som er et program til at arbejde med API'er, 
// som vi skal bruge til at hente instagram billeder ud af
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};



// Denne token skal udskiftes med en ny token hver 2. måned 
// Tokenet er fra d. 24 maj 2022
var token = "IGQVJWX0NGeEZAwV1B6UlBITGljTHhrZAy12Nzh5MzNxQUJIWnlVNGd4eG9NT3EteldzNEZAKRnBlSXVOR2xBTTl6YXgxYkNFRnhfWnNxcVNnNGc4U25rUEstLU90alppbzBNNGN4QVBNS1hvUFdZAdnpCWgZDZD"

fetch("https://graph.instagram.com/v13.0/me/media?fields=id,media_url,permalink&access_token="+token+"&limit=10", requestOptions)
  .then(response => response.text())
  .then(result => handleInstagramFeed(result))
  .catch(error => console.log('error', error));


  // JSON kode inspirationen kommer fra dette link:
  // https://www.w3schools.com/js/js_json_parse.asp?fbclid=IwAR0IdcBPxPTi2ceGQSZiBRf9BbA9d_7kaFbh1Q5UmfuQDJLmqx0Mu-4kt4g
  // d. 1/6/2022
function handleInstagramFeed(instagramFeed) {
  let feed = JSON.parse(instagramFeed).data
  let feedContainer = document.getElementById("feedContainer")

  for (let i = 0; i < feed.length; i++) {
    var newA = document.createElement("a")
    newA.href = feed[i].permalink
    newA.target = "_blank"
    newA.className = "instaA"
    newA.title = "Klik for at se Instagram billedet"
    feedContainer.appendChild(newA)
    


    var newImg = document.createElement("img")
    newImg.src = feed[i].media_url
    newImg.className = "instaImg"
    newA.appendChild(newImg)
  }
}