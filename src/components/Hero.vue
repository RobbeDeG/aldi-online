<template>
    <div class="hero">
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            <div class="col-md-5">
              <div class="hero-content">
                <h1 class="hero-title">
                  Leer meer over ons
                </h1>
                <p>
                  Wij bij Aldi-Online zijn zeer gedreven om onze klanten te helpen met het vinden wat ze zoeken. Bestel vandaag voor 22:00 en ontvang het morgen in huis! Dit alles doen wij aan een zo laag mogelijke prijs. 
                </p>
                <div class="hero-btn mt-5">
                  <router-link to="/about" class="btn custom-btn btn-info mr-4">Meer info over leveringen</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-7">
                <div class="graphic">
                    <img src="/img/svg/graphic.svg" alt="">
                </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Hero",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hero{
    padding-top: 7rem;
    width: 100%;
    height: 500px;
    text-align: left;
  }

</style>
