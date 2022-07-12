function blackjack(array) {
    let dealerCount = 0;
    function dealer(a, b) {
      let playerCount = 0;
      let total = a + b;
      function player() {
        if (total === "bust") return "you are done!";
        dealerCount++;
        playerCount++;
        if (playerCount === 1) return total;
        total += array[dealerCount - 2];
        if (total > 21) {
          total = "bust";
          dealerCount--;
        }
        return total;
      }
      return player;
    }
    return dealer;
  }

  const deal = blackjack([
    2,
    6,
    1,
    7,
    11,
    4,
    6,
    3,
    9,
    8,
    9,
    3,
    10,
    4,
    5,
    3,
    7,
    4,
    9,
    6,
    10,
    11,
  ]);
  
  // /*** PLAYER 1 ***/
  const i_like_to_live_dangerously = deal(4, 5);
  //console.log(i_like_to_live_dangerously());
  // => should log 9
  //console.log(i_like_to_live_dangerously());
  // => should log 11
  //console.log(i_like_to_live_dangerously());
  // => should log 17
  //console.log(i_like_to_live_dangerously());
  // => should log 18
  //console.log(i_like_to_live_dangerously());
  // => should log 'bust'
  //console.log(i_like_to_live_dangerously());
  // => should log 'you are done!'
  //console.log(i_like_to_live_dangerously());
  // => should log 'you are done!'
  
  // /*** BELOW LINES ARE FOR THE BONUS ***/
  
  // /*** PLAYER 2 ***/
  const i_TOO_like_to_live_dangerously = deal(2, 2);
  //console.log(i_TOO_like_to_live_dangerously());
  // => should log 4
  //console.log(i_TOO_like_to_live_dangerously());
  // => should log 15
  //console.log(i_TOO_like_to_live_dangerously());
  // => should log 19
  //console.log(i_TOO_like_to_live_dangerously());
  // => should log 'bust'
  //console.log(i_TOO_like_to_live_dangerously());
  // => should log 'you are done!
  //console.log(i_TOO_like_to_live_dangerously());
  // => should log 'you are done!
  
  // /*** PLAYER 3 ***/
  const i_ALSO_like_to_live_dangerously = deal(3, 7);
  //console.log(i_ALSO_like_to_live_dangerously());
  // => should log 10
  //console.log(i_ALSO_like_to_live_dangerously());
  // => should log 13
  //console.log(i_ALSO_like_to_live_dangerously());
  // => should log 'bust'
  //console.log(i_ALSO_like_to_live_dangerously());
  // => should log 'you are done!
  //console.log(i_ALSO_like_to_live_dangerously());
  // => should log 'you are done!

  //By this point, the code should be pretty self-explanatory so I won't explain it line by line. The most important concept here is that we have two closures here, one inside the other. The outer function can be thought of as the deck of cards, the function inside that can be thought of as the dealer, and the one inside that can be thought of as the players. Thinking logically about blackjack, a dealer can deal many players, and a single deck of cards can be used in many dealings. Thinking like this should clarify where each variable that acts as memory should reside.

//Implementing the bonus part just required realising that we needed two different counters, one for the dealer and one for the players, and then to modify the logic very slightly to count correctly.

//I know I've harped on this time and time, but I have implemented blackjack exercises quite a few times in different languages, generally using OOP paradigms. It has always required a lot more code than this. Using closure and realising the power that having memory gives functions is quite amazing.