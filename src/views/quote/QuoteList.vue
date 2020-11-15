<template>
  <div>
    <heading>Quotes</heading>
    <quote-policy-list :content="quotes" type="quote" />
    <br />
  </div>
</template>

<script>
import api from '../../util/api.js'

import Heading from '@/components/Heading'

import QuotePolicyList from '@/components/QuotePolicyList'

export default {
  name: 'QuoteList',
  components: {
    Heading,
    QuotePolicyList
  },
  data() {
    return {
      quotes: []
    }
  },
  async created() {
    this.quotes = await api.getQuotes();
  }
}
</script>
