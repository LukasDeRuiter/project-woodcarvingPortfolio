document.getElementById('humanModelsContainerID').addEventListener('mouseenter', function(){
    humanModelsContainerID.style.width = "500px";
    humanModelsContainerID.style.height = "500px";
    humanModelsContainerID.style.top = "5%";
    humanModelsContainerID.ontransitionend = function() {
    let models = document.getElementsByClassName("humanModels");
    for(let i = 0; i < models.length; i++){
        models[i].style.display = "block";
    }
    }
  })
  
  
  document.getElementById('humanModelsContainerID').addEventListener('mouseleave', function(){
    humanModelsContainerID.style.width = "86px";
    humanModelsContainerID.style.height = "86px";
    humanModelsContainerID.style.top = "20%";
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