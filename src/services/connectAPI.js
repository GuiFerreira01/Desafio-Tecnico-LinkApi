const axios = require('axios');

class ConnectMock {
  constructor() {
    this.baseUrl = `https://${process.env.HOST}.mockapi.io/api/v1`,
      this.axiosInstance = axios.create({
        baseURL: this.baseUrl,
        timeout: 12000,
      })
  };

  async listUsers(data) {
    try {
      const requestConfig = {
        method: 'get',
        url: '/users',
        params: {
          page: data,
          limit: 100
        }
      };

      const UsersResponse = await this.axiosInstance.request(requestConfig)
      const listUsers = UsersResponse.data;

      

      return listUsers;
    } catch (error) {
      return error
    }
  }

  async listAddress(data) {
    try {
      const requestConfig = {
        method: 'get',
        url: `/users/${data}/address`,
      };

      const AddressResponse = await this.axiosInstance.request(requestConfig);
      const listAddress = AddressResponse.data;

      return listAddress;

    } catch (error) {
      return error
    }
  }
  async listContact(data) {
    try {
      const requestConfig = {
        method: 'get',
        url: `/users/${data}/contacts`,
      };

      const ContactResponse = await this.axiosInstance.request(requestConfig);

      const listContact = ContactResponse.data;


      return listContact;

    } catch (error) {
      return error
    }
  }
}

module.exports = new ConnectMock();
