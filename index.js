var k = "";


    var score = document.getElementById("input");

    function onBtnClick(n){
      
      
      k += n;

      score.value = k
      console.log(score.value)
      
      

    }

    var min = document.getElementById("min_inner");
    var max = document.getElementById("max_inner");

    function onEnter(){

      k=""



      if(min.innerText.length == 0 && max.innerText.length == 0){
        min.innerText = score.value;
        max.innerText = score.value;


      }
      else if(min.innerText.length > 0 && max.innerText.length > 0){
        if(parseInt(score.value) < parseInt(min.innerText)){
          min.innerText = score.value;
        }
        else if(parseInt(score.value) > parseInt(max.innerText)){
          max.innerText = score.value;
          
        }
      }  

      score.value = ""

    }