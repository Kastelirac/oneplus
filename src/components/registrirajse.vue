<template>
    <div class="da">
        <br/><br/><br/><br/><br/>
        <section class="main-section">
            <div class="circle-main"></div>
            <div class="circle-main-m"></div>
            <div class="circle-main-s"></div>

            <div class="container white-bg">
            <div class="columns background component-row">
                <div class="column">
                <div class="padable">
                    <h1>Registriraj se <span class="line"></span></h1>

                    <div class="field">
                        <div class="control">
                            <div class="control has-icons-left">
                            <input class="input is-rounded is-medium is-success" type="text" placeholder="Vaše korisničko ime">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <p class="help is-success">Uneseno ime je dostupno</p>
                    </div>

                    <div class="field">
                        <div class="control">
                            <div class="control has-icons-left">
                            <input class="input is-danger is-rounded is-medium" type="email" placeholder="Email" >
                                <span class="icon is-small is-left">
                                    <i class="fa fa-envelope"></i>
                                </span>
                            </div>
                        </div>
                        <p class="help is-danger">This email is invalid</p>
                    </div>

                    <div class="field">
                    <div class="control">
                        <div class="control has-icons-left">
                            <input class="input is-rounded is-medium" type="password" placeholder="***********">
                            <span class="icon is-small is-left">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>                          
                    </div>
                    </div>
                    <div class="pls">
                        <div class="field">
                            <div class="control">
                                <label class="checkbox">
                                <input type="checkbox">
                                    Slažem se sa <a href="#">uvjetima i odredbama</a>
                                </label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                            <button class="button is-warning is-rounded">Napravite korisnički račun</button>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </section>
    </div>
</template>
<style scoped>
    .pls{
        text-align:center;
    }
    .da{
        margin:0 auto;
        max-width: 600px;
    }
</style>
<script>
export default{
    
}
</script>