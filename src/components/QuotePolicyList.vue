<template>
    <section class="quote-policy-list">
        <table class="table--styled">
            <tr>
                <th class="label-cell">ID</th>
                <th class="label-cell">Status</th>
                <th class="label-cell">Date</th>
                <th class="label-cell">Customer</th>
                <th class="empty-cell"></th>
            </tr>
            <tr v-for="item in content" :key="item.id">
                <td>
                    <router-link :to="`/${type}/${item.id}`">
                        {{ item.id }}
                    </router-link>
                </td>
                <td>{{ item.status }}</td>
                <td>{{ item.start_date | formatDate }} - {{ item.end_date | formatDate }}</td>
                <td>
                    <router-link :to="`/customer/${item.customerId}`">
                        {{ item.customerId }}
                    </router-link>
                </td>
                <td>
                    <router-link :to="`/${type}/${item.id}`">
                        View
                    </router-link>
                </td>
            </tr>
        </table>
    </section>
</template>

<script>
  export default {
    name: 'QuotePolicyList',
    props: {
      content: {
        type: Array,
        required: true
      },
      type: {
        type: String,
        required: true
      }
    }
  }
</script>
