
function openAnswer(id){

    var answer = document.getElementById("answer" + id);
    answer.classList.toggle("hideAnswer");
    answer.classList.toggle("answerSection");

    var img = document.getElementById("img" + id);
    if(answer.classList.contains("answerSection")){
        img.src = "../assets/img/minus.svg";
    }else {
        img.src = "../assets/img/plus.svg";
    }
}