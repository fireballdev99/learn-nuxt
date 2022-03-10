<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="User ID:"
        label-for="type-number"
        description="Enter ID for Change Password"
      >
        <b-form-input
          id="type-number"
          v-model.number="form.id"
          type="number"
          placeholder="UserID"
          required
        />
      </b-form-group>
      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="type-password"
        description="New Password"
      >
        <b-form-input
          id="type-password"
          v-model="form.password"
          type="password"
          placeholder="New Password"
          required
        />
        <b-form-input
          id="type-password"
          v-model="form.repassword"
          type="password"
          placeholder="Re-Enter New Password"
          required
          class="mt-2 mb-2"
        />
        <div v-if="show === true" class="mt2">
          <b-alert show variant="danger">Password isn't match</b-alert>
        </div>
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
        id: null,
        password: '',
        repassword: '',
      },
      show: false,
      message: '',
    }
  },
  methods: {
    async onSubmit(event) {
      if (this.form.password !== this.form.repassword) {
        this.show = true
        this.form.password = ''
        this.form.repassword = ''
      } else {
        event.preventDefault()
        const value = {
          id: this.form.id,
          passwords: this.form.password,
        }
        await this.$axios.post('editpassword', value)
        location.reload()
      }
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.id = null
      this.form.password = ''
      this.form.repassword = ''
    },
  },
}
</script>