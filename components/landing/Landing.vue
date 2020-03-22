<template>
  <div class="landing">
    <div class="landing__sale">
      <div class="landing__sale__container">
        <h1>Scrapper<span>Pro</span></h1>
        <p>Custom built scripts with onclick functionality</p>
      </div>
    </div>
    <div class="landing__log">
      <form class="landing__log__form">
        <label for="log">Login</label>
        <input id="login" type="radio" name="log" value="login" checked />
        <label for="log">Register</label>
        <input id="register" type="radio" name="log" value="register" />
        <label for="email">Email</label>
        <input name="email" type="email" />
        <label for="password">Password</label>
        <input name="password" type="password" />
        <input type="submit" value="Submit" class="submit" />
      </form>
    </div>
  </div>
</template>
