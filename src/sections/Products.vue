<template>
  <div class="products" id="products">
      <div class="container">
          <h1 class="text-center p-5">Onze Producten</h1>
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
                               Pirato frietsticks zijn overheerlijke chips die in de vorm van frietjes zijn gesneden en verkrijgbaar in twee smaken: zout en paprika. Ze zijn te verkrijgen in een zak van 200 gram en kosten €0.99 en zijn ideaal voor avondje naar een film kijken met het gezin of een feestje met vrienden.
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
          <div class="row">
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product4.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aardbeidrink 6st €1.59</h5>
                            <p class="card-text">
                                gefermenteerde magere melkdrank met aardbeisap, thermisch behandeld. Dit is een perfecte drank voor uw kinderen. Het is een gezonde drank met een heerlijke smaak. Het is een drank die je kinderen zeker zullen lusten.                          
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product5.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Appelsap 6st €1.99</h5>
                            <p class="card-text">
                                100 % zuiver sap uit geconcentreerd appelsap. Deze appelsap is perfect voor een gezellige avond met vrienden of familie. Het is een gezonde drank om te mengen met onze Zaranoff Wodka voor een lekkere cocktail.
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product6.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">Aardbeienconfituur €1.19</h5>
                            <p class="card-text">
                                bereid met 50 g aardbeien per 100 g. Dit is perfect voor op de boterham of op een toostje met een kopje koffie of thee. Serveertip: lekker op een boterham of een toastje met een laagje boter.                      
                            </p>
                            <a href="#" class="btn btn-primary">Add to Cart</a>
                        </div>
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "Products",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .products{
        margin-top: 7rem;
        background: #f2f2f2;
        padding-bottom: 3rem;
    }
</style>
