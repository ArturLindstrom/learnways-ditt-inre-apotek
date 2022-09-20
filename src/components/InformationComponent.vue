<template>
<section class="info">
<h2>
    Om ditt inre apotek
</h2>
<div class="text-wrapper">
    <div class="text-container">
      <h3>
          Om hemsidan
      </h3>
      <p>
            Ditt inre apotek finns för att ge en vetenskaplig evidensbaserad utgångpunkt för vad vår mikrobiota är och vad som kan påverka den. Allt du läser här är information publicerad i vetenskapliga artiklar och vi strävar efter att uppdatera hemsidan så snart det kommer ny forskning.
      </p>
      <a href="mailto:hej@dittinreapotek.se">hej@dittinreapotek.se</a>
    </div>
    <div class="text-container">
      <h3>
          Kontakt
      </h3>
      <p>
          Vi som skapat webbutbildningen är läkare och sjuksköterskor på Strama Stockholm. Vårt uppdrag är att verka för en klok antibiotikaanvändning. Vi har inga ekonomiska intressen eller andra typer av jäv i förhållande till denna webbutbildning.  
      </p>
      <div class="img-container">
        <img src="public/assets/img/strama-logo-new.svg" alt="" width="187">
        <img src="public/assets/img/lw-logo-new.svg" alt="" width="187">
      </div>
    </div>
</div>
</section>
</template>

<script setup>

</script>

<style scoped lang='scss'>
.info{
    background-color: #F8D9D9;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.text-wrapper{
   display: grid;
    grid-template-columns: 1fr 1fr;
    place-items:start;
    column-gap: 120px;
}

.text-container{
    /* padding: 2rem; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 530px
}

.img-container{
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    gap: 20px;
    width: 100%;
    margin-top: 27px
}

h2{
  margin-bottom:103px
}
</style>