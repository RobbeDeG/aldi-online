<template>
    <div class="checkout">
         <Navbar></Navbar>
         <div class="container">
          <h1 class="text-center p-5">Uw winkelmand</h1>
          <div class="row">
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product1.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">3x Golden Power €1.47</h5>
                            <a href="#" class="btn btn-primary">Remove from Cart</a>
                        </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product2.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">1x Zaranoff Wodka €11.49</h5>
                            <a href="#" class="btn btn-primary">Remove From Cart</a>
                        </div>
                    </div>
              </div>
              <div class="col-md-4">
                  <div class="card product-item">
                    <img src="/img/products/product3.jpg" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">2x Frietsticks zout of paprika €1.98</h5>
                            <a href="#" class="btn btn-primary">Remove From Cart</a>
                        </div>
                    </div>
              </div>
          </div>
                  <div class="col-md-4">
                      <p>
                          Total Price : €14.94
                      </p>
                    <button class='pay-with-stripe btn btn-primary mt-4' @click='pay()'>Pay with credit card</button>
                  </div>
              </div>
          </div>
  </template>
  
  <script>  
  
  export default {
      data () {
      return {

      }
    },

    methods: {
        pay() {
        alert('U wordt doorgenavigeerd naar de betaalpagina')
        }
    }   
  }
  </script>
  
  
  
  <style>

  .StripeElement {
    box-sizing: border-box;
  
    height: 40px;
  
    padding: 10px 12px;
  
    border: 1px solid transparent;
    border-radius: 4px;
    background-color: white;
  
    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }
  
  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }
  
  .StripeElement--invalid {
    border-color: #fa755a;
  }
  
  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
  </style>
  
  