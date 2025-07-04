console.log('Hello World!');

board = document.querySelector('#board')
board.style.width = '350px'
colorBoard = document.querySelector('#colorBoard')

let chosenColor ;
let backgroundColor ;
let chosenBgColor = 'white'

colorNumber = 0
let colors = [
  //Red to Yellow
  'maroon','darkred','firebrick','crimson','red','orangered','orange','gold','yellow',
  //Greens
'greenyellow','lawngreen','lime','springgreen','seagreen','green','darkslategrey','olive','yellowgreen',
//Blues
'lightcyan','skyblue','cornflowerblue','dodgerblue','cyan','cadetblue','steelblue','blue','royalblue'
//Pinks and Purple
,'darkslateblue','rebeccapurple','purple','mediumslateblue','mediumpurple','lightpink','mediumvioletred','palevioletred'
//Browns
,'rosybrown','brown','saddlebrown','sienna','chocolate','coral','sandybrown','goldenrod','peru','burlywood','palegoldenrod',
//Black and White
'white', 'Snow', 'Honeydew', 'Whitesmoke', 'lightgrey','darkgrey','grey','black']
 
showColors = () => {
  colorBoard.style.visibility == 'visible' ?
  colorBoard.style.visibility =  'hidden ' :
  colorBoard.style.visibility =  'visible' ;
}

showPropertyPanel = () => {
  propertyPanel.style.visibility=='visible'?
  propertyPanel.style.visibility= 'hidden' :
  propertyPanel.style.visibility= 'visible';
}

grid = () => {
  if (board.firstChild.classList.contains('grid')){
  for(var j = 1 ; j<=board.childElementCount ; j++) {
    document.querySelector(`#px${j}`).classList.remove('grid')}
   gridButton.classList.remove('selectedButton')
   gridCell.innerHTML = ': OFF'
  }else{
  for(var j = 1 ; j<=board.childElementCount ; j++) {
    document.querySelector(`#px${j}`).classList.add('grid')}
    gridButton.classList.add('selectedButton')
    gridCell.innerHTML = ': ON'
  }
}

let hideButton = document.querySelector('#hideButton');

hideBoard = () => {
  for (var a = 1 ; a<=board.childElementCount ; a++ ){
    
   if (
     document.querySelector(`#px${a}`).className == 'pixal' ||
     document.querySelector(`#px${a}`).className == 'pixal grid') 
     
     {
     document.querySelector(`#px${a}`).style.visibility = 'hidden';
  
     
   }
   hideButton.innerHTML = 'SHOW BOARD';
   hideButton.classList.add('selectedButton')
   hideButton.onclick = showBoard
  }
}
showBoard = () => {
  for (var a = 1; a <= board.childElementCount; a++) {
  
    if (
      document.querySelector(`#px${a}`).className == 'pixal' ||
      document.querySelector(`#px${a}`).className == 'pixal grid')
  
    {
      document.querySelector(`#px${a}`).style.visibility = 'visible';
  
  
    }
  }
  hideButton.innerHTML = 'HIDE BOARD';
  hideButton.classList.remove('selectedButton')
  hideButton.onclick = hideBoard
}

changeBackGround = (chosenBgColor) => {
  for (var a = 1 ; a<=board.childElementCount ; a++) {
      if (document.querySelector(`#px${a}`).classList.contains('painted')==false){
    document.querySelector(`#px${a}`).style.backgroundColor = chosenBgColor
  }
  }
}
selectBgButton = () => {
  bgButton.classList.contains('selectedButton') ? 
  bgButton.classList.remove('selectedButton') :
  bgButton.classList.add('selectedButton')
}

for (var a= 1 ;a<=colors.length ; a++) {
  let colorOps = document.createElement('div')
  colorOps.className = 'colorOps';
  colorOps.style.backgroundColor = colors[colorNumber++];
  let chooseColor = () => {
   if (bgButton.classList.contains('selectedButton')){
     chosenBgColor = colorOps.style.backgroundColor;
     chosenBgColorCell.style.backgroundColor = chosenBgColor;
     changeBackGround(chosenBgColor)
   }
   else{
    chosenColor = colorOps.style.backgroundColor;
  chosenColorCell.style.backgroundColor = chosenColor;
  console.log(chosenColor);
    }
   }
  colorOps.onclick = chooseColor ;
  colorBoard.appendChild(colorOps)
}

chooseEraser = () => {
  eraser.classList.contains('selectedButton') ? eraser.classList.remove('selectedButton')  :   eraser.classList.add('selectedButton') ; 
}

for (var i = 1; i <= 1750; i++) {
  let pixals = document.createElement('div')
  pixals.className = 'pixal';
  pixals.id        = `px${i}`
  changeColor = () => {
    if (eraser.className == 'selectedButton') {
      if (pixals.classList.contains('painted')) {
        if (hideButton.classList.contains('selectedButton')){
          pixals.style.backgroundColor = chosenBgColor;
          pixals.classList.remove('painted')
          pixals.style.visibility = 'hidden'
        }else {
      pixals.style.backgroundColor = chosenBgColor;
      pixals.classList.remove('painted')
        }
      }
    }else {
    pixals.style.backgroundColor = chosenColor;
  pixals.classList.add('painted')
    }
  }
  pixals.onclick = changeColor;
  board.appendChild(pixals)
}
