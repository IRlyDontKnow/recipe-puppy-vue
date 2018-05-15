<template>
  <v-page
    class="addRecipe"
    title="Add recipe"
  >
    <template v-if="!authenticated">
      <div class="notification">
        You are not logged in. Log in to continue!
      </div>
      <router-link
        :to="loginTarget"
        class="button is-primary addRecipe__loginButton"
      >
        Login!
      </router-link>
    </template>
    <template v-else>
      <div class="notification is-success" v-if="submitted">
        New recipe has been successfully created!
      </div>
      <recipe-create-form
        v-model="form"
        :submitting="submitting"
        :on-submit="handleSubmit"
      />
    </template>
  </v-page>
</template>

<script>
  import RecipeCreateForm from '@/components/RecipeCreateForm.vue';
  import { mapState, mapActions } from 'vuex';

  const FORM_DEFAULTS = {
    title: null,
    ingredients: null,
  };

  export default {
    name: 'AddRecipe',
    $_veeValidate: { validator: 'new' },
    data() {
      return {
        form: Object.assign({}, FORM_DEFAULTS),
        submitting: false,
        submitted: false,
        errorMessage: 'An error occured while adding recipe.',
      };
    },
    methods: {
      ...mapActions({
        addRecipe: 'recipes/addRecipe',
      }),
      async handleSubmit() {
        const {
          addRecipe, form, resetForm, submitting, $validator,
        } = this;

        if (submitting || !await $validator.validateAll()) {
          return;
        }

        try {
          this.submitting = true;
          await addRecipe(form);
          resetForm();

          this.submitted = true;
        } catch (error) {
          this.errorMessage = 'An error occured while adding recipe.';
        } finally {
          this.submitting = false;
        }
      },
      resetForm() {
        this.form = Object.assign({}, FORM_DEFAULTS);
      },
    },
    computed: {
      ...mapState({
        authenticated: state => state.auth.authenticated,
      }),
      loginTarget() {
        return { name: 'login', query: { returnPath: this.$route.path } };
      },
    },
    components: {
      RecipeCreateForm,
    },
  };
</script>
