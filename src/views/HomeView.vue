<template>
  
    <div class="head">
      <header>
        <img src="../assets/logo.png" alt="logo" />
        <h2>FAST FOOD ES </h2>
        <button> HOME</button>
        <button>BURGUERS</button>
        <button>HOTDOGS</button>
        <button>DRINKS</button>
        <button>EXTRAS</button>
        <button>EXIT</button>
      </header>
    </div>




<div class="home">
    <div class="texto">
   <h2>🍔 Bienvenido a FAST FOOD ES</h2>
   <p>¡Gracias por visitarnos! En FAST FOOD ES encontrarás lo mejor de la comida rápida:<br>
    deliciosa, caliente y lista para satisfacer tu antojo.Desde hamburguesas jugosas hasta<br>
    papas crujientes, pasando por bebidas refrescantes y combos irresistibles, tenemos algo para <br>
    todos los gustos.<br>
</p>
<p>
🚀 Rápido, sabroso y siempre fresco.<br>
🛵 ¡Haz tu pedido en línea y recíbelo donde quieras!
</p>
<button>!COMO LLEGAR!</button>
</div>


<div class="imgh">
    <img src="../assets/hamburguesahome.png" alt="hamburguesa Home" />
</div>
</div>

<footer>
  <div class="pieP">
      <h5>FAST FOOD ES</h5>
      <div class="enlaces">
          <a href="https://maps.app.goo.gl/jERAmwjeYzEVQxUs5" target="_blank">Address</a>

          <a href="https://wa.me/3219147287" target="_blank">/Contact</a>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danielsilvaagredo22@gmail.com&su=Consulta&body=Hola,"
              target="_blank">/Mail</a>
      </div>
      
      <div class="redes">
          <a href="https://www.instagram.com/daniel_santiag22/profilecard/?igsh=ZHF0ZTgwZXh4aGI3" target="_blank">Instagram</a>
      </div>

  </div>
</footer>

</template>

<script setup>
</script>

<style scoped>

header{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content:space-between ;
    height: auto;
    width: 100%;
    z-index: 1000;
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
}

.head img{
  width: 10%;
  height: auto;
  margin-left: 10%px;
  margin-right: 5px;
}

.head h2 {
  font-size: 40px;
  text-align: center;
  flex-grow: 1;

}

.head button{
    background-color: #FAE9BF;
    color: #572618 ;
    margin-right: 50px;
    border: none;     
    box-shadow: 0 0 10px rgba(236, 139, 19, 0.795);
    border-radius: 8px;
    padding: 10px;
   
  }
  .home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 80px 50px;
    gap: 40px; /* separa texto e imagen */
    flex-wrap: wrap; /* opcional: permite que se acomode en pantallas pequeñas */
  }


  
  .texto {
    flex: 1;
    margin-top: 2%;
    margin-left: 5%;
  }
  
  .texto button {
    background-color: #FAE9BF;
    color: #572618 ;
    border: none;     
    box-shadow: 0 0 10px rgba(236, 139, 19, 0.795);
    border-radius: 8px;
    padding: 10px;
    margin-left: 20%;
    margin-top: 15px;
  }
  
  .imgh {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .imgh img {
    width: 350px;
    height: 400px;
    object-fit: contain;
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  img:hover {
    transform: scale(1.1);
  }

.imgh p {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  margin-top: -15px;
  padding-left: 50%;
}

footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
padding-top: 10px;
padding-left: 2px;
padding-right: 10px;
 background-color: #FAE9BF ;
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
}


.pieP {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
}

.pieP h5 {
  margin: 0;
  text-align: left;
  
}


.enlaces {
  display: flex;
  justify-content: center;
  flex-grow: 1; 
  gap: 15px; 
}


.pieP a {
  text-decoration: none;
  color: #572618;
  font-weight: bold;
}

.redes a {
  background: linear-gradient(to right, #A74099, #B8387F,#CE305B,#D82B4D,#DC2A41,#F0402B,#F3672A,#F68A2B,#FBBE28);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; 
  font-weight: bold;

}


</style>
