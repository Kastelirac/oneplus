
<template>
        <article class="hero-body has-background-dark">
            <div class="container">
                <h1 class="title has-text-white-ter has-text-centered">Stranica</h1>
                <h2 class="subtitle has-text-centered">Podnaslov</h2>

                <div class="columns is-mobile">
                    <div class="column is-half is-offset-one-quarter has-background-light"></div>
                </div>
            </div>
        </article>
</template>

<script>
export default {
  name: "Pocetna",
  beforeCreate: function() {
        document.body.className = 'home';
    }
}
</script>

<style scoped>
    article {
        margin-top: 800px;
    }
    
</style>


