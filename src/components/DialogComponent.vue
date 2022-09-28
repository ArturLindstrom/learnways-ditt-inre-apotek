<template>
  <section class="wrapper" id="dialog">
    <div class="text-container">
      <p class="page-title">{{ data.dia_i_02 }}</p>
      <h2>
        {{ data.dia_02_h2 }}
      </h2>
      <p>
        {{ data.dia_02_p1 }}
      </p>
      <p class="read-more" @click="openModal">
        {{ data.dia_02_p2 }}
      </p>
      <!-- <p class="open" v-if="mq.current != 'xs' && mq.current != 'md'"> -->
      <p class="open" >
        {{ data.dia_02_open }}
      </p>
    </div>

    <div class="dialog-wrapper">
      <img src="/assets/img/apotek-kvinna.png" alt="" />
<!-- 
      <img src="/assets/img/apotek-kvinna.png" alt="" v-if="mq.current == 'xs' && mq.current == 'md'"> -->
      <DialogButton
        v-for="(button, i) in 4"
        :key="button"
        :text="data[`dia_hot_0${i + 1}`]"
        :class="'dialog-button' + (i + 1)"
        class="dialog-buttons"
      >
      </DialogButton>
    </div>
    <ModalComponent> </ModalComponent>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
import DialogButton from "./DialogButton.vue";
import ModalComponent from "./ModalComponent.vue";
import { useMq } from "vue3-mq";

const mq = useMq();
const store = useStore();
const data = store.state.data;
const modalContent = {
  heading: data.dia_popup_h_p02,
  body: data.dia_popup_p_p02,
};

const openModal = () => {
  console.log(data);
  store.commit("modalOpen", modalContent);
};
</script>

<style scoped lang="scss">
.wrapper {
  background-size: 90%;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  place-items: center;
}

.dialog-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  height: 100%;
}

img {
  /* max-height: 150%; */
  height: 150%;
  position: absolute;
  top: -40%;
  right: -10%;
}

.open {
  font-weight: bold;
  margin-top: 15px;
}

.dialog-buttons {
  position: absolute;
}

.dialog-button1 {
  top: -32%;
  left: 2%;
}

.dialog-button2 {
  top: -20%;
  left: -12%;
}

.dialog-button3 {
  top: -7%;
  left: -2%;
}

.dialog-button4 {
  top: 5%;
  left: -5%;
}

@media screen and (max-width: 768px) {
  .wrapper {
    grid-template-columns: 1fr;
    place-items: start;
  }


  /* .dialog-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
} */
 

 img{
  z-index: -1;
  position: static;
  width: 300%;
  margin-top: -120px;
  margin-left: 50px;
 } 

  .dialog-button1 {
    top: -20%;
    left: -4%;
  }

  .dialog-button2 {
    top: -10%;
    left: -15%;
  }

  .dialog-button3 {
    top: 0%;
    left: -5%;
  }

  .dialog-button4 {
    top: 8%;
    left: -3%;
  }
}
</style>
