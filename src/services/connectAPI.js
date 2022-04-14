const axios = require('axios');

class ConnectMock {
  constructor() {
    this.baseUrl = `https://${process.env.HOST}.mockapi.io/api/v1`,
      this.axiosInstance = axios.create({
        baseURL: this.baseUrl,
        timeout: 12000,
      })
  };

<<<<<<< HEAD
  async listUsers() {
    const requestConfig = {
      method: 'get',
      url: '/users',
      params: {
        page: 1,
        limit: 100
      }
    };

    const UsersResponse = await this.axiosInstance.request(requestConfig)
    const listUsers = UsersResponse.data;

    return listUsers;
  }

  async listAddresses(data) {
=======
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
>>>>>>> c1328ed4afcdf6b94043d79dcb3c0418b6ce463c
      const requestConfig = {
        method: 'get',
        url: `/users/${data}/address`,
      };

      const AddressResponse = await this.axiosInstance.request(requestConfig);
      const listAddress = AddressResponse.data;

      return listAddress;
<<<<<<< HEAD
  }

  async listContacts(data) {
=======

    } catch (error) {
      return error
    }
  }
  async listContact(data) {
    try {
>>>>>>> c1328ed4afcdf6b94043d79dcb3c0418b6ce463c
      const requestConfig = {
        method: 'get',
        url: `/users/${data}/contacts`,
      };

      const ContactResponse = await this.axiosInstance.request(requestConfig);

      const listContact = ContactResponse.data;

<<<<<<< HEAD
      return listContact;
=======

      return listContact;

    } catch (error) {
      return error
    }
>>>>>>> c1328ed4afcdf6b94043d79dcb3c0418b6ce463c
  }
}

module.exports = new ConnectMock();
