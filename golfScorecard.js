    // assign the table row for hole 1 to a variable
    //var elem
    //  = document.getElementById("1");
    // display the number of children (all td elements)
    //console.log(elem.children.length);
    // display the content of the + button, which is the first child of the fifth element
    //console.log(elem.children[4].children[0]); 
    // assign a function to the + button
    //elem.children[4].children[0].onclick 
     // = function(){add1(elem);};
    //elem.children[4].children[1].onclick 
      //= function(){subtract1(elem);};
    
    // you don't have to define the function before you use it! 
    //rounds array set up
    // 0 : month, date, year, number
    //1- 18: hole, par, score, over 
    function add1 (num) {
      var cards = JSON.parse(localStorage.getItem("cards"));
        var pars = JSON.parse(localStorage.getItem("pars"));
    var x = document.getElementById(num);
    //add up all other scores for same hole in other cards store in havg variable
    var havg = 0.00;
    var numOfRounds = 0.00;
    if(cards != null){
    for(var i = 0; i < cards.length; i++){
      //since cards is an object of arrays we have to first traverse to the rounds then the whole we are on then get the score
      var arr = cards[i];
      var secondArr = arr[num]
      havg = havg + Number.parseFloat(secondArr[1]);
      numOfRounds++;
    }
    numOfRounds++;
  }
  
      if(x.children[2].innerHTML == "-"){
        x.children[2].innerHTML = "1";
        x.children[3].innerHTML = 1 - pars[num - 1];
        if(cards != null){
          havg++;
          var temp = havg/numOfRounds;
        x.children[4].innerHTML = (Number.parseFloat(temp)).toFixed(2);
        }else{
          x.children[4].innerHTML = Number.parseFloat(x.children[2].innerHTML);
        }
      } 
      else {
        let currentScore = Number.parseFloat(x.children[2].innerHTML);
        currentScore = Number.parseInt(currentScore);
        x.children[2].innerHTML = currentScore + 1;
        x.children[3].innerHTML = currentScore - pars[num - 1] + 1;
        if(cards != null){
          havg = havg + Number.parseFloat(x.children[2].innerHTML);
          var temp = havg/numOfRounds;
        x.children[4].innerHTML = (Number.parseFloat(temp)).toFixed(2);
        }else{
          x.children[4].innerHTML = Number.parseFloat(x.children[2].innerHTML);
        }
      }
      var count = 1;
      var all = 0;
      var par = 0;
      var score = 0;
      var over = 0;
      var currEl = document.getElementById("1");
      while(count <= 18){
        currEl = document.getElementById(count);
    
        if(currEl.children[2].innerHTML == "-"){
    
        }
        else{
            all += 1;
            par = par + Number.parseInt(currEl.children[1].innerHTML);
            score = score + Number.parseInt(currEl.children[2].innerHTML);
            over = over + Number.parseInt(currEl.children[3].innerHTML);
        }
        count++;
      }
      var zip = Number.parseFloat()
      var z = document.getElementById("19");
      z.children[0].innerHTML = all;
      z.children[1].innerHTML = par;
      z.children[2].innerHTML = score;
      z.children[3].innerHTML = over;
      z.children[4].innerHTML = Math.round((score/all) * 100) / 100;
    }
    
    function subtract1 (num2) {
      var cards = JSON.parse(localStorage.getItem("cards"));
        var pars = JSON.parse(localStorage.getItem("pars"));
        var y = document.getElementById(num2)
        //add up all other scores for same hole in other cards store in havg variable
    var havg = 0;
    var numOfRounds = 0;
    if (cards != null){
    for(var i = 0; i < cards.length; i++){
      //since cards is an object of arrays we have to first traverse to the rounds then the whole we are on then get the score
      var arr = cards[i];
      var secondArr = arr[num2]
      havg = havg + secondArr[1];
      numOfRounds++;
    }
    numOfRounds++;
  }
      if(y.children[2].innerHTML == "-"){
           y.children[2].innerHTML = "-1";
            y.children[3].innerHTML = -1 - pars[num2 - 1];
            if(cards != null){
              havg++;
              var temp = havg/numOfRounds;
            y.children[4].innerHTML = (Number.parseFloat(temp)).toFixed(2);
            }else{
              y.children[4].innerHTML = Number.parseFloat(y.children[2].innerHTML);
            }
      }
      else {
        let currentScore = y.children[2].innerHTML;
        currentScore = Number.parseInt(currentScore);
        y.children[2].innerHTML = currentScore - 1;
        y.children[3].innerHTML = currentScore - pars[num2 - 1] - 1;
        if(cards != null){
          havg = havg + Number.parseFloat(y.children[2].innerHTML);
          var temp = havg/numOfRounds;
        y.children[4].innerHTML = (Number.parseFloat(temp)).toFixed(2);
        }else{
          y.children[4].innerHTML = Number.parseFloat(x.children[2].innerHTML);
        }
        }
        var count2 = 1;
      var all2 = 0;
      var par2= 0;
      var score2 = 0;
      var over2 = 0;
      var currEle = document.getElementById("1");
      while(count2 <= 18){
        currEle = document.getElementById(count2);
        if(currEle.children[2].innerHTML == "-"){
    
        }
        else{
            all2 += 1;
            par2 = par2 + Number.parseInt(currEle.children[1].innerHTML);
            score2 = score2 + Number.parseInt(currEle.children[2].innerHTML);
            over2 = over2 + Number.parseInt(currEle.children[3].innerHTML);
        }
        count2++;
      }
      var j = document.getElementById("19");
      j.children[0].innerHTML = all2;
      j.children[1].innerHTML = par2;
      j.children[2].innerHTML = score2;
      j.children[3].innerHTML = over2;
      j.children[4].innerHTML = Math.round((score2/all2) * 100) / 100;
      }
    
    function clearHole (num3) {
        console.log("invoked clear");
    var elem = document.getElementById(num3);
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML = "-";
    elem.children[4].innerHTML = "-";
    var count3 = 1;
      var all3 = 0;
      var par3= 0;
      var score3 = 0;
      var over3 = 0;
      var currElem = document.getElementById("1");
      while(count3 <= 18){
        currElem = document.getElementById(count3);
        if(currElem.children[2].innerHTML == "-"){
    
        }
        else{
            all3 += 1;
            par3 = par3 + Number.parseInt(currElem.children[1].innerHTML);
            score3 = score3 + Number.parseInt(currElem.children[2].innerHTML);
            over3 = over3 + Number.parseInt(currElem.children[3].innerHTML);
        }
        count3++;
      }
      var o = document.getElementById("19");
      o.children[0].innerHTML = all3;
      o.children[1].innerHTML = par3;
      o.children[2].innerHTML = score3;
      o.children[3].innerHTML = over3;
    }
    function newCard(){
        //retrieve json array of rounds
        var cards = JSON.parse(localStorage.getItem("cards"));       
        if(cards == null){
                    //create rounds array to hold data for this card  
          var rounds = new Array();
          // create cards array to store data for all cards
            var cards = new Array();
            for(var i = 0; i <= 18; i++){
              var temp = [0, 0, 0];
                if(i == 0){
                    temp[0] = document.getElementById("month").value;
                    temp[1] = document.getElementById("day").value;
                    temp[2] = document.getElementById("year").value;
                    rounds.push(temp);
                }else{
                  var x = document.getElementById(i);
            //save par
            temp[0] = Number.parseInt(x.children[1].innerHTML);
            //save score
            temp[1] = Number.parseInt(x.children[2].innerHTML);
            //save over
            temp[2] = Number.parseInt(x.children[3].innerHTML);
            rounds.push(temp);
                }
            }
            console.log(rounds);
            //push rounds array into cards array
            cards.push(rounds);
            //save cards to local storage
            var str = JSON.stringify(cards)
            localStorage.setItem("cards", str);
            console.log("first instanciation of rounds storage");
        }
        else{
        // create new card
        var rounds = new Array();
        for(var i = 0; i <= 18; i++){
          var temp = [0, 0, 0];
            if(i == 0){
                temp[0] = document.getElementById("month").value;
                temp[1] = document.getElementById("day").value;
                temp[2] = document.getElementById("year").value;
                rounds.push(temp);
            }else{
        var x = document.getElementById(i);
        //save par
        temp[0] = Number.parseInt(x.children[1].innerHTML);
        //save score
        temp[1] = Number.parseInt(x.children[2].innerHTML);
        //save over
        temp[2] = Number.parseInt(x.children[3].innerHTML);
        rounds.push(temp);
            }
        }
        cards.push(rounds);
        var str = JSON.stringify(cards);
localStorage.setItem("cards", str);
console.log("new card created and saved to storage");
        }
        //refresh page
      window.location.href = "golfScorecards.html";
    }
    function updatePars(){
    window.location.href = "updatePars.html"
    }
    function populateRounds(){
    
    }
    function changePars(){
        var pars = JSON.parse(localStorage.getItem("pars"));
        if(pars[4] != null){
        for(var i = 0; i <= 17; i++){
            document.getElementById(i + 1).children[1].innerHTML = pars[i];
        }
    }else{
        pars = [4,5,4,3,4,5,4,3,4, 4,5,4,3,4,5,3,4,4];
        var str = JSON.stringify(pars);
        localStorage.setItem("pars", str);
        changePars();
    }
    }
    /* your mission: 
    1. make all the + buttons add 1 to the proper hole. 
    2. make all the - buttons subtract 1 from the proper hole.
    3. update the "Over" column to show the difference between par and score.
    4. update row #19 with appropriate totals. Note: if a person has not finished a round, then Over/Under should apply only to holes that have been updated.
    5. Add a new button, C, which clears the current score for a given hole
    6. advanced: put circles around birdies and squares around bogeys!
    */
    function submitPars(){
        var pars = new Array(17);
        var x;
        var j;
    for(var i=0; i < 18; i++){
        j = i + 1;
        x = document.getElementById("p" + j);
    pars[i] = x.value;
    console.log(pars[i]);
    }
    var str = JSON.stringify(pars);
    localStorage.setItem("pars", str);
    window.location.href = "golfScorecards.html";
    }
    function add1Par(num){
    var x = document.getElementById("p" + num);
    var total = x.value;
    total++;
    x.value = total;
    }
    function subtract1Par(num){
        var x = document.getElementById("p" + num);
    var total = x.value;
    total--;
    x.value = total;
    }
    function deleteCards(){
      var str = null;
      localStorage.setItem("cards", str);
      //refresh page
      window.location.href = "golfScorecards.html";
    }
