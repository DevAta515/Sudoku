let tile_board=document.getElementById("numbers");
let game_board=document.getElementById("board");
var error=10;
let err=document.getElementById("error");
var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
];
var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
];
window.onload=function(){
    setgame();
    setboard();
    // win();
}
function setgame(){
    for(let i=1;i<=9;i++){
        let number=document.createElement("div");
        number.id=i;
        number.innerText=i;
        number.addEventListener("click",number_select);
        number.classList.add("tile");
        tile_board.appendChild(number);
    }
}
function setboard(){
    for(let i=0;i<9; i++){
        for(let j=0;j<9;j++){
            let number=document.createElement("div");
            number.id=`${i}-${j}`;
            number.addEventListener("click",tile_select)
            if(board[i][j]!=='-'){
                number.innerText=board[i][j];
                number.style.backgroundColor='lightgray';
            }
            number.classList.add("tile1");
            game_board.appendChild(number);
            if(j===2||j===5){
                number.style.borderRight="solid 2px black";
            }
            if(i===2||i===5){
                number.style.borderBottom="solid 2px black";
            }
        }
    }
}



function number_select(){
    let same_tile=document.querySelectorAll(".tile1");
    select=this;
    for(let j=0;j<81;j++){
            same_tile[j].style.removeProperty("z-index");
            // same_tile[j].style.removeProperty("transform");
            same_tile[j].style.transform="scale(1)";
            // same_tile[j].style.zIndex="0";
        }
    // console.log(typeof(select));
    let elem=document.querySelectorAll('.tile')
    for(let i=0;i<elem.length;i++){
        elem[i].classList.remove("num-select");
    }
    select.classList.add('num-select');
    for(let k=0;k<81;k++){
        if(same_tile[k].innerText==select.innerText){
            // same_tile[k].style.removeProperty("font-weight");
            same_tile[k].style.zIndex="1";
            same_tile[k].style.transform="scale(1.3)";
        }
        }
    
    // console.log(this);
}




function tile_select(){
    selectedTile=this;
    if(selectedTile.innerText){
        alert("You cannot overwrite it");
    }
    else{
        // console.log(selectedTile.id[0]);
        // console.log((+selectedTile.id[0]));
        row=+selectedTile.id[0];
        col=+selectedTile.id[2];
        selected=select.innerText;
        if(selected==solution[row][col]){
            selectedTile.innerText=select.innerText;
            let c=0;
            for(let i=0;i<9;i++){
                for (let j=0;j<9;j++){
                    let check=document.getElementById(`${i}-${j}`);
                    if(solution[i][j]==check.innerText){
                        // console.log("yes");
                        c++;
                    }
                }
            }
            if(c==81){
            alert("You Win");
            }
        }
        else{
            error--;
            err.innerText=`Chances : ${error}`;
            if(error<=3){
                err.style.color='red';
                err.style.transform='scale(1.2)';
            }
        }
        if(error==0){
            alert("Game Over");
            window.location.reload();
        }
    }
    
        
}
