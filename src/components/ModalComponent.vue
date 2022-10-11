<template>
  <Transition name="modal-animation" @enter="showContent">
    <div class="modal" @click.self="closeModal" v-if="store.state.modalShown">
      <!-- npm package that traps tabindex to modal when modal is opened -->
      <focus-trap
        v-model:active="store.state.modalContentShown"
        v-if="store.state.modalShown"
        :initial-focus="() => $refs.close"
        :escape-deactivates="false"
      >
        <Transition name="modal-animation-inner" @enter="showCloseContainer">
          <div
            class="modal-content"
            v-if="store.state.modalContentShown"
            tabindex="0"
            
          >
            <div class="close-container">
              <p class="close-text" @click="closeModal">Stäng</p>
              <img
                id="close"
                class="close-icon"
                src="/assets/img-min/icon-close.svg"
                alt="Stäng"
                @click="closeModal"
                tabindex="0"
                @keyup.enter="closeModal"
                ref="close"   
              />
            </div>
            <div class="modal-content-inner">
              <h4 class="modal-heading">
                {{ store.state.modalContent.heading }}
              </h4>
              <div
                class="modal-body"
                v-html="store.state.modalContent.body"
              ></div>
            </div>
          </div>
        </Transition>
      </focus-trap>
    </div>
  </Transition>
</template>

<script setup>
import { useStore } from "vuex";
import { onMounted } from "vue";
import gsap from "gsap";
import { FocusTrap } from "focus-trap-vue";

const store = useStore();


onMounted(() => {
  window.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});
const showContent = () => {
  store.commit("modalContentOpen");
};

const showCloseContainer = () => {
  gsap.from(".close-container", {
    duration: 0.5,
    opacity: 0,
    y: 20,
    ease: "power2.out",
    delay: 0.5,
  });
};

const closeModal = () => {
  store.commit("modalContentClose");
  setTimeout(() => {
    store.commit("modalClose");
  }, 500);
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  z-index: 10;
  padding-top: 1rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center center;
}

.modal-content {
  background-color: #fefefe;
  border-radius: 10px;
  margin: auto;
  border: 1px solid #888;
  height: 70%;
  padding: 2.5rem 0;
  max-width: 55%;
  position: relative;
  overflow-y: auto;
  z-index: 11;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.close-container {
  position: fixed;
  display: grid;
  margin-top: 1rem;
  grid-template-columns: 15.5fr 1fr 1fr;
  grid-template-areas: ".. close-text close-icon";
  place-items: center;
}

.close-text {
  grid-area: close-text;
  &:hover {
    cursor: pointer;
  }
}

.close-icon {
  grid-area: close-icon;
  height: 38px;
  width: 38px;
  transition: all 0.25s ease-in-out;
  &:hover {
    cursor: pointer;
    transition: all 0.25s ease-in-out;
  }
}

.modal-content-inner {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  padding: 2rem 0;
}

.modal-body :deep(p) {
  margin-top: 20px;
}

.modal-body {
  margin-bottom: 30px;
}

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.5s ease-in-out;
}

.modal-animation-inner-leave-active {
  transition: all 0.5s ease-in-out;
}

.modal-animation-inner-enter-from {
  transform: translateY(100%);
}

.modal-animation-inner-leave-to {
  transform: translateY(100%);
}

@media screen and (max-width: 768px) {
  .modal {
    padding: 0;
  }
  .modal-content {
    max-width: 100%;
    height: 100%;
    border-radius: 0;
  }
  .close-container {
    top: 0;
    right: 5%;
    width: 38px;
  }
  .close-text {
    display: none;
  }
}
</style>
