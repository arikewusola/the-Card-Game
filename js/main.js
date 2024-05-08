let deckId = '';
function convertToNum(val){
  if(val === 'ACE'){
    return 14
  }else if(val === 'KING'){
    return 13
  }else if(val === 'QUEEN'){
    return 12
  }else if(val === 'JACK'){
    return 11
  }else{
    return Number(val)
  }
}

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json())
.then(data => {
  console.log(data)
  deckId = data.deck_id
})
//end of deck selection

document.querySelector('.button').addEventListener('click', play)
function play(){
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
  .then(res => res.json())
  .then( data =>{

    if(data.remaining === 0){
      fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(data => {
      deckId = data.deck_id  
    })
    fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      document.querySelector('#theBOT').src = data.cards[0].image
      document.querySelector('#theChallenger').src = data.cards[1].image
      let theBotValue = convertToNum(data.cards[0].value)
       let theChallengerValue =convertToNum(data.cards[1].value)

       if(theBotValue > theChallengerValue){
        document.querySelector('.winner').innerText = "The BOT"
      }else if(theBotValue < theChallengerValue){
        document.querySelector('.winner').innerText = "Player 2"
      }else{
        document.querySelector('.winner').innerText = "It's a draw"
      }
    })
    } else{
        console.log(data)
      document.querySelector('#theBOT').src = data.cards[0].image
      document.querySelector('#theChallenger').src = data.cards[1].image
      let theBotValue = convertToNum(data.cards[0].value)
      let theChallengerValue =convertToNum(data.cards[1].value)
      if(theBotValue > theChallengerValue){
        document.querySelector('.winner').innerText = "The BOT"
      }else if(theBotValue < theChallengerValue){
        document.querySelector('.winner').innerText = "Player 2"
      }else{
        document.querySelector('.winner').innerText = "It's a draw"
      }
    }
l})

}

  // function convertToNum(val){
  //   if(val === 'ACE'){
  //     return 14
  //   }else if(val === 'KING'){
  //     return 13
  //   }else if(val === 'QUEEN'){
  //     return 12
  //   }else if(val === 'JACK'){
  //     return 11
  //   }else{
  //     return Number(val)
  //   }
  // }