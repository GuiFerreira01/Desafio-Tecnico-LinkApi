const ConnectMock = require('./connectAPI')

class Services {

    async searchUser() {
        var saveList = []

        const searchUsers = await ConnectMock.listUsers(1)
            .then(async response => {
                saveList.push(await this.constructResponse(response))
            })
        return saveList
    }

    async constructResponse(data) {

        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms))
        }

        try {
            const constructResponse = []
            for (var users of data) {

                console.log(users.id)
                const searchAddress = await ConnectMock.listAddress(users.id)
                const searchContact = await ConnectMock.listContact(users.id)

                const constructor = {
                    "id": users.id,
                    "createdAt": users.createdAt,
                    "fullName": users.firstName + "" + users.lastName,
                    "email": users.email,
                    "addresses":
                        await searchAddress.map((address) => {
                            return {
                                "addressId": address.id,
                                "address": address.street + address.number,
                                "country": address.country,
                                "countryCode": address.zipcode, // Não encontri o countryCode na MockAPI. 
                                "city": address.city,
                                "state": address.state,
                                "zipcode": address.zipcode
                            }
                        }),
                    "contacts":
                        searchContact.map((contact) => {
                            return {
                                "contactId": contact.id,
                                "name": contact.name,
                                "phoneNumber": contact.phoneNumber,
                                "email": contact.email
                            }
                        })
                }

                await sleep(2000)
                constructResponse.push(constructor)
            }

            return constructResponse
        } catch (error) {
            console.log(error)
        }

    }
}


module.exports = new Services();
