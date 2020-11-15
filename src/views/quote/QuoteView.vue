<template>
  <div>
    <heading>Quote</heading>
    <br />
    <quote-policy-details :content="quote" :customer="customer" />
  </div>
</template>

<script>
  import api from '../../util/api.js'

  import Heading from '@/components/Heading'

  import QuotePolicyDetails from '@/components/QuotePolicyDetails'

  export default {
    name: 'QuoteView',
    components: {
      Heading,
      QuotePolicyDetails
    },
    data() {
      return {
        quote: {},
        customer: {}
      }
    },
    async created() {
      const quoteId = this.$route.params.id;
      this.quote = await api.getQuote(quoteId);
      this.customerId = this.quote.customerId;
      this.customer = await api.getCustomer(this.customerId);
    }
  }
</script>
