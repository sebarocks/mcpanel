<svelte:head>
    <title>MCPanel - Login</title> 
</svelte:head>

<header class="centred">
  <img class="max-width-100" src="/img/minecraft-all-my-homies.png" alt="Banner-Minecraft">
</header>

<main class="centred">
  <article class="blurred-white rounded centred col p-3 mw-450">
    <img class="p-3" src="img/creeper.png" alt="Creeper-Minecraft">
    <form class="centred col" method="POST" action="?/login">
      <table>
        <tr>
          <td class="p-2">
            <label class="font-2 bold" for="username"> Usuario o Correo </label>  
          </td>
        </tr>
        <tr>
            
          <td class="p-3">
            <input class="transparent-input p-3 rounded font-1" 
            title="Usuario" placeholder="Creeper22" type="text" name="username" id="username" required>
          </td>
        </tr>
        <tr>
          <td class="p-2">
            <label class="font-2 bold" for="password"> Contraseña </label>
          </td>
        </tr>
        <tr>            
          <td class="p-3">
            <input class="transparent-input p-3 rounded font-1" 
            title="Contraseña" placeholder="********" type="password" name="password" id="password" required>
          </td>
        </tr>
      </table>
      <button class="font-2 bold bg-green p-3 rounded transparent-input centred" type="submit" value="login" >
        <img class="w-25" src="/img/creeper_solid.png" alt="Creeper-button"/>
          Login
      </button>
    </form>
    <form method="post">
      <br>
      <button class="font-2 bg-white centred google-sign-in-button" formaction="?/google">
        <img src="https://www.google.com/favicon.ico" alt="Google icon" />
        <span>Acceder con Google</span>
      </button>
    </form>
  </article>
</main>

<style>
.google-sign-in-button {
    cursor: pointer;
    transition: background-color .3s, box-shadow .3s;
        
    padding: 8px 12px 8px 12px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    
    color: #757575;
    font-size: 14px;
    font-weight: 500;
    font-family: "Google Sans","Roboto-Regular", sans-serif;
    
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
}

.google-sign-in-button:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
}

.google-sign-in-button:active {
    background-color: #eeeeee;
}

.google-sign-in-button:active {
    outline: none;
        box-shadow: 
        0 -1px 0 rgba(0, 0, 0, .04),
        0 2px 4px rgba(0, 0, 0, .25),
        0 0 0 3px #c8dafc;
}

</style>