<template>
  <div>
    <heading>Customers</heading>
    <table class="table--styled">
      <tr>
        <th class="label-cell">ID</th>
        <th class="label-cell">Name</th>
        <th class="label-cell">Email</th>
        <th class="label-cell">Address</th>
        <th class="label-cell">
          <a href="#" @click.prevent="order = !order">Registered</a>&nbsp;
            <img v-if="order" src="../../assets/svg/icon-chevron-down.svg" />
            <img v-else src="../../assets/svg/icon-chevron-up.svg" />
        </th>
        <th class="empty-cell"></th>
      </tr>
      <tr v-for="customer in sortByRegistered" :key="customer.id">
        <td>
          <router-link :to="`/customer/${customer.id}`">
            {{ customer.id }}
          </router-link>
        </td>
        <td>{{ customer.name.first }} {{ customer.name.last }}</td>
        <td> <a :href="`mailto:${customer.email}`">{{ customer.email }}</a></td>
        <td>{{ customer.address }}</td>
        <td>{{ customer.registered | formatDate }}</td>
        <td>
          <router-link :to="`/customer/${customer.id}`">
            View
          </router-link>
        </td>
      </tr>
    </table>
    <br />
  </div>
</template>

<script>
  import api from '../../util/api.js'

  import Heading from '@/components/Heading'

  export default {
    name: 'CustomerList',
    components: {
      Heading
    },
    data() {
      return {
        customers: [],
        order: true
      }
    },
    computed: {
      sortByRegistered() {
        return this.customers.sort((a, b) => {
          const x = new Date(a.registered);
          const y = new Date(b.registered);
          return (this.order ? x - y : y - x);
        });
      }
    },
    async created() {
      this.customers = await api.getCustomers()
    }
  }
</script>
