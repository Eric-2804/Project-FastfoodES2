<template>
  
  <div class="head">
    <header>
      <img src="../assets/logo.png" alt="logo" />
      <h2>FAST FOOD ES </h2>
      <router-link to="/"><button>HOME</button></router-link>
        <router-link to="/hamburguesas"><button>BURGUERS</button></router-link>
        <router-link to="/hotdogs"><button>HOTDOGS</button></router-link>
        <router-link to="/bebidas"><button>DRINKS</button></router-link>
        <router-link to="/extras"><button>EXTRAS</button></router-link>

    </header>
  </div>

  <div class="container"> 
  <div class = "card ">
  <img src="../assets/HotDogs/hotdog1.jpeg" alt="Todoterreno Clásica En Combo">
  <div class="card-conte">
  <h5>Hotdog clásico</h5>
  <p>✰ Salchicha tipo frankfurt en pan suave, mostaza, kétchup y cebolla picada.</p>
  <span class="precio">$12.900</span>
  <button class="btn-comprar">Comprar</button>
</div>
</div>

  <div class="card">
    <img src="../assets/HotDogs/hotdog2.jpeg" alt="jiren">
    <div class="card-conte">
  <h5>Hotdog americano</h5>
  <p>✰ Salchicha a la parrilla con queso cheddar derretido, tocino crocante y kétchup.</p>
  <span class="precio">$14.500</span>
  <button class="btn-comprar">Comprar</button>
</div>
  </div>

  <div class="card">
  <img src="../assets/HotDogs/hotdog3.jpeg" alt="Hit">
  <div class="card-conte">
  <h5>Hotdog chili cheese </h5>
  <p>✰ Salchicha cubierta con chili con carne, queso rallado y jalapeños.</p>
  <span class="precio">$16.000</span>
  <button class="btn-comprar">Comprar</button>
</div>
</div>

<div class="card"> 
  <img src="../assets/HotDogs/hotdog4.jpeg" alt="Frezzer">
  <div class="card-conte">
  <h5>Hotdog hawaiano </h5>
  <p>✰ Salchicha con piña asada, jamón, queso mozzarella y salsa tártara.</p>
  <span class="precio"> $15.500</span>
  <button class="btn-comprar">Comprar</button>
</div>
</div>

<div class="card">
  <img src="../assets/HotDogs/hotdog5.jpeg" alt="Toppo">
  <div class="card-conte">
  <h5>Hotdog tex-mex </h5>
  <p>✰ Salchicha con guacamole, pico de gallo, jalapeños frescos y queso pepper jack.</p>
  <span class="precio">$16.900</span>
  <button class="btn-comprar">Comprar</button>
</div>
</div>

<div class="card">
  <img src="../assets/HotDogs/hotdog6.jpeg" alt="Aniraza">
  <div class="card-conte">
  <h5>Hotdog gourmet </h5>
  <p>✰ Salchicha artesanal, cebolla caramelizada, queso brie y rúcula en pan brioche.</p>
  <span class="precio">$18.000</span>
  <button class="btn-comprar">Comprar</button>
</div>
</div>

<div class="card">
  <img src="../assets/HotDogs/hotdog7.jpeg" alt="Kefla">
  <div class="card-conte">
  <h5>Hotdog bbq bacon </h5>
  <p>✰ Salchicha a la parrilla con salsa bbq, tiras de tocino y cebolla crispy.</p>
  <span class="precio">$15.900</span>
  <button class="btn-comprar">Comprar</button>
</div>
</div>

<div class="card">
<img src="../assets/HotDogs/hotdog8.jpeg" alt="Androide 17">
<div class="card-conte">
  <h5>Hotdog veggie</h5>
  <p>✰ Salchicha vegetal de soya con aguacate, tomate fresco, lechuga y mayonesa vegana.</p>
  <span class="precio">$14.000</span>
  <button class="btn-comprar">Comprar</button>
</div>
</div>

 <div class="card">
  <img src="../assets/HotDogs/hotdog9.jpeg" alt="Gohan">
  <div class="card-conte">
  <h5>Hotdog deluxe </h5>
  <p>✰ Doble salchicha, queso cheddar, cebolla salteada y salsa especial de la casa.</p>
  <span class="precio">$19.500</span>
  <button class="btn-comprar">Comprar</button>
</div>
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
position: fixed;
background-color: white;
top: 0;
left: 0;
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

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-top: 10%;
  padding: 0 40px;
}

.card {
  background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 20px;
    text-align: center;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
    padding: 20px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: row; 
  align-items: center;
  gap: 20px; 
}
  

.card img {
  width: 200px;
  height: 150px;
  object-fit: contain;
  border-radius:40px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, filter 0.3s ease;
}

img:hover {
  transform: scale(1.1);
  filter: brightness(1.2);
}
.card-conte {
  text-align: left;
  flex: 1; 
}
.card-conte h5 {
  font-size: 20px;
  font-weight: bold; 
  margin: 0 0 10px; 
  color: #333; 
  transition: color 0.3s ease;
}

.card-conte p {
  font-size: 15px;
  color: #555;
  line-height: 1.4; 
  margin: 5px 0 0; 
}

.card-conte:hover h5 {
  color: crimson; 
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.card-conte:hover p {
  color: #3d3d3d; 
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.btn-comprar {
  background-color: #FAE9BF;
  color:#572618;
  box-shadow: 0 0 10px rgba(236, 139, 19, 0.795);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  display: block;          
  margin: 10px auto 0;     
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-comprar:hover {
  background-color: #f5dfa7;
  transform: scale(1.05);
}
.precio {
  display: block;
  font-size: 18px;
  font-weight: bold;
  color: green;
  margin: 10px 0;
}


footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; 
  padding: 10px 20px;
  background-color: #FAE9BF;
  box-shadow: 0 0 10px rgba(0,0,0,0.7);
  margin-top: 5%;
}


.pieP {
  display: flex;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
}


.pieP h5 {
  margin: 0;
  text-align: left;
  color: #572618;
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
  transition: color 0.3s ease;
}

.pieP a:hover {
  color: crimson;
}


.redes a {
  background: linear-gradient(to right, #A74099, #B8387F,#CE305B,#D82B4D,#DC2A41,#F0402B,#F3672A,#F68A2B,#FBBE28);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; 
  font-weight: bold;
}

</style>
