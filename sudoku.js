var numSelected = null;
var tileSelected = null;
var errors = 0;


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
]

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
]

window.onload = function() {
   setGame();
}

function setGame(){
    for (let i=1; i<=9; i++){
        let number = document.createElement("div")
        number.id = i;
        number.innerText = i; //so that i can be displayed in the text
        number.classList.add("number");
        number.addEventListener("click", selectNumber);
        document.getElementById("digits").appendChild(number);
    }

    //board 9x9
    for (let r=0; r<9; r++) { //row
        for (let c=0; c<9; c++) { //column
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-"){
                tile.innerText = board[r][c];
                tile.classList.add("tile-style");
            }
            if (r == 2 || r == 5){
                tile.classList.add("tile-border-horizontal");
            }
    

            if (c == 2 || c == 5){
                tile.classList.add("tile-border-vertical");
            } 

            tile.classList.add("tile");
            tile.addEventListener("click", selectTile);
            document.getElementById("board").append(tile);

        }
    }

}

function selectNumber(){
    if(numSelected != null){
        numSelected.classList.remove("number-selected")
    }
    numSelected = this; 
    numSelected.classList.add("number-selected");
}

//smtgs wrong here
function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}