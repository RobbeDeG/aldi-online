<template>
    <div class="adminproducts">
        <div class="container h-100">
            <div class="intro h-100">
              <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6">
                   <h3>Admin Products Page</h3>
                   <p>
                     Dit is de pagina waar een admin de producten kan beheren.
                   </p>
                </div>
                <div class="col-md-6">
                    <img src="/img/svg/products.svg" alt="" class="img-fluid">
                </div>
              </div>
            </div>

        <hr>
        
        <h3>Add Product</h3>
        <div class="product-test">
          <div class="form-group">
            <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
          </div>
          
          <div class="form-group">
            <input type="text" placeholder="Price" v-model="product.price" class="form-control">
          </div>

          <div class="form-group">
            <button @click="saveData" class="btn btn-primary">Save Data</button>
          </div>
        <hr>

        <h3>Products List</h3>

          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Modify</th>
                </tr>
              </thead>

              <tbody>

                <tr v-for = "product in products" :key="product.name">
                  <td> {{product.data().name}} </td>
                  <td> {{product.data().price}} </td>
                  <td>
                    <button @click="editProduct(product)" class="btn btn-primary">Edit</button>
                    <button @click="deleteProduct(product)" class="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> 

      <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="EditProductLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Product</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <input type="text" placeholder="Product Name" v-model="product.name" class="form-control">
              </div>
              
              <div class="form-group">
                <input type="text" placeholder="Price" v-model="product.price" class="form-control">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>

  import {fb, db} from '../firebase'
  import { collection, addDoc, getDocs, deleteDoc, doc} from 'firebase/firestore';
  import { Modal } from 'bootstrap';
  import bootstrap from 'bootstrap'
  export default {
    name: "AdminProducts",
    props: {
      msg: String
    },
    data(){
      return {
        products: [],
        product: {
          name:null,
          price:null
        },
        myModal: null
      }
    },
    mounted(){
      this.ReadData();
      this.myModal = new Modal(document.getElementById('edit'));
    },
    methods:{
      editProduct(product) {
        this.myModal.show();
        this.product = product.data();
      },
      deleteProduct(docu) {
        if (confirm('Are you sure you want to delete this product?')) {
          const docRef = doc(db, 'products', docu.id);

          deleteDoc(doc(db, 'products', docu.id))
            .then(() => {
              console.log('Product deleted');
            })
            .catch((error) => {
              console.log('Error deleting product:', error);
            });
        } else {
          console.log('Product not deleted');
        }
        this.ReadData();
      },
      saveData() {
        try {
          const docRef = addDoc(collection(db, 'products'), this.product);
          console.log("Document written with ID:", docRef.id);
          this.reset();
        } catch (error) {
          console.error("Error adding document:", error);
        }
        this.ReadData();
      },

      reset(){
        Object.assign(this.$data, this.$options.data.apply(this));
      },

      ReadData() {
        const collectionRef = collection(db, 'products');
        this.products = [];
        getDocs(collectionRef)
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.products.push(doc);
            });

            console.log('Products:', this.products);
          })
          .catch((error) => {
            console.log('Error getting documents:', error);
          });
      }
     }
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  
  </style>
  