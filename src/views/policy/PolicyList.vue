<template>
  <div>
    <heading>Policies</heading>
    <quote-policy-list :content="policies" type="policy" />
    <br />
  </div>
</template>

<script>
import api from '../../util/api.js'

import Heading from '@/components/Heading'

import QuotePolicyList from '@/components/QuotePolicyList'

export default {
  name: 'PolicyList',
  components: {
    Heading,
    QuotePolicyList
  },
  data() {
    return {
      policies: []
    }
  },
 async created() {
    this.policies = await api.getPolicies()
  }
}
</script>
