<template>
<section class="info">
<h2>
    {{data.info_dia_h2}}
</h2>
<div class="text-wrapper">
    <div class="text-container">
      <h3>
          {{data.info_dia_h3_1}}
      </h3>
      <p>
        {{data.info_dia_p_1}}
      </p>
      <a href="mailto:hej@dittinreapotek.se">hej@dittinreapotek.se</a>
    </div>
    <div class="text-container">
      <h3>
          {{data.info_dia_h3_2}}
      </h3>
      <p>
        {{data.info_dia_p_2}}
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
import { useStore } from 'vuex';
const store = useStore();
const data = store.state.data;

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