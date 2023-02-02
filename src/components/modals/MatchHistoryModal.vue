<template>
  <div class="main-container-match" @click.stop>
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
        <p>
          {{ ("0" + new Date(match.date).getDate()).slice(-2) }}/{{
            ("0" + parseInt(new Date(match.date).getMonth() + 1)).slice(-2)
          }}/{{ new Date(match.date).getFullYear() }}
        </p>
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
        this.matches = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
};
</script>

<style scoped lang="scss">
.main-container-match {
  background-color: #ebebeb;
  max-width: 1000px;

  padding: 30px;
  margin: 0px 20px;
  border-radius: 10px;

  box-shadow: 0 0 10px #000000;
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
