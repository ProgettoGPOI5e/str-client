<template>
  <main class="main">
    <div class="card">
      <div class="card__body">
        <div class="row">
          <div class="col-1-of-1-">
            <p>La registrazione è andata a buon fine!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-1-of-1">
            <router-link
              class="login button button--yellow"
              tag="a"
              to="/login"
            >
              <span class="crop">
                Login
              </span>
              <span class="icon">
                <i class="fas fa-sign-in-alt"></i>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.main {
  position: relative;
  height: 100%;
  min-height: 60rem;

  .card {
    @include absCenter;
  }
}
</style>
