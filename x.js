let selected // I use this variable to determine if a selected bubblecontainer should go to the front, replace another one or be moved back
let somethingIsSelected = false; // I use this variable to determine if a selected bubblecontainer should go to the front, replace another one or be moved back
let chosenModel; //the specific model thats chosen by the user
let chosenModelCounter; // variable used to switch between pictures of the same model in the modelviewer
let imgOnScreen = document.getElementById('viewedImgID'); // When a model is chosen, the imgOnScreen.src is the one that the user views and the one that will be changed to switch images


/* The main bubblecontainers are animated here. Click on one, and they will either come to the middle, replace the one thats active or be sent back to the startposition  */

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

  /* Here I give the bubblecontainersID's variables, which I use with the functions described after this part to move them  */
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


/* these function are used to animate the bubblecontainers when they are clicked */
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

    /* different models give different numbers chosenmodel, which is used to identfy which images should be shown in the imageviewer  */

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
    document.getElementById('model4ID').addEventListener('click', function(){
        chosenModel = 4;
        chosenModelCounter = 1;
    })
    document.getElementById('model5ID').addEventListener('click', function(){
        chosenModel = 5;
        chosenModelCounter = 1;
    })
    document.getElementById('model6ID').addEventListener('click', function(){
        chosenModel = 6;
        chosenModelCounter = 1;
    })
    document.getElementById('model7ID').addEventListener('click', function(){
        chosenModel = 7;
        chosenModelCounter = 1;
    })
    document.getElementById('model8ID').addEventListener('click', function(){
        chosenModel = 8;
        chosenModelCounter = 1;
    })
    document.getElementById('model9ID').addEventListener('click', function(){
        chosenModel = 9;
        chosenModelCounter = 1;
    })
    document.getElementById('model10ID').addEventListener('click', function(){
        chosenModel = 10;
        chosenModelCounter = 1;
    })

    /*
    document.getElementById('model11ID').addEventListener('click', function(){
        chosenModel = 11;
        chosenModelCounter = 1;
    })
    document.getElementById('model12ID').addEventListener('click', function(){
        chosenModel = 12;
        chosenModelCounter = 1;
    })
    document.getElementById('model13ID').addEventListener('click', function(){
        chosenModel = 13;
        chosenModelCounter = 1;
    })
    document.getElementById('model14ID').addEventListener('click', function(){
        chosenModel = 14;
        chosenModelCounter = 1;
    })
    document.getElementById('model15ID').addEventListener('click', function(){
        chosenModel = 15;
        chosenModelCounter = 1;
    })
    document.getElementById('model16ID').addEventListener('click', function(){
        chosenModel = 16;
        chosenModelCounter = 1;
    })

    */

    /*
    document.getElementById('model17ID').addEventListener('click', function(){
        chosenModel = 17;
        chosenModelCounter = 1;
    })
    document.getElementById('model18ID').addEventListener('click', function(){
        chosenModel = 18;
        chosenModelCounter = 1;
    })
    document.getElementById('model19ID').addEventListener('click', function(){
        chosenModel = 19;
        chosenModelCounter = 1;
    })
    document.getElementById('model20ID').addEventListener('click', function(){
        chosenModel = 20;
        chosenModelCounter = 1;
    })
    document.getElementById('model21ID').addEventListener('click', function(){
        chosenModel = 21;
        chosenModelCounter = 1;
    })
    document.getElementById('model22ID').addEventListener('click', function(){
        chosenModel = 22;
        chosenModelCounter = 1;
    })
    document.getElementById('model23ID').addEventListener('click', function(){
        chosenModel = 23;
        chosenModelCounter = 1;
    })
    document.getElementById('model24ID').addEventListener('click', function(){
        chosenModel = 24;
        chosenModelCounter = 1;
    })

    */
    document.getElementById('model25ID').addEventListener('click', function(){
        chosenModel = 25;
        chosenModelCounter = 1;
    })
    document.getElementById('model26ID').addEventListener('click', function(){
        chosenModel = 26;
        chosenModelCounter = 1;
    })
    document.getElementById('model27ID').addEventListener('click', function(){
        chosenModel = 27;
        chosenModelCounter = 1;
    })
    document.getElementById('model28ID').addEventListener('click', function(){
        chosenModel = 28;
        chosenModelCounter = 1;
    })
    document.getElementById('model29ID').addEventListener('click', function(){
        chosenModel = 29;
        chosenModelCounter = 1;
    })
    document.getElementById('model30ID').addEventListener('click', function(){
        chosenModel = 30;
        chosenModelCounter = 1;
    })

    /*
    document.getElementById('model31ID').addEventListener('click', function(){
        chosenModel = 31;
        chosenModelCounter = 1;
    })
    document.getElementById('model32ID').addEventListener('click', function(){
        chosenModel = 32;
        chosenModelCounter = 1;
    })

    */
    document.getElementById('model33ID').addEventListener('click', function(){
        chosenModel = 33;
        chosenModelCounter = 1;
    })
    document.getElementById('model34ID').addEventListener('click', function(){
        chosenModel = 34;
        chosenModelCounter = 1;
    })
    document.getElementById('model35ID').addEventListener('click', function(){
        chosenModel = 35;
        chosenModelCounter = 1;
    })
    document.getElementById('model36ID').addEventListener('click', function(){
        chosenModel = 36;
        chosenModelCounter = 1;
    })
    document.getElementById('model37ID').addEventListener('click', function(){
        chosenModel = 37;
        chosenModelCounter = 1;
    })
    document.getElementById('model38ID').addEventListener('click', function(){
        chosenModel = 38;
        chosenModelCounter = 1;
    })
    document.getElementById('model39ID').addEventListener('click', function(){
        chosenModel = 39;
        chosenModelCounter = 1;
    })

    /*
    document.getElementById('model40ID').addEventListener('click', function(){
        chosenModel = 40;
        chosenModelCounter = 1;
    })

    */
    document.getElementById('model41ID').addEventListener('click', function(){
        chosenModel = 41;
        chosenModelCounter = 1;
    })
    document.getElementById('model42ID').addEventListener('click', function(){
        chosenModel = 42;
        chosenModelCounter = 1;
    })
    document.getElementById('model43ID').addEventListener('click', function(){
        chosenModel = 43;
        chosenModelCounter = 1;
    })
    document.getElementById('model44ID').addEventListener('click', function(){
        chosenModel = 44;
        chosenModelCounter = 1;
    })
    document.getElementById('model45ID').addEventListener('click', function(){
        chosenModel = 45;
        chosenModelCounter = 1;
    })

    /*
    document.getElementById('model46ID').addEventListener('click', function(){
        chosenModel = 46;
        chosenModelCounter = 1;
    })
    document.getElementById('model47ID').addEventListener('click', function(){
        chosenModel = 47;
        chosenModelCounter = 1;
    })
    document.getElementById('model48ID').addEventListener('click', function(){
        chosenModel = 48;
        chosenModelCounter = 1;
    })

    */
    document.getElementById('model49ID').addEventListener('click', function(){
        chosenModel = 49;
        chosenModelCounter = 1;
    })

    /*
    document.getElementById('model50ID').addEventListener('click', function(){
        chosenModel = 50;
        chosenModelCounter = 1;
    })
    document.getElementById('model51ID').addEventListener('click', function(){
        chosenModel = 51;
        chosenModelCounter = 1;
    })
    document.getElementById('model52ID').addEventListener('click', function(){
        chosenModel = 52;
        chosenModelCounter = 1;
    })
    document.getElementById('model53ID').addEventListener('click', function(){
        chosenModel = 53;
        chosenModelCounter = 1;
    })
    document.getElementById('model54ID').addEventListener('click', function(){
        chosenModel = 54;
        chosenModelCounter = 1;
    })
    document.getElementById('model55ID').addEventListener('click', function(){
        chosenModel = 55;
        chosenModelCounter = 1;
    })
    document.getElementById('model56ID').addEventListener('click', function(){
        chosenModel = 56;
        chosenModelCounter = 1;
    })

    */
    document.getElementById('model57ID').addEventListener('click', function(){
        chosenModel = 57;
        chosenModelCounter = 1;
    })
    document.getElementById('model58ID').addEventListener('click', function(){
        chosenModel = 58;
        chosenModelCounter = 1;
    })

    /*
    document.getElementById('model59ID').addEventListener('click', function(){
        chosenModel = 59;
        chosenModelCounter = 1;
    })
    document.getElementById('model60ID').addEventListener('click', function(){
        chosenModel = 60;
        chosenModelCounter = 1;
    })
    document.getElementById('model61ID').addEventListener('click', function(){
        chosenModel = 61;
        chosenModelCounter = 1;
    })
    document.getElementById('model62ID').addEventListener('click', function(){
        chosenModel = 62;
        chosenModelCounter = 1;
    })
    document.getElementById('model63ID').addEventListener('click', function(){
        chosenModel = 63;
        chosenModelCounter = 1;
    })
    document.getElementById('model64ID').addEventListener('click', function(){
        chosenModel = 64;
        chosenModelCounter = 1;
    })

    */
    document.getElementById('model65ID').addEventListener('click', function(){
        chosenModel = 65;
        chosenModelCounter = 1;
    })
    document.getElementById('model66ID').addEventListener('click', function(){
        chosenModel = 66;
        chosenModelCounter = 1;
    })

    /*
    document.getElementById('model67ID').addEventListener('click', function(){
        chosenModel = 67;
        chosenModelCounter = 1;
    })
    document.getElementById('model68ID').addEventListener('click', function(){
        chosenModel = 68;
        chosenModelCounter = 1;
    })
    document.getElementById('model69ID').addEventListener('click', function(){
        chosenModel = 69;
        chosenModelCounter = 1;
    })
    document.getElementById('model70ID').addEventListener('click', function(){
        chosenModel = 70;
        chosenModelCounter = 1;
    })
    document.getElementById('model71ID').addEventListener('click', function(){
        chosenModel = 71;
        chosenModelCounter = 1;
    })
    document.getElementById('model72ID').addEventListener('click', function(){
        chosenModel = 72;
        chosenModelCounter = 1;
    })

    */

    /*
    document.getElementById('model73ID').addEventListener('click', function(){
        chosenModel = 73;
        chosenModelCounter = 1;
    })
    document.getElementById('model74ID').addEventListener('click', function(){
        chosenModel = 74;
        chosenModelCounter = 1;
    })
    document.getElementById('model75ID').addEventListener('click', function(){
        chosenModel = 75;
        chosenModelCounter = 1;
    })
    document.getElementById('model76ID').addEventListener('click', function(){
        chosenModel = 76;
        chosenModelCounter = 1;
    })
    document.getElementById('model77ID').addEventListener('click', function(){
        chosenModel = 77;
        chosenModelCounter = 1;
    })
    document.getElementById('model78ID').addEventListener('click', function(){
        chosenModel = 78;
        chosenModelCounter = 1;
    })
    document.getElementById('model79ID').addEventListener('click', function(){
        chosenModel = 79;
        chosenModelCounter = 1;
    })
    document.getElementById('model80ID').addEventListener('click', function(){
        chosenModel = 80;
        chosenModelCounter = 1;
    })

    */


    /* when clicking on the individual models inside the bubbles, here we make the imageviewer appear depending on which model the user selects   */

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
            case 4:
                imgOnScreen.src = "images/figures/figure4pic1.jpg";
                break;
            case 5:
                imgOnScreen.src = "images/figures/figure5pic1.jpg";
                break;
            case 6:
                imgOnScreen.src = "images/figures/figure6pic1.jpg";
                break;
            case 7:
                imgOnScreen.src = "images/figures/figure7pic1.jpg";
                break;
            case 8:
                imgOnScreen.src = "images/figures/figure8pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".animalModels").forEach(animalModels => animalModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 9:
                imgOnScreen.src = "images/figures/figure9pic1.jpg";
                break;
            case 10:
                imgOnScreen.src = "images/figures/figure10pic1.jpg";
                break;
            case 11:
                imgOnScreen.src = "images/figures/figure11pic1.jpg";
                break;
            case 12:
                imgOnScreen.src = "images/figures/figure12pic1.jpg";
                break;
            case 13:
                imgOnScreen.src = "images/figures/figure13pic1.jpg";
                break;
            case 14:
                imgOnScreen.src = "images/figures/figure14pic1.jpg";
                break;
            case 15:
                imgOnScreen.src = "images/figures/figure15pic1.jpg";
                break;
            case 16:
                imgOnScreen.src = "images/figures/figure16pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".miniatureModels").forEach(miniatureModels => miniatureModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 17:
                imgOnScreen.src = "images/figures/figure17pic1.jpg";
                break;
            case 18:
                imgOnScreen.src = "images/figures/figure18pic1.jpg";
                break;
            case 19:
                imgOnScreen.src = "images/figures/figure19pic1.jpg";
                break;
            case 20:
                imgOnScreen.src = "images/figures/figure20pic1.jpg";
                break;
            case 21:
                imgOnScreen.src = "images/figures/figure21pic1.jpg";
                break;
            case 22:
                imgOnScreen.src = "images/figures/figure22pic1.jpg";
                break;
            case 23:
                imgOnScreen.src = "images/figures/figure23pic1.jpg";
                break;
            case 24:
                imgOnScreen.src = "images/figures/figure24pic1.jpg";
                break;
    }
    }))


    document.querySelectorAll(".wowModels").forEach(wowModels => wowModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 25:
                imgOnScreen.src = "images/figures/figure25pic1.jpg";
                break;
            case 26:
                imgOnScreen.src = "images/figures/figure26pic1.jpg";
                break;
            case 27:
                imgOnScreen.src = "images/figures/figure27pic1.jpg";
                break;
            case 28:
                imgOnScreen.src = "images/figures/figure28pic1.jpg";
                break;
            case 29:
                imgOnScreen.src = "images/figures/figure29pic1.jpg";
                break;
            case 30:
                imgOnScreen.src = "images/figures/figure30pic1.jpg";
                break;
            case 31:
                imgOnScreen.src = "images/figures/figure31pic1.jpg";
                break;
            case 32:
                imgOnScreen.src = "images/figures/figure32pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".pokemonModels").forEach(pokemonModels => pokemonModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 33:
                imgOnScreen.src = "images/figures/figure33pic1.jpg";
                break;
            case 34:
                imgOnScreen.src = "images/figures/figure34pic1.jpg";
                break;
            case 35:
                imgOnScreen.src = "images/figures/figure35pic1.jpg";
                break;
            case 36:
                imgOnScreen.src = "images/figures/figure36pic1.jpg";
                break;
            case 37:
                imgOnScreen.src = "images/figures/figure37pic1.jpg";
                break;
            case 38:
                imgOnScreen.src = "images/figures/figure38pic1.jpg";
                break;
            case 39:
                imgOnScreen.src = "images/figures/figure39pic1.jpg";
                break;
            case 40:
                imgOnScreen.src = "images/figures/figure40pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".zeldaModels").forEach(zeldaModels => zeldaModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 41:
                imgOnScreen.src = "images/figures/figure41pic1.jpg";
                break;
            case 42:
                imgOnScreen.src = "images/figures/figure42pic1.jpg";
                break;
            case 43:
                imgOnScreen.src = "images/figures/figure43pic1.jpg";
                break;
            case 44:
                imgOnScreen.src = "images/figures/figure44pic1.jpg";
                break;
            case 45:
                imgOnScreen.src = "images/figures/figure45pic1.jpg";
                break;
            case 46:
                imgOnScreen.src = "images/figures/figure46pic1.jpg";
                break;
            case 47:
                imgOnScreen.src = "images/figures/figure47pic1.jpg";
                break;
            case 48:
                imgOnScreen.src = "images/figures/figure48pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".runescapeModels").forEach(runescapeModels => runescapeModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 49:
                imgOnScreen.src = "images/figures/figure49pic1.jpg";
                break;
            case 50:
                imgOnScreen.src = "images/figures/figure50pic1.jpg";
                break;
            case 51:
                imgOnScreen.src = "images/figures/figure51pic1.jpg";
                break;
            case 52:
                imgOnScreen.src = "images/figures/figure52pic1.jpg";
                break;
            case 53:
                imgOnScreen.src = "images/figures/figure53pic1.jpg";
                break;
            case 54:
                imgOnScreen.src = "images/figures/figure54pic1.jpg";
                break;
            case 55:
                imgOnScreen.src = "images/figures/figure55pic1.jpg";
                break;
            case 56:
                imgOnScreen.src = "images/figures/figure56pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".otherModels").forEach(otherModels => otherModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 57:
                imgOnScreen.src = "images/figures/figure57pic1.jpg";
                break;
            case 58:
                imgOnScreen.src = "images/figures/figure58pic1.jpg";
                break;
            case 59:
                imgOnScreen.src = "images/figures/figure59pic1.jpg";
                break;
            case 60:
                imgOnScreen.src = "images/figures/figure60pic1.jpg";
                break;
            case 61:
                imgOnScreen.src = "images/figures/figure61pic1.jpg";
                break;
            case 62:
                imgOnScreen.src = "images/figures/figure62pic1.jpg";
                break;
            case 63:
                imgOnScreen.src = "images/figures/figure63pic1.jpg";
                break;
            case 64:
                imgOnScreen.src = "images/figures/figure64pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".human2Models").forEach(human2Models => human2Models.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 65:
                imgOnScreen.src = "images/figures/figure65pic1.jpg";
                break;
            case 66:
                imgOnScreen.src = "images/figures/figure66pic1.jpg";
                break;
            case 67:
                imgOnScreen.src = "images/figures/figure67pic1.jpg";
                break;
            case 68:
                imgOnScreen.src = "images/figures/figure68pic1.jpg";
                break;
            case 69:
                imgOnScreen.src = "images/figures/figure69pic1.jpg";
                break;
            case 70:
                imgOnScreen.src = "images/figures/figure70pic1.jpg";
                break;
            case 71:
                imgOnScreen.src = "images/figures/figure71pic1.jpg";
                break;
            case 72:
                imgOnScreen.src = "images/figures/figure72pic1.jpg";
                break;
    }
    }))

    document.querySelectorAll(".armyModels").forEach(armyModels => armyModels.addEventListener('click', function(event){
        event.stopPropagation();
        document.getElementById('imageViewerID').style.display = "flex";
        document.getElementById('imageBackground').style.filter = "brightness(50%)";
        switch(chosenModel){
            case 73:
                imgOnScreen.src = "images/figures/figure73pic1.jpg";
                break;
            case 74:
                imgOnScreen.src = "images/figures/figure74pic1.jpg";
                break;
            case 75:
                imgOnScreen.src = "images/figures/figure75pic1.jpg";
                break;
            case 76:
                imgOnScreen.src = "images/figures/figure76pic1.jpg";
                break;
            case 77:
                imgOnScreen.src = "images/figures/figure77pic1.jpg";
                break;
            case 78:
                imgOnScreen.src = "images/figures/figure78pic1.jpg";
                break;
            case 79:
                imgOnScreen.src = "images/figures/figure79pic1.jpg";
                break;
            case 80:
                imgOnScreen.src = "images/figures/figure80pic1.jpg";
                break;
    }
    }))


    /* close and navigation buttons when viewing images  */
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