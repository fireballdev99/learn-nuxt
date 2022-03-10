<!-- Please remove this file from your project -->
<template>
  <div class="mt-2">
    <!-- Via multiple directive modifiers -->
    <b-button v-b-toggle.collapse-a>Get user by id</b-button>
    <b-button v-b-toggle.collapse-b>Create User</b-button>
    <b-button v-b-toggle.collapse-c>Edit Password</b-button>
    <b-button v-b-toggle.collapse-d>Delete User</b-button>

    <!-- Via space separated string of IDs passed to directive value -->
    <!-- <b-button v-b-toggle="'collapse-a collapse-b'"
      >Toggle Collapse A and B</b-button
    > -->

    <!-- Via array of string IDs passed to directive value -->
    <!-- <b-button v-b-toggle="['collapse-a', 'collapse-b']"
      >Toggle Collapse A and B</b-button
    > -->

    <!-- Elements to collapse -->
    <b-collapse id="collapse-a" class="mt-2">
      <b-card>
        <GetUser />
      </b-card>
    </b-collapse>
    <b-collapse id="collapse-b" class="mt-2">
      <b-card>
        <CreateUser />
      </b-card>
    </b-collapse>
    <b-collapse id="collapse-c" class="mt-2">
      <b-card>
        <EditPassword />
      </b-card>
    </b-collapse>
    <b-collapse id="collapse-d" class="mt-2">
      <b-card>
        <DeleteUser />
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
}
</script>
