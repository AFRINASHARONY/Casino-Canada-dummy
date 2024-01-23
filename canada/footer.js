// footer.js

function loadFooter() {
  // Create a div to hold the content
  var container = document.createElement('div');

  // Set the HTML content for the footer
  container.innerHTML = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
  <link rel="stylesheet" href="footer.css">
</head>
<body>

<!-- Your content goes here -->

<footer>
  <div class="footer-column">
    <h4>CASINO ONLINE</h4>
    <ul>
      <li><a href="#">Fast Pay</a></li>
      <li><a href="#">Best Pay</a></li>
      <li><a href="#">Bitcoin</a></li>
      <li><a href="#">Neteller</a></li>
      <li><a href="#">Debit Card</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>REVIEWS</h4>
    <ul>
      <li><a href="#">New Casino</a></li>
      <li><a href="#">Android</a></li>
      <li><a href="#">iPhone</a></li>
      <li><a href="#">Real Money Casino</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>CASINO GAMES</h4>
    <ul>
      <li><a href="#">Blackjack</a></li>
      <li><a href="#">Bingo</a></li>
      <li><a href="#">Online Lottery</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>BONUSES</h4>
    <ul>
      <li><a href="#">No Deposit</a></li>
      <li><a href="#">Free Spin</a></li>
      <li><a href="#">Cashback</a></li>
    </ul>
  </div>

  <div class="footer-column">
    <h4>FREE SLOTS</h4>
    <ul>
      <li><a href="#">Popular Slots</a></li>
      <li><a href="#">Real Money Slots</a></li>
    </ul>
  </div>

  <div class="footer-social">
    <a href="#"><img src="facebook-logo.png" alt="Facebook Logo"></a>
    <a href="#"><img src="instagram-logo.png" alt="Instagram Logo"></a>
    <a href="#"><img src="email-logo.png" alt="Email Logo"></a>
  </div>
</footer>

</body>
</html>


  `;

  // Append the content to the body
  document.body.appendChild(container);
}

// Call the function to load the footer when the DOM is ready
document.addEventListener('DOMContentLoaded', loadFooter);
