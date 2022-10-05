<template>
  <section class="info">
    <h2>
      {{ data.info_dia_h2 }}
    </h2>
    <div class="text-wrapper">
      <div class="text-container">
        <h3>
          {{ data.info_dia_h3_1 }}
        </h3>
        <p>
          {{ data.info_dia_p_1 }}
        </p>
        <a href="mailto:hej@dittinreapotek.se">hej@dittinreapotek.se</a>
      </div>
      <div class="text-container">
        <h3>
          {{ data.info_dia_h3_2 }}
        </h3>
        <p>
          {{ data.info_dia_p_2 }}
        </p>
        <div class="img-container">
          <img src="/assets/img-min/strama-logo-new.svg" alt="" width="187" />
          <img src="/assets/img-min/lw-logo-new.svg" alt="" width="187" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from "vuex";
const store = useStore();
const data = store.state.data;
</script>

<style scoped lang="scss">
.info {
  background-color: #f8d9d9;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 0 0;
}

.text-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: start;
  column-gap: 120px;
}

.text-container {
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 530px;
}

.img-container {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 27px;
}

h2 {
  margin-bottom: 103px;
}

@media screen and (max-width: 768px) {
  .text-wrapper {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 100%;
    place-items: center;
  }
  .text-container {
    max-width: 70%;
  }
  .img-container {
    justify-content: center;
    & img {
      width: 150px;
    }
  }
  h2 {
    margin: 100px 0 50px;
  }
}
</style>
