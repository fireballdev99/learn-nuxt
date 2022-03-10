<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="User ID:"
        label-for="type-number"
        description="Delete User"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: 0,
      },
      show: true,
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      await this.$axios.post('delete', { id: this.form.id })
      location.reload()
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