    let playerId=1;
    let firstPlayerArr=[];
    let secondPlayerArr=[];
    let player1Counter=0;
    let player2Counter=0;
    let gameCounter=0;
    let isWinCounter=0;
    let checkResult=false;

    const winningCombinations=[
        ["box1", "box2", "box3"],
        ["box4", "box5", "box6"],
        ["box7", "box8", "box9"],
        ["box1", "box4", "box7"],
        ["box2", "box5", "box8"],
        ["box3", "box6", "box9"],
        ["box1", "box5", "box9"],
        ["box3", "box5", "box7"],
    ]



    function testFunc(element){
        let myDivObjBgColor = window.getComputedStyle(element).backgroundColor;
        if(playerId==1){
            if(myDivObjBgColor=="rgb(255, 255, 255)"){
                element.style.backgroundColor="red";
                firstPlayerArr.push(element.id);
                player1Counter++;
                if(player1Counter>=3){
                    isWin(firstPlayerArr);
                   if(checkResult==true){
                    setTimeout(function(){ alert("Red player WIN!"); }, 100);
                    setTimeout(resetGame, 1000);
                   }
                }
                gameCounter++;
                playerId=2;
            }
        }else if(playerId==2){
            if(myDivObjBgColor=="rgb(255, 255, 255)"){
                element.style.backgroundColor="blue";
                secondPlayerArr.push(element.id);
                player2Counter++;
                if(player2Counter>=3){
                    isWin(secondPlayerArr);
                    if(checkResult==true){
                        setTimeout(function(){ alert("Blue player WIN!"); }, 100);
                        setTimeout(resetGame, 1000);
                    }
                }
                gameCounter++;
                playerId=1;
            }
        }
        if(gameCounter==9 && checkResult==false){
            setTimeout(function(){ alert("It's draw!"); }, 100);
            setTimeout(resetGame, 1000);
        }
    }

    function resetGame(){
        const reset = document.querySelectorAll('.box');
        reset.forEach(element => {
            element.style.backgroundColor="white";
        });

        firstPlayerArr=[];
        secondPlayerArr=[];
        playerId=1;
        gameCounter=0;
        checkResult=false;
    }


    function isWin(arr){
        winningCombinations.forEach(combination => {
            isWinCounter=0;

            combination.forEach(box => {
                arr.forEach(element => {
                    if(element===box){
                        isWinCounter++;
                    }
                });
            });

            if(isWinCounter==3){
                checkResult = true;
            }
        });
    }
