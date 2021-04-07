document.getElementById('humanModelsContainerID').addEventListener('mouseenter', function(){
    humanModelsContainerID.style.width = "500px";
    humanModelsContainerID.style.height = "500px";
    humanModelsContainerID.ontransitionend = function() {
    let models = document.getElementsByClassName("humanModels");
    for(let i = 0; i < models.length; i++){
        models[i].style.display = "flex";
    }
    }
  })
  
  
  document.getElementById('humanModelsContainerID').addEventListener('mouseleave', function(){
    humanModelsContainerID.style.width = "80px";
    humanModelsContainerID.style.height = "80px";
    let models = document.getElementsByClassName("humanModels");
    for(let i = 0; i < models.length; i++){
        models[i].style.display = "none";
    }
    humanModelsContainerID.ontransitionend = function() {
        let models = document.getElementsByClassName("humanModels");
        for(let i = 0; i < models.length; i++){
            models[i].style.display = "none";
        }}
      })