<template>
  <div>
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
      matches: [
        {
          player1: "Player 1",
          player2: "Player 2",
          date: "dd/mm/yyyy",
          result: "0 6"
        },
        {
          player1: "Player 1",
          player2: "Player 2",
          date: "dd/mm/yyyy",
          result: "0 6"
        },
        {
          player1: "Player 1",
          player2: "Player 2",
          date: "dd/mm/yyyy",
          result: "0 6"
        },
        {
          player1: "Player 1",
          player2: "Player 2",
          date: "dd/mm/yyyy",
          result: "0 6"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.row-match {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  padding: 10px 0px;

  p {
    text-align: center;
    font-size: 1.2rem;
  }
}
.row-header p {
  width: 100%;
  text-shadow: 0 0 5px #00000070;
}
</style>
