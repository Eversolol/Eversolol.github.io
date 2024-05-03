function toggleClock() {
    // get the card
    var myClock = document.getElementById('show-more');

    // get the current value of the card's display property
    var displaySetting = myClock.style.display;

    // also get the card button, so we can change what it says
    var clockButton = document.getElementById('cardButton');

    // now toggle the CARD and the button text, depending on current state
    if (displaySetting == 'block') {
      // card is visible. hide it
      myClock.style.display = 'none';
      // change button text
      clockButton.innerHTML = 'Voir plus <img src="./Images/plus.png" alt="voir plus" class="btn-img">';
    }
    else {
      // card is hidden. show it
      myClock.style.display = 'block';
      // change button text
      clockButton.innerHTML = 'Voir moins <img src="./Images/minus-sign.png" alt="voir moins" class="btn-img">';
    }
  }