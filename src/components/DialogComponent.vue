<template>
  <section class="wrapper" id="dialog">
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

      <!-- <img src="/assets/img/old/apotek-kvinna.png" alt=""> -->
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
  background: url('/assets/img/old/apotek-kvinna.png') no-repeat  right -40% top 30%;
  /* background-color: #CFE0DF; */
  background-size: 90%;
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  place-items: center; 
}



.dialog-wrapper{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 100%;

}



.open{
  font-weight: bold;
  margin-top: 15px
}

.dialog-buttons{
  position: absolute;
}

.dialog-button1{
  top: -5%;
  left: -12%;
}

.dialog-button2{
  top: 10%;
  left: -28%;
}

.dialog-button3{
  top: 30%;
  left: -18%;
}

.dialog-button4{
  top: 40%;
  left: -19%;
}

@media screen and (max-width: 1600px) {
  .wrapper{
    background-position: right 0 top 30%;
    background-size: 70%;
  }


.dialog-button1{
  top: -15%;
  left: 2%;
}

.dialog-button2{
  top: -4%;
  left: -12%;
}

.dialog-button3{
  top: 15%;
  left: -2%;
}

.dialog-button4{
  top: 25%;
  left: -5%;
}
}

@media  screen and (max-width: 768px) {
  .wrapper{
    grid-template-columns: 1fr;
    background-position: center bottom 120%;
    background-size: 320%;
    /* background-size: calc(100vh - 100px); */
    place-items: start;
  }

  .dialog-wrapper{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
    height: 100%;
  }

  .dialog-button1{
    top: -30%;
    left: 7%;
  }

  .dialog-button2{
    top: -20%;
    left: -30%;
  }

  .dialog-button3{
    top: 10%;
    left: 5%;
  }

  .dialog-button4{
    top: 20%;
    left: -10%;
  }

  
  

}
</style>