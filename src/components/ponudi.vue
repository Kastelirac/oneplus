
<template>
    <div class="container">

        <h1>Što želiš raditi?</h1>
        <nav class="panel">
            <p class="panel-heading">
                Aktivnosti
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Search">
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>
            <p class="panel-tabs">
                <a class="is-active">Sve</a>
                <a>Sport</a>
                <a>Društvene igre</a>
                <a>E-sportovi</a>
                <a>Random</a>
            </p>
            <a class="panel-block is-active">
                <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                Mali nogomet
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                marksheet
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                minireset.css
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                <i class="fas fa-book" aria-hidden="true"></i>
                </span>
                jgthms.github.io
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                daniellowtw/infboard
            </a>
            <a class="panel-block">
                <span class="panel-icon">
                <i class="fas fa-code-branch" aria-hidden="true"></i>
                </span>
                mojs
            </a>
            <label class="panel-block">
                <input type="checkbox">
                remember me
            </label>
            <div class="panel-block">
                <button class="button is-link is-outlined is-fullwidth">
                Reset all filters
                </button>
            </div>
        </nav>
    </div>
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


