<template>
  <div class="bodi">
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="hero-body has-text-white">
                <div class="container has-text-centered">
                    <div class="column is-6 is-offset-3">
                        <h1 id="h1">
                          Dosadno mi je... Baš bih nešto radio.
                        </h1>
                        <h2 id="h2">
                          Pronalazak aktivnosti nikad nije bio lakši
                        </h2>
                        <button class="button is-info is-rounded is-medium"><router-link to="pronadi">Pronađi aktivnosti</router-link></button>

                    </div>
                </div>
            </div> 
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
      .bodi{
        background-image: url(../assets/wallpaper.jpg);
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
