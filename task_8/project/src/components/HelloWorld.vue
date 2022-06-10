<template>
  <div id="app">
    <table class="table">
      <thead>
        <tr>
          <td><strong>Utilizator</strong></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.name">
          <td>{{ row.name }}</td>
          <td>
            <div class="remove_icon" @click="removeRow(row)">X</div>
          </td>
        </tr>
      </tbody>
    </table>
    <div>
      Name:<input type="text" placeholder="Guest" v-model="name" />
      <button class="button btn-primary" @click="addRow(name)">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  el: "#app",
  data() {
    return {
      rows: [{ name: "Utilizator" }, { name: "Admin" }],
    };
  },
  methods: {
    addRow(name) {
      this.rows.push({ name: name });
    },
    removeRow(row) {
      const currIndex = this.rows.findIndex((item) => item.name === row.name);

      this.rows = this.rows.filter((x, i) => i !== currIndex);
      console.log(this.rows);
    },
  },
};
</script>

<style scoped>
@media (hover: hover) {
  tr:hover {
    background-color:#5af7b0;
  }
}
</style>