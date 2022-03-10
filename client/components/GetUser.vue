<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="User ID:"
        label-for="type-number"
        description="Input USERID for get data"
      >
        <b-form-input
          id="type-number"
          v-model.number="form.id"
          type="number"
          placeholder="Enter ID"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Result">
      <b-table striped hover :items="result"></b-table>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: 0,
      },
      result: [],
      show: true,
    }
  },
  created() {
    const fetchData = async () => {
      const data = await this.$axios.get('getall')
      this.users = data.data.user
    }
    fetchData()
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const data = await this.$axios.post('getuser', { id: this.form.id })
      this.result = data.data.user
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.id = 0
      this.result = []
    },
  },
}
</script>