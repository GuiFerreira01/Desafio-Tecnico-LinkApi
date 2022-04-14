const ConnectMock = require('./connectAPI')

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

class Services {
    async searchUsers() {
        const users = await ConnectMock.listUsers();

        const constructResponse = []

        for (const user of users) {

            await sleep(1000)
            console.log(user.id)
            const searchAddresses = await ConnectMock.listAddresses(user.id)
            const searchContacts = await ConnectMock.listContacts(user.id)

            const formattedUser = {
                "id": user.id,
                "createdAt": user.createdAt,
                "fullName": user.firstName + "" + user.lastName,
                "email": user.email,
                "addresses":
                    searchAddresses.map((address) => {
                        return {
                            "addressId": address.id,
                            "address": address.street + address.number,
                            "country": address.country,
                            "countryCode": address.zipcode, // Não encontrei o countryCode na MockAPI. 
                            "city": address.city,
                            "state": address.state,
                            "zipcode": address.zipcode
                        }
                    }),
                "contacts":
                    searchContacts.map((contact) => {
                        return {
                            "contactId": contact.id,
                            "name": contact.name,
                            "phoneNumber": contact.phoneNumber,
                            "email": contact.email
                        }
                    })
            }

            constructResponse.push(formattedUser)
        }

        return constructResponse
    }
}

module.exports = new Services();
