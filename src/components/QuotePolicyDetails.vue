<template>
    <section class="quote-policy-details">
        <ul class="list list--unstyled list--padded">
            <li><strong>Id:</strong> {{ content.id }}</li>
            <li><strong>Status:</strong> {{ content.status }}</li>
            <li><strong>Date</strong>: {{ content.start_date | formatDate }} - {{ content.end_date | formatDate }}</li>
            <li v-if="customer.name"><strong>Customer</strong>:
                <router-link :to="`/customer/${customer.id}`">
                    {{ customer.name.first }} {{ customer.name.last }} ({{customer.id}})
                </router-link>
            </li>
        </ul>
        <br />
        <h2>Insured Entities</h2>
        <table class="table--styled">
            <tr>
                <th class="label-cell">ID</th>
                <th class="label-cell">Species</th>
                <th class="label-cell">Name</th>
                <th class="label-cell">DOB</th>
                <th class="label-cell">Breed</th>
            </tr>
            <tr v-for="entity in content.insured_entities" :key="entity.id">
                <td>{{ entity.id }}</td>
                <td>{{ entity.species }}</td>
                <td>{{ entity.name }}</td>
                <td>{{ entity.date_of_birth | formatDate }}</td>
                <td>{{ entity.breed }}</td>
            </tr>
        </table>
        <br />
        <h2>Products</h2>
        <table class="table--styled">
            <tr>
                <th class="label-cell">Type</th>
                <th class="label-cell">Annual Price</th>
                <th class="label-cell">Monthly Price</th>
            </tr>
            <tr v-for="(product, index) in content.products" :key="index">
                <td>{{ product.type }}</td>
                <td>&pound;{{ product.price.annual }}</td>
                <td>&pound;{{ product.price.monthly }}</td>
            </tr>
        </table>
    </section>
</template>

<script>
  export default {
    name: 'QuotePolicyDetails',
    props: {
      content: {
        type: Object,
        required: true
      },
      customer: {
        type: Object,
        required: true
      }
    }
  }
</script>
