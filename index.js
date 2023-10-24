let winningCombinations=[
    [1,2,3],    
    [4,5,6],    
    [7,8,9],    
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [7,5,3]
]

let boxelement = document.querySelectorAll(".box")


for(elem of boxelement){
    elem.addEventListener("click", handleClick)
}

let click = 0
let isWon=false
let xAttempts=[]
let oAttempts=[]

function handleClick(event){
    console.log(event.target.id)

    let id=event.target.id
    let ptag = document.createElement("p")

    ptag.style.color="#FAB201"
    boxelement[id-1].appendChild(ptag)

    console.log(typeof(id))

    if(click%2==0){
        ptag.textContent="X"
        click++
        xAttempts.push(parseInt(id))
        console.log("x",xAttempts)
        result(xAttempts,"X")
    }else{
        ptag.textContent="O"
        click++
        oAttempts.push(parseInt(id))
        console.log("O",oAttempts)
        result(oAttempts,"O")
    }

    if(click==9 && isWon==false){
            resultBox.style.visibility="visible"
            messageBox.textContent="It's a Draw!"
    }
}

let resultBox=document.getElementById("result")
let messageBox=document.getElementById("message")

function result(playerArray,player){
    for (let i=0;i<winningCombinations.length;i++){
        let check=true
        for(let j=0;j<winningCombinations[i].length;j++){
            if(playerArray.includes(winningCombinations[i][j])==false){
                check=false
                break
            }
        }
        if(check==true){
            isWon=true
            resultBox.style.visibility="visible"
            messageBox.textContent=player+" Won the match"
        }
    }
}

let playBtn=document.getElementById("button")

playBtn.onclick=()=>{
    history.go(0)
}