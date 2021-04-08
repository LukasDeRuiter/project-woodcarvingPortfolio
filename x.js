let selected
let somethingIsSelected = false;
let chosenModel;
let chosenModelCounter;
let imgOnScreen = document.getElementById('viewedImgID');

document.getElementById('humanModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(humansIcon, humanModels);
        selected = 1;
    } 
    else if(somethingIsSelected == true && selected != 1){   
        toFront(humansIcon, humanModels);
        backToStart(animalsIcon, animalModels, 5, 15);
        selected = 1;
    }
    else if(somethingIsSelected == true && selected == 1){   
        backToStart(humansIcon, humanModels, 5, 5);
        backToStart(animalsIcon, animalModels, 5, 15);
        somethingIsSelected = false;
    }
  })

  document.getElementById('animalModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(animalsIcon, animalModels);
        selected = 2;
    }
    else if(somethingIsSelected == true && selected != 2){   
        toFront(animalsIcon, animalModels);
         backToStart(humansIcon, humanModels, 5, 5);
         selected = 2;
    } 
    else if(somethingIsSelected == true && selected == 2){ 
        backToStart(animalsIcon, animalModels, 5, 15);
        backToStart(humansIcon, humanModels, 5, 5);
        somethingIsSelected = false;
    }
  })

let animalsIcon = document.getElementById('animalModelsContainerID');
let animalModels = document.getElementsByClassName("animalModels");

let humansIcon = document.getElementById('humanModelsContainerID');
let humanModels = document.getElementsByClassName("humanModels");



  function backToStart(chosenIcon, chosenModels, topAmount, leftAmount){
    chosenIcon.style.width = "86px";
    chosenIcon.style.height = "86px";
    chosenIcon.style.top = `${topAmount}%`;
    chosenIcon.style.left = `${leftAmount}%`;
    chosenIcon.style.marginTop = "-43px";
    chosenIcon.style.marginLeft = "-43px";
  let models = chosenModels;
  for(let i = 0; i < models.length; i++){
      models[i].style.display = "none";
  }
  chosenIcon.ontransitionend = function() {
      let models = chosenModels;
      for(let i = 0; i < models.length; i++){
          models[i].style.display = "none";
      }}}


      function toFront(chosenIcon, chosenModels){
        chosenIcon.style.width = "500px";
        chosenIcon.style.height = "500px";
        chosenIcon.style.top = "50%";
        chosenIcon.style.left = "50%";
        chosenIcon.style.marginTop = "-250px";
        chosenIcon.style.marginLeft = "-250px";
        chosenIcon.ontransitionend = function() {
    let models = chosenModels;
    for(let i = 0; i < models.length; i++){
        models[i].style.display = "block";
    }}}

    document.getElementById('model1ID').addEventListener('click', function(){
        chosenModel = 1;
        chosenModelCounter = 1;
    })
    document.getElementById('model2ID').addEventListener('click', function(){
        chosenModel = 2;
        chosenModelCounter = 1;
    })
    document.getElementById('model3ID').addEventListener('click', function(){
        chosenModel = 3;
        chosenModelCounter = 1;
    })

    document.querySelectorAll(".humanModels").forEach(humanModels => humanModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 1:
                imgOnScreen.src = "images/figures/figure1pic1.jpg";
                break;
            case 2:
                imgOnScreen.src = "images/figures/figure2pic1.jpg";
                break;
            case 3:
                imgOnScreen.src = "images/figures/figure3pic1.jpg";
                break;
    }
    }))

    document.getElementById('closeBtnID').addEventListener('click',function(){
        document.getElementById('imageViewerID').style.display = "none";
        document.getElementById('imageBackground').style.filter = "brightness(100%)";
    })


    document.getElementById("forwardsBtnID").addEventListener('click', function(){
        if(chosenModelCounter >= 0 && chosenModelCounter <= 3){ 
              chosenModelCounter += 1;
              imgOnScreen.src = `images/figures/figure${chosenModel}pic${chosenModelCounter}.jpg`;
        }
        else if (chosenModelCounter === 4){
            chosenModelCounter = 1;
            imgOnScreen.src = `images/figures/figure${chosenModel}pic${chosenModelCounter}.jpg`;
        }
    })


    document.getElementById("backwardsBtnID").addEventListener('click', function(){
        if(chosenModelCounter >= 2 && chosenModelCounter <= 4){ 
            chosenModelCounter -= 1;
            imgOnScreen.src = `images/figures/figure${chosenModel}pic${chosenModelCounter}.jpg`;
      }
      else if (chosenModelCounter === 1){
          chosenModelCounter = 4;
          imgOnScreen.src = `images/figures/figure${chosenModel}pic${chosenModelCounter}.jpg`;
      }
    })

    /*
  function animalsBackToStart(){
      animalsIcon = document.getElementById('animalModelsContainerID');
      animalsIcon.style.width = "86px";
      animalsIcon.style.height = "86px";
      animalsIcon.style.top = "5%";
      animalsIcon.style.left = "15%";
      animalsIcon.style.marginTop = "-43px";
      animalsIcon.style.marginLeft = "-43px";
    let models = document.getElementsByClassName("animalModels");
    for(let i = 0; i < models.length; i++){
        models[i].style.display = "none";
    }
    animalsIcon.ontransitionend = function() {
        let models = document.getElementsByClassName("animalModels");
        for(let i = 0; i < models.length; i++){
            models[i].style.display = "none";
        }}}

    function humansBackToStart(){
        humansIcon = document.getElementById('humanModelsContainerID');
        humansIcon.style.width = "86px";
        humansIcon.style.height = "86px";
        humansIcon.style.top = "5%";
        humansIcon.style.left = "5%";
        humansIcon.style.marginTop = "-43px";
        humansIcon.style.marginLeft = "-43px";
    let models = document.getElementsByClassName("humanModels");
    for(let i = 0; i < models.length; i++){
        models[i].style.display = "none";
    }
    humansIcon.ontransitionend = function() {
        let models = document.getElementsByClassName("humanModels");
        for(let i = 0; i < models.length; i++){
            models[i].style.display = "none";
        }}}

        function animalsToFront(){
            animalsIcon = document.getElementById('animalModelsContainerID');
            animalsIcon.style.width = "500px";
            animalsIcon.style.height = "500px";
            animalsIcon.style.top = "50%";
            animalsIcon.style.left = "50%";
            animalsIcon.style.marginTop = "-250px";
            animalsIcon.style.marginLeft = "-250px";
            animalsIcon.ontransitionend = function() {
        let models = document.getElementsByClassName("animalModels");
        for(let i = 0; i < models.length; i++){
            models[i].style.display = "block";
        }}}

        function humansToFront(){
            humansIcon = document.getElementById('humanModelsContainerID');
            humansIcon.style.width = "500px";
            humansIcon.style.height = "500px";
            humansIcon.style.top = "50%";
            humansIcon.style.left = "50%";
            humansIcon.style.marginTop = "-250px";
            humansIcon.style.marginLeft = "-250px";
            humansIcon.ontransitionend = function() {
        let models = document.getElementsByClassName("humanModels");
        for(let i = 0; i < models.length; i++){
            models[i].style.display = "block";
        }}}
        */