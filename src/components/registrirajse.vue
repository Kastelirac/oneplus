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
                    <h3 class="title has-text-black">Registriraj se</h3>
                    <hr class="login-hr">
                    <p class="subtitle has-text-black">Registrirajte se kako bi koristili naše usluge brže i lakše.</p>
<!--
                    <div class="field">
                        <div class="control">
                            <div class="control has-icons-left">
                            <input class="input is-rounded is-medium" type="text" placeholder="Vaše korisničko ime">
                                <span class="icon is-small is-left">
                                    <i class="fa fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <p class="help is-success">Uneseno ime je dostupno</p> 
                    </div>
-->
                    <form @submit.prevent="onSignup">
                        <div class="field">
                            <div class="control">
                                <div class="control has-icons-left">
                                <input class="input is-rounded is-medium"
                                    name="email"
                                    label="Mail"
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <!-- <p class="help is-danger">This email is invalid</p> -->
                        </div>

                        <div class="field">
                            <div class="control">
                                <div class="control has-icons-left">
                                    <input class="input is-rounded is-medium" 
                                        name="password"
                                        label="Password"
                                        id="password"
                                        v-model="password"
                                        type="password"
                                        required>
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>                          
                            </div>
                        </div>
                        
                        <div class="field">
                            <div class="control">
                                <div class="control has-icons-left">
                                    <input class="input is-rounded is-medium" 
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        id="confirmPassword"
                                        v-model="confirmPassword"
                                        type="password"
                                        :rules="[comparePasswords]" 
                                        placeholder="Ponovno unesite lozinku">
                                    <span class="icon is-small is-left">
                                        <i class="fa fa-lock"></i>
                                    </span>
                                </div>                          
                            </div>
                        </div>
                        <div class="pls">
                            <div class="field">
                                <div class="control">
                                    <button type="submit" class="button is-warning is-rounded">Napravite korisnički račun</button>
                                </div>
                            </div>
                        </div>
                    </form>
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
        display:inline-block;
        margin:0 auto;
    }
    .da{
        margin:0 auto;
        max-width: 600px;
    }
</style>
<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    computed: {
      comparePasswords () {
        return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
      },
      user () {
        return this.$store.getters.user
      },
        error () {
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
        onSignup () {
            this.$store.dispatch('signUserUp', {email: this.email, password: this.password})
      }
    }
  }
</script>