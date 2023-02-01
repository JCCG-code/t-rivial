<template>
  <div class="main-container-queue">
    <!-- Row header -->
    <div class="row-header">
      <p>Matches in coming!</p>
    </div>
    <!-- Row matches from API -->
    <div v-for="queue in queueMatches" :key="queue">
      <div class="row-match">
        <p>{{ queue.player1 }} - {{ queue.player2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchHistory",
  data() {
    return {
      queueMatches: []
    };
  },
  async created() {
    await this.axios
      .get("/queue")
      .then((response) => {
        this.queueMatches = response.data.queue;
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
</script>

<style scoped lang="scss">
.main-container-queue {
  height: 215px;
  overflow-y: scroll;
  .row-header p {
    font-size: 1.7rem;
    margin: 10px 0px;
    text-align: center;
  }
  .row-match {
    padding: 7px 0px;

    p {
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
</style>
