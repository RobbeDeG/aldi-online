<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link to="/" class="navbar-brand" href="#">
      <img src="/img/logo.png" alt="" width="50" height="50" class="d-inline-block align-text-top">
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link" href="#">Producten</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="#">FAQ</router-link>
        </li>
      </ul>
        <a class="btn btn-outline-success" data-toggle="modal" data-target="#login">LOGIN</a>
    </div>
  </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
