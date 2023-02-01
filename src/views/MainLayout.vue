<template>
  <div class="main-layout">
    <div class="header-container">
      <h1>PREGUNTADOS</h1>
      <h1>T-CHILDREN</h1>
    </div>
    <div class="treasure-container">
      <TreasureChestComponent />
    </div>
    <div class="sign-in-read-me-container">
      <SignInReadmeComponent />
    </div>
    <div class="main-content">
      <div class="dynamic-duo-container">
        <DynamicDueComponent />
      </div>
      <div class="match-queue-container">
        <MatchQueueComponent />
      </div>
    </div>
  </div>
</template>

<script>
import DynamicDueComponent from "@/components/DynamicDueComponent.vue";
import MatchQueueComponent from "@/components/MatchQueueComponent.vue";
import SignInReadmeComponent from "@/components/SignInReadmeComponent.vue";
import TreasureChestComponent from "@/components/TreasureChestComponent.vue";

export default {
  name: "MainLayout",
  components: {
    TreasureChestComponent,
    MatchQueueComponent,
    DynamicDueComponent,
    SignInReadmeComponent
  }
};
</script>

<style scoped lang="scss">
.main-layout {
  min-height: 100vh;

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
.sign-in-read-me-container {
  display: flex;
  justify-content: center;

  margin: 50px 0px 20px 0px;
}
.treasure-container {
  width: 100vw;
  display: flex;
  justify-content: center;

  margin: -40px 0px 20px 0px;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  .match-queue-container {
    background-color: #e100ff13;

    height: fit-content;
    padding: 10px 20px;
    margin: 30px 0px;
    border-radius: 20px;
  }
}

@media only screen and (min-width: 992px) {
  .main-content {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    .dynamic-duo-container {
      display: flex;
      flex-direction: column;
    }
    .match-queue-container {
      width: 30%;
    }
  }
}
</style>
