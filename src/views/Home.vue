<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="hero">
      <h1>Welkom bij de ALDI Online</h1>
      <p>Ontdek onze geweldige aanbiedingen en kwaliteitsvolle producten</p>
      <a href="/" class="btn">Bekijk ons assortiment</a>
    </div>
    <div class="featured-products">
      <h2>Uitgelichte producten</h2>
      <div class="container">
        <div class="row">
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Golden Power €0.49</h5>
                            <p class="card-text">
                                Golden Power is een energiedrank met een hoog cafeïne-gehalte. Het is een in zijn marktsegment goedkope energiedrank die onder andere verkrijgbaar is bij de Aldi, en vooral populair is onder jongeren. Het drankje bevat 30 mg cafeïne per 100 ml, een stof die een energiek gevoel geeft.
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Zaranoff Wodka €11.49</h5>
                            <p class="card-text">
                                Zaranoff is een merk van wodka dat voornamelijk wordt verkocht door ALDI in Duitsland, België en Denemarken. Het wordt geproduceerd door een bedrijf genaamd Rückforth GMBH in Rottenburg. Het heeft een alcoholpercentage van 37.5% en is ideaal voor cocktails.                         
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>

              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Frietsticks zout of paprika €0.99</h5>
                            <p class="card-text">
                               Pirato frietsticks zijn overheerlijke chips die in de vorm van frietjes zijn gesneden en verkrijgbaar in twee smaken: zout en paprika. Ze zijn te verkrijgen in een zak van 200 gram en kosten €0.99 en zijn ideaal voor een feestje of een avondje tv kijken.
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    </div>
    <Hero></Hero>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";
import Products from "@/sections/Products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Hero,Products,Login
  }
};
</script>

<style>

</style>

