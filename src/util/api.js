import axios from "axios";

const API_DOMAIN = 'http://localhost:3000'

export default {
  /**
   * @desc gets list of customers
   * @param
   * @returns {Promise}
   */
  getCustomers() {
    return axios.get(`${API_DOMAIN}/customers`)
      .then(response => response.data)
      .catch(error => error)
  },

  /**
   * @desc get individual customer
   * @param customerId:string
   * @returns {Promise}
   */
  getCustomer(customerId) {
    return axios.get(`${API_DOMAIN}/customers/${customerId}`)
      .then(response => response.data)
      .catch(error => error)
  },

  /**
   * @desc gets list of customer quotes
   * @param customerId:string
   * @returns {Promise}
   */
  getCustomerQuotes(customerId) {
    return axios.get(`${API_DOMAIN}/quotes/`)
      .then((response) => {
        const quotes = response.data.filter(quote => {
          return quote.customerId === customerId;
        })
        return quotes
      })
      .catch(error => error)
  },

  /**
   * @desc gets list of customer quotes
   * @param customerId:string
   * @returns {Promise}
   */
  getCustomerPolicies(customerId) {
    return axios.get(`${API_DOMAIN}/policies/`)
      .then((response) => {
        const policies = response.data.filter(policy => {
          return policy.customerId === customerId;
        })
        return policies
      })
      .catch(error => error)
  },

  /**
   * @desc get list of quotes
   * @param
   * @returns {Promise}
   */
  getQuotes() {
    return axios.get(`${API_DOMAIN}/quotes`)
      .then(response => response.data)
      .catch(error => error)
  },

  /**
   * @desc get individual quote
   * @param quoteId:string
   * @returns {Promise}
   */
  getQuote(quoteId) {
   return axios.get(`${API_DOMAIN}/quotes/${quoteId}`)
     .then(response => response.data)
     .catch(error => error)
  },

  /**
   * @desc get list of policies
   * @param
   * @returns {Promise}
   */
  getPolicies() {
    return axios.get(`${API_DOMAIN}/policies`)
      .then(response => response.data)
      .catch(error => error)
  },

  /**
   * @desc get individual quote
   * @param policyId:string
   * @returns {Promise}
   */
  getPolicy(policyId) {
    return axios.get(`${API_DOMAIN}/policies/${policyId}`)
      .then(response => response.data)
      .catch(error => error)
  }

}
