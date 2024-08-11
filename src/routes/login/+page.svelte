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
    </article>
  </main>