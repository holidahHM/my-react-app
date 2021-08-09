<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Create an account</h1>
              <p class="text-lead text-white">Welcome at Octagon Africa</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg
          x="0"
          y="0"
          viewBox="0 0 2560 100"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-transparent pb-5">
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <img src="img/brand/Octagon_logo.png" />
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <validation-observer v-slot="{ handleSubmit }" ref="formValidator">
                <b-form
                  role="form"
                  method="post"
                  @submit.prevent="handleSubmit(onSubmit)"
                >
                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-hat-3"
                    placeholder="Name"
                    name="Name"
                    :rules="{ required: true }"
                    v-model="model.username"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-email-83"
                    placeholder="Email"
                    name="Email"
                    :rules="{ required: true, email: true }"
                    v-model="model.user_email"
                  >
                  </base-input>

                  <base-input
                    alternative
                    class="mb-3"
                    prepend-icon="ni ni-lock-circle-open"
                    placeholder="password"
                    type="password"
                    name="Password"
                    :rules="{ required: true, min: 6 }"
                    v-model="model.password"
                  >
                  </base-input>
                  <div class="text-muted font-italic">
                    <small
                      >password strength:
                      <span class="text-success font-weight-700">strong</span></small
                    >
                  </div>
                  <b-row class="my-4">
                    <b-col cols="12">
                      <base-input
                        :rules="{ required: { allowFalse: false } }"
                        name="Privacy"
                        Policy
                      >
                        <b-form-checkbox v-model="model.agree">
                          <span class="text-muted"
                            >I agree with the <a href="#!">Privacy Policy</a></span
                          >
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button
                      type="submit"
                      variant="primary"
                      class="mt-4"
                      @click="saveSystemUser"
                      >Create account</b-button
                    >
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { saveUser } from "../../api/users.api";
export default {
  name: "register",
  data() {
    return {
      model: {
        username: "",
        user_email: "",
        password: "",
        agree: false,
      },
    };
  },
  created() {
    this.model.username = this.$route.params.details.p_name;
    this.model.user_email = this.$route.params.details.p_email;
  },
  methods: {
    addItem() {
      this.items.push({
        entity: "",
      });
    },
    async saveSystemUser() {
      this.error = "";
      let response = "";
      try {
        this.$loading.show({ delay: 0 });
        response = await saveUser(
          this.model.username,
          this.model.user_email,
          this.model.password
        );
        console.log(response.data);
      } catch (e) {
        this.$loading.hide();
        let respmess = insuranceErrors.getErrorMessages(e.response.status);
        this.error = respmess;
        throw respmess;
      }
      this.$loading.hide();
      if (response.status === 200) {
        alert("data saved successfully");
      }
    },
  },
};
</script>
<style></style>
