<template>
  <div class="heading">
      <component
        :is="type">
        <slot/>
      </component>
  </div>
</template>

<script>
  export default {
    name: 'Heading',
    props: {
      type: {
        type: String,
        default: 'h1'
      }
    }
  }
</script>

<style lang="scss">
    .heading {
        border-bottom: 1px solid #c3cfd4;
        margin-bottom: 2em;
    }
</style>
