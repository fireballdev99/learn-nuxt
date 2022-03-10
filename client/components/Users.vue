<!-- Please remove this file from your project -->
<template>
  <div>
    <h1>Users Data</h1>
    <b-card class="mt-3" header="Users">
      <b-table striped hover :items="users"></b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'UsersData',
  data() {
    return {
      users: [],
    }
  },
  created() {
    const fetchData = async () => {
      const data = await this.$axios.get('getall')
      this.users = data.data.user
    }
    fetchData()
  },
}
</script>
