<template>
  <section class="wrapper">
    <div class="text-container">
      <p class="page-title">{{data.dia_i_02}}</p>
      <h2>
        {{data.dia_02_h2}}
      </h2>
      <p>
        {{data.dia_02_p1}}
      </p>
      <p class="read-more"
      @click="openModal">
        {{data.dia_02_p2}}
      </p>
      <p class="open">
        {{data.dia_02_open}}
      </p>
    </div>

    <div class="dialog-wrapper" >

      <img src="/assets/img/apotek-kvinna.png" alt="">
      <DialogButton 
      v-for="(button, i) in 4" :key="button"
      :text="data[`dia_hot_0${i+1}`]"
      :class= "'dialog-button' + (i+1)"
      class="dialog-buttons"
      
      >
      </DialogButton>
    </div>
    <ModalComponent>
      
    </ModalComponent>
  </section>
</template>

<script setup>
  import { useStore } from 'vuex';
import DialogButton from './DialogButton.vue';
import ModalComponent from './ModalComponent.vue';
  const store = useStore();
  const data = store.state.data;
  const modalContent = {heading:data.dia_popup_h_p02,  body:data.dia_popup_p_p02}

  const openModal = () => {
    console.log(data)
    store.commit('modalOpen', modalContent )
  }

</script>

<style scoped lang='scss'>
.wrapper{
  background-color: #CFE0DF;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center; 
}


h2{
  margin-bottom: 46px;
}

.dialog-wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  } */
}

.read-more{
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  width: 50%;
  &::after
  {
    content: "";
    height: 0.5em;
    width: 1em;
    margin-left: 0.5em;
    display: inline-block;
    background-image: url(assets/img/arrow.svg);
    background-position: center;
    background-repeat: no-repeat;
    
  }
}

.open{
  font-weight: bold;
  margin-top: 15px
}

.dialog-buttons{
  position: absolute;
}

.dialog-button1{
  top: -12%;
  left: 1%;
}

.dialog-button2{
  top: -4%;
  right: 8%;
}

.dialog-button3{
  top: 6%;
  left: -2%;
}

.dialog-button4{
  top: 13%;
  right: 5%;
}
</style>