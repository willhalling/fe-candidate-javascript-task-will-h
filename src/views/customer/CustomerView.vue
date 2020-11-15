<template>
  <div>
    <heading>Customer</heading>
    <br />
    <div class="columns">
      <div class="column">
        <h2>{{ customer.name.first }} {{ customer.name.last }}</h2>
        <ul class="list list--unstyled list--padded">
          <li><strong>Id:</strong> {{ customer.id }}</li>
          <li><strong>Email:</strong> <a :href="`mailto:${customer.email}`">{{ customer.email }}</a></li>
          <li><strong>Telephone</strong>: {{ customer.phone }}</li>
          <li><strong>Address:</strong> {{ customer.address }}</li>
        </ul>
      </div>
      <div class="column">
        <h2>Customer Quotes</h2>
        <ul class="list list--unstyled list--padded">
          <li v-for="quote in quotes">
            <router-link :to="`/quote/${quote.id}`">{{ quote.id }}</router-link>
          </li>
        </ul>
        <br />
        <h2>Customer Policies</h2>
        <ul class="list list--unstyled list--padded">
          <li v-for="policy in policies">
            <router-link :to="`/policy/${policy.id}`">{{ policy.id }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
import api from '../../util/api.js'

import Heading from '@/components/Heading'

export default {
  name: 'CustomerView',
  components: {
    Heading
  },
  data() {
    return {
      customerId: '',
      customer: {},
      quotes: [],
      policies: []
    }
  },
  async created() {
    this.customerId = this.$route.params.id
    this.customer = await api.getCustomer(this.customerId );
    this.quotes = await api.getCustomerQuotes(this.customerId);
    this.policies = await api.getCustomerPolicies(this.customerId);
  }
}
</script>
