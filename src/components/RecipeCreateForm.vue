<template>
  <div class="recipe-create-form">
    <v-field
      label="Title"
      :error="errors.first('title')"
    >
      <v-input
        name="title"
        type="text"
        v-validate="'required'"
        :value="form.title"
        @input="(ev) => handleInput('title', ev)"
      />
    </v-field>

    <v-field
      label="Ingredients"
      help="separated by comma"
      :error="errors.first('ingredients')"
    >
      <v-input
        name="ingredients"
        type="textarea"
        v-validate="'required'"
        :value="form.ingredients"
        @input="(ev) => handleInput('ingredients', ev)"
      />
    </v-field>

    <v-field>
      <v-button
        text="Submit"
        color="is-primary"
        :loading="submitting"
        :disabled="submitting"
        @click="onSubmit"
      />
    </v-field>
  </div>
</template>

<script>
  export default {
    name: 'RecipeCreateForm',
    inject: ['$validator'],
    model: {
      prop: 'form',
      event: 'change',
    },
    props: {
      form: {
        type: Object,
        required: true,
      },
      onSubmit: {
        type: Function,
        required: true,
      },
      submitting: Boolean,
    },
    methods: {
      handleInput(field, ev) {
        const { value } = ev.target;

        this.$emit(
          'change',
          Object.assign({}, this.form, {
            [field]: value,
          }),
        );
      },
    },
  };
</script>

<style lang="scss">
  .recipe-create-form {
  }
</style>
