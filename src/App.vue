<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="hero-head">
            <nav class="navbar is-transparent is-fixed-top">
                <div class="container">
                    <div class="navbar-brand">
                      <router-link to="/">
                        <a class="navbar-item" href="#">
                          <img src="./assets/plusone.png"  width="112" height="28">
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                      </router-link>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <span class="navbar-item">
                              <router-link to="pronadi">
                                <a class="button is-info is-outlined" href="#">
                                  <span class="icon">
                                    <i class="fa fa-search"></i>
                                </span>
                                    <span>Pronađi</span>
                                </a>
                              </router-link>
                            </span>
                            <span class="navbar-item">
                              <router-link to="ponudi">
                                <a class="button is-info is-outlined" href="#">
                                    <span class="icon">
                                        <i class="fa fa-plus"></i>
                                    </span>
                                    <span>Ponudi</span>
                                </a>
                              </router-link>
                            </span>
                            <span class="navbar-item">
                              <router-link to="registrirajse">
                                <a class="button is-info is-outlined" href="#">
                                    <span>Registriraj se</span>
                                </a>
                              </router-link>
                            </span>
                            <span class="navbar-item">
                              <router-link to="prijava">
                                <a class="button is-info is-outlined" href="">
                                    <span>Prijava</span>
                                </a>
                              </router-link>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="hero-body has-text-white">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 id="h1">
                          Dosadno mi je... Baš bih nešto radio.
                        </h1>
                        <h2 id="h2">
                          Pronalazak aktivnosti nikad nije bio lakši
                        </h2>
                        <button class="button is-info is-medium"><router-link to="pronadi">Pronađi aktivnosti</router-link></button>

                    </div>
                </div>
          </div> 
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
      #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        background-image: url(./assets/wallpaper.jpg);
        background-size: cover;
        background-repeat: no-repeat;

      }

      #h1{
        font-size:35px;
        font-weight: bold;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      #h2{
        font-size:25px;
      }
</style>
