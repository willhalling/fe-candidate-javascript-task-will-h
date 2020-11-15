<template>
  <div>
    <heading>Policy</heading>
    <br />
    <quote-policy-details :content="policy" :customer="customer" />
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
        policy: {},
        customer: {}
      }
    },
    async created() {
      const policyId = this.$route.params.id;
      this.policy = await api.getPolicy(policyId);
      this.customerId = this.policy.customerId;
      this.customer = await api.getCustomer(this.customerId);
    }
  }
</script>
