let selected
let somethingIsSelected = false;

document.getElementById('humanModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        humansToFront();
        selected = 1;
    } 
    else if(somethingIsSelected == true && selected != 1){   
        humansToFront();
        animalsBackToStart();
        selected = 1;
    }
    else if(somethingIsSelected == true && selected == 1){   
        humansBackToStart();
        animalsBackToStart();
        somethingIsSelected = false;
    }
  })

  document.getElementById('animalModelsContainerID').addEventListener('click', function(){
    if(somethingIsSelected == false){
        somethingIsSelected = true;
        animalsToFront();
        selected = 2;
    }
    else if(somethingIsSelected == true && selected != 2){   
         animalsToFront();
         humansBackToStart();
         selected = 2;
    } 
    else if(somethingIsSelected == true && selected == 2){ 
        animalsBackToStart();
        humansBackToStart(); 
        somethingIsSelected = false;
    }
  })





    
  
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