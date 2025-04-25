<form class="contact-form" action="send_email.php" method="post">
  <label for="name">Your name</label>
  <input type="text" id="name" name="name" placeholder="Your name" required>

  <label for="email">Your email</label>
  <input type="email" id="email" name="email" placeholder="Your email" required>

  <label for="message">Your message</label>
  <textarea id="message" name="message" placeholder="Your message" rows="5" required></textarea>

  <button type="submit" class="button">SEND MESSAGE ➤</button>
</form>