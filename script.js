const players = [];

function addPlayer(){
    player = document.getElementById("playerName").value;
    if (player != "" && 21 > player.length){
        players.push(player);
        document.getElementById("playerName").value = "";
        clearList()
        ListRenderer(players)

    }else{
        alert("Wrong input")
        document.getElementById("playerName").value = "";
    }
}


function removePlayer(index){
    if (index > -1) {
        players.splice(index, 1);
        clearList()
        ListRenderer(players)
    }
}


function selectWinner(){
    if(players.length != 0){
        winner = players[Math.floor(Math.random() * players.length)];
        alert("The Winner Is " + winner + "!"); 
    }else{
        alert("There are no players lol")
    }
}

function clearList()  {
    let list = document.getElementById("playersTable");
    list.querySelectorAll('*').forEach(n => n.remove());
}

function deleteList(){
    if(players.length != 0){
        players.length = 0;
        clearList()
        ListRenderer(players)   
    }else{
        alert("There are no players lol")
    }
}


function ListRenderer(list) {

    let ulElRederList = document.createElement('ul');
    ulElRederList.setAttribute('id', 'playerList');
    document.getElementById('playersTable').appendChild(ulElRederList);
    list.forEach(RenderNewsList);

    function RenderNewsList(element, index, arr) {
        let player = document.createElement('li');
        player.setAttribute('id', 'player');
        player.innerHTML = element;
        player.addEventListener("click", () => { removePlayer(index) })
        ulElRederList.appendChild(player);
    }
}

