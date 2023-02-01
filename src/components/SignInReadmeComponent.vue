<template>
  <div class="buttons-container">
    <button id="playButton" @click="showPlayModal = true">Play</button>
    <button id="whatIsButton" @click="showInfoModal = true">Info</button>
  </div>
  <div
    class="modal-container"
    v-if="showPlayModal === true"
    @click="showPlayModal = false"
  >
    <PlayModal />
  </div>
  <div
    class="modal-container"
    v-if="showInfoModal === true"
    @click="showInfoModal = false"
  >
    <InfoModal />
  </div>
</template>

<script>
import PlayModal from "@/components/modals/PlayModal.vue";
import InfoModal from "@/components/modals/InfoModal.vue";

export default {
  name: "SignInReadme",
  components: {
    PlayModal,
    InfoModal
  },
  data() {
    return {
      showPlayModal: false,
      showInfoModal: false
    };
  },
  methods: {
    closeModals() {
      this.showPlayModal = false;
      this.showInfoModal = false;
    }
  }
};
</script>

<style scoped lang="scss">
.buttons-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  align-items: center;
}

button {
  background-color: #17a317;
  color: white;
  font-size: 2rem;

  width: 130px;
  height: 60px;
  border-radius: 10px;

  text-align: center;
  cursor: pointer;
}

#playButton {
  background-color: #17a317;
}

#whatIsButton {
  background-color: rgb(102, 99, 255);
}

.modal-container {
  position: absolute;
  top: 0;

  background-color: #00000036;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (min-width: 992px) {
  .buttons-container {
    flex-direction: row;
    column-gap: 150px;
  }
}
</style>
