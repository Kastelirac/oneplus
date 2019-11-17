<template>
<section class="hero is-fullheight">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h3 class="title has-text-black">Prijavi se</h3>
                    <hr class="login-hr">
                    <p class="subtitle has-text-black">Prijavite se kako bi nastavili.</p>
                    <div class="box">
                        <form>
                            <div class="field">
                                <div class="control">                        
                                    <div class="control has-icons-left">
                                        <input class="input is-medium" type="email" placeholder="Vaš mail" autofocus="">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <div class="control has-icons-left">
                                    <input class="input is-medium" type="password" placeholder="Vaša lozinka">
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="field">
                                <label class="checkbox">
                  <input type="checkbox">
                  Zapamti me
                </label>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Prijavi se <i class="fa fa-sign-in" aria-hidden="true"></i></button>
                        </form>
                    </div>
                    <p class="has-text-grey">
                        <a href="../">Registrirajte se</a> &nbsp;·&nbsp;
                        <a href="../">Zaboravljena lozinka</a> &nbsp;·&nbsp;
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    
}
</script>   