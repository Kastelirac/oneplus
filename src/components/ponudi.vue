
<template>
    <div class="da">
        <br/><br/><br/><br/>
        <h3 class="title has-text-black">Napravi događanje</h3>
        <div class="steps">
        <div class="step-item is-completed is-success">
            <div class="step-marker">
            <span class="icon">
                <i class="fa fa-check"></i>
            </span>
            </div>
            <div class="step-details">
            <p class="step-title">Step 1</p>
            <p>This is the first step of the process.</p>
            </div>
        </div>
        <div class="step-item is-active">
            <div class="step-marker"></div>
            <div class="step-details">
            <p class="step-title">Step 2</p>
            <p>This is the second step. You get here once you have completed the first step.</p>
            </div>
        </div>
        <div class="step-item">
            <div class="step-marker">3</div>
            <div class="step-details">
            <p class="step-title">Step 3</p>
            <p>This is the third step. One more step before the end.</p>
            </div>
        </div>
        <div class="step-item">
            <div class="step-marker">
            <span class="icon">
                <i class="fa fa-flag"></i>
            </span>
            </div>
            <div class="step-details">
            <p class="step-title">Step 4</p>
            <p>Final step. You have completed all the previous steps and end the process.</p>
            </div>
        </div>
        </div>
        <br/><br/><br/><br/><br/>
        <h6 class="title is-6">Navedite mjesto gdje će se dešavati</h6>
        <div class="field">
            <div class="control">                        
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="text" placeholder="Mjesto događaja">
                    <span class="icon is-small is-left">
                        <i class="fa fa-map-marker"></i>
                    </span>
                </div>
            </div>
        </div>
<br/><br/>
        <div id="googleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5404.716085454414!2d15.932798875278898!3d45.80038056327336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6b7cdd41863%3A0x5a31d185326a73df!2sChoco%20Caf%C3%A9%20Tre%C5%A1njevka!5e0!3m2!1shr!2shr!4v1574040496432!5m2!1shr!2shr" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
        </div>
        <h6 class="title is-6">Navedite vrijeme kad mislite početi</h6>
        <input type="date"><br/><br/>
        <div class="field">
            <div class="control">                        
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="text" placeholder="Troskovi">
                    <span class="icon is-small is-left">
                        <i class="fa fa-money"></i>
                    </span>
                    <p class="help"> Troskovi npr. dvorane za nogomet </p>
                </div>
            </div>
        </div>
        <div class="field">
            <div class="control">                        
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="text" placeholder="Broj osoba">
                    <span class="icon is-small is-left">
                        <i class="fa fa-group"></i>
                    </span>
                </div>
            </div>
        </div>
        <p>Dodatne pojedinosti</p>
        <textarea class="textarea" placeholder="Navedite dodatne informacije. Recimo, nemojte zaboraviti vodu."></textarea>
        <br/><br/><br/>
        <h3 class="title has-text-black">Već si član?</h3>
        <button class="button is-info is-rounded is-medium"><router-link to="registrirajse">Ne, registiracija </router-link></button><br/><br/>
        <button class="button is-info is-rounded is-medium"><router-link to="prijava">Da, prijava</router-link></button>

    </div>
</template>


<script>
export default {
    
}
</script>



<style scoped>
    .da{
        max-width: 600px;
        margin:0 auto;
    }
    
</style>


