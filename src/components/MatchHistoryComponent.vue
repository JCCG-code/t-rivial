<template>
  <div class="main-container-match">
    <!-- Row header -->
    <div class="row-match row-header">
      <p>Players</p>
      <p>Match date</p>
      <p>Result</p>
    </div>
    <!-- Row matches from API -->
    <div v-for="match in matches" :key="match">
      <div class="row-match">
        <p>{{ match.player1 }} - {{ match.player2 }}</p>
        <p>{{ match.date }}</p>
        <p>{{ match.result }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MatchHistory",
  data() {
    return {
      matches: []
    };
  },
  async created() {
    await this.axios
      .get("/match")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
</script>

<style scoped lang="scss">
.main-container-match {
  height: 215px;
  overflow-y: scroll;
  .row-header p {
    width: 100%;
    font-size: 1.2rem;
  }
  .row-match {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    padding: 7px 0px;

    p {
      text-align: center;
    }
  }
}
@media only screen and (min-width: 992px) {
  p {
    width: 200px;
  }
}
</style>
