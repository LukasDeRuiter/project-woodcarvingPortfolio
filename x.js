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
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        selected = 1;
    }
    else if(somethingIsSelected == true && selected == 1){   
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
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
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 2;
    } 
    else if(somethingIsSelected == true && selected == 2){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

  document.getElementById('miniatureModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(miniatureIcon, miniatureModels);
        selected = 3;
    }
    else if(somethingIsSelected == true && selected != 3){   
        toFront(miniatureIcon, miniatureModels);
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 3;
    } 
    else if(somethingIsSelected == true && selected == 3){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

  document.getElementById('wowModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(wowIcon, wowModels);
        selected = 4;
    }
    else if(somethingIsSelected == true && selected != 4){   
        toFront(wowIcon, wowModels);
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 4;
    } 
    else if(somethingIsSelected == true && selected == 4){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

  document.getElementById('pokemonModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(pokemonIcon, pokemonModels);
        selected = 5;
    }
    else if(somethingIsSelected == true && selected != 5){   
        toFront(pokemonIcon, pokemonModels);
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 5;
    } 
    else if(somethingIsSelected == true && selected == 5){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })


  document.getElementById('zeldaModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(zeldaIcon, zeldaModels);
        selected = 6;
    }
    else if(somethingIsSelected == true && selected != 6){ 
        toFront(zeldaIcon, zeldaModels);  
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 6;
    } 
    else if(somethingIsSelected == true && selected == 6){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

  document.getElementById('runescapeModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(runescapeIcon, runescapeModels);
        selected = 7;
    }
    else if(somethingIsSelected == true && selected != 7){   
        toFront(runescapeIcon, runescapeModels);
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 7;
    } 
    else if(somethingIsSelected == true && selected == 7){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

  document.getElementById('otherModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(otherIcon, otherModels);
        selected = 8;
    }
    else if(somethingIsSelected == true && selected != 8){   
        toFront(otherIcon, otherModels);
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 8;
    } 
    else if(somethingIsSelected == true && selected == 8){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

  document.getElementById('human2ModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(humans2Icon, human2Models);
        selected = 9;
    }
    else if(somethingIsSelected == true && selected != 9){   
        toFront(humans2Icon, human2Models);
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(armyIcon, armyModels, 90, 70);
         selected = 9;
    } 
    else if(somethingIsSelected == true && selected == 9){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

  document.getElementById('armyModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        toFront(armyIcon, armyModels);
        selected = 10;
    }
    else if(somethingIsSelected == true && selected != 10){  
        toFront(armyIcon, armyModels); 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
         selected = 10;
    } 
    else if(somethingIsSelected == true && selected == 10){ 
        backToStart(humansIcon, humanModels, 10, 30);
        backToStart(animalsIcon, animalModels, 30, 20);
        backToStart(miniatureIcon, miniatureModels, 50, 10);
        backToStart(wowIcon, wowModels, 70, 20);
        backToStart(pokemonIcon,pokemonModels, 90, 30);
        backToStart(zeldaIcon, zeldaModels, 10, 70);
        backToStart(runescapeIcon, runescapeModels, 30, 80);
        backToStart(otherIcon, otherModels, 50, 90);
        backToStart(humans2Icon, human2Models, 70, 80);
        backToStart(armyIcon, armyModels, 90, 70);
        somethingIsSelected = false;
    }
  })

let animalsIcon = document.getElementById('animalModelsContainerID');
let animalModels = document.getElementsByClassName("animalModels");

let humansIcon = document.getElementById('humanModelsContainerID');
let humanModels = document.getElementsByClassName("humanModels");

let miniatureIcon = document.getElementById('miniatureModelsContainerID');
let miniatureModels = document.getElementsByClassName("miniatureModels");

let wowIcon = document.getElementById('wowModelsContainerID');
let wowModels = document.getElementsByClassName("wowModels");

let pokemonIcon = document.getElementById('pokemonModelsContainerID');
let pokemonModels = document.getElementsByClassName("pokemonModels");

let zeldaIcon = document.getElementById('zeldaModelsContainerID');
let zeldaModels = document.getElementsByClassName("zeldaModels");

let runescapeIcon = document.getElementById('runescapeModelsContainerID');
let runescapeModels = document.getElementsByClassName("runescapeModels");

let otherIcon = document.getElementById('otherModelsContainerID');
let otherModels = document.getElementsByClassName("otherModels");

let humans2Icon = document.getElementById('human2ModelsContainerID');
let human2Models = document.getElementsByClassName("human2Models");

let armyIcon = document.getElementById('armyModelsContainerID');
let armyModels = document.getElementsByClassName("armyModels");



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