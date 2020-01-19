<!-- <template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <div class="hero-head">
            <nav class="navbar is-transparent is-fixed-top">
                <div class="container">
                    <div class="navbar-brand">
                      <router-link to="/">
                        <a class="navbar-item" href="#">
                            <span>OnePlus</span>
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

    <router-view/>
  </div>
</template> -->
<template>
	<div id="app">
		<b-navbar class="is-transparent is-fixed-top">
			<template slot="brand">
				<router-link to="/">
					<b-navbar-item>
						<img src="./assets/plusone.png"  width="112" height="28">
					</b-navbar-item>
				</router-link>
			</template>
			<template slot="end">
			
				<b-navbar-item>
				  <router-link to="pronadi">
					<span>Pronađi</span>
				  </router-link>
				</b-navbar-item>
				
				<b-navbar-item>
					<router-link to="ponudi">
					  <span>Ponudi</span>
				  </router-link>
				</b-navbar-item>

				<b-navbar-item>
				  <router-link to="registrirajse">
					  <span>Registriraj se</span>
				  </router-link>
				</b-navbar-item>
				
				<b-navbar-item>
					<router-link to="prijava">
							<span>Prijava</span>
					</router-link>
				</b-navbar-item>
			</template>
		</b-navbar>
		<router-view/>
    </div>
</template>


<script>
export default {
  name: 'App',
}
</script>

<style>
      #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
      }


</style>
