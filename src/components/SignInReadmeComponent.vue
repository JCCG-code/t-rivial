<template>
  <div class="buttons-container">
    <button id="whatIsButton" @click="showInfoModal = true">Info</button>
    <button id="playButton" @click="showPlayModal = true">Play</button>
    <button id="matchHistoryButton" @click="showMatchHistoryModal = true">
      Matches
    </button>
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
  <div
    class="modal-container"
    v-if="showMatchHistoryModal === true"
    @click="showMatchHistoryModal = false"
  >
    <MatchHistoryModal />
  </div>
</template>

<script>
import PlayModal from "@/components/modals/PlayModal.vue";
import InfoModal from "@/components/modals/InfoModal.vue";
import MatchHistoryModal from "@/components/modals/MatchHistoryModal.vue";

export default {
  name: "SignInReadme",
  components: {
    PlayModal,
    InfoModal,
    MatchHistoryModal
  },
  data() {
    return {
      showPlayModal: false,
      showInfoModal: false,
      showMatchHistoryModal: false
    };
  },
  methods: {
    closeModals() {
      this.showPlayModal = false;
      this.showInfoModal = false;
      this.showMatchHistoryModal = false;
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

  width: 200px;
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
#matchHistoryButton {
  background-color: rgb(238, 194, 0);
}

.modal-container {
  position: fixed;
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
