<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="type-number"
        description="Enter Username for create"
      >
        <b-form-input
          id="type-number"
          v-model="form.username"
          type="text"
          placeholder="Create Username"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="type-password"
        description="Set Password"
      >
        <b-form-input
          id="type-password"
          v-model="form.password"
          type="password"
          placeholder="Create Password"
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
        username: '',
        password: '',
      },
      show: true,
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const value = {
        username: this.form.username,
        passwords: this.form.password,
      }
      await this.$axios.post('create', value)
      location.reload()
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.username = ''
      this.form.password = ''
    },
  },
}
</script>