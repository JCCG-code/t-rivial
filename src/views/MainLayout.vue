<template>
  <div class="main-layout">
    <div class="header-container">
      <h1>PREGUNTADOS 2</h1>
      <h1>T-CHILDREN</h1>
    </div>
    <div class="treasure-container">
      <TreasureChestComponent />
    </div>
    <div class="match-history-container">
      <MatchHistoryComponent />
    </div>
  </div>
</template>

<script>
import MatchHistoryComponent from "@/components/MatchHistoryComponent.vue";
import TreasureChestComponent from "@/components/TreasureChestComponent.vue";

export default {
  name: "MainLayout",
  components: {
    TreasureChestComponent,
    MatchHistoryComponent
  }
};
</script>

<style scoped lang="scss">
.main-layout {
  height: 100vh;

  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 255, 0.3),
    rgba(0, 128, 0, 0.3),
    rgba(255, 255, 0, 0.3),
    rgba(255, 166, 0, 0.3),
    rgba(255, 0, 0, 0.3),
    rgba(255, 192, 203, 0.3),
    rgba(128, 0, 128, 0.3)
  );
}

.header-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 6%;

  h1 {
    font-size: 2rem;
    color: white;
    text-shadow: 0 0 5px #000000;
  }
}

.treasure-container {
  position: absolute;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.match-history-container {
  position: relative;
  top: 180px;

  max-width: 550px;
  margin: 0 6%;
}
</style>
