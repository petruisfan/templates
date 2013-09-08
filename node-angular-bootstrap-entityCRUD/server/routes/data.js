exports.entity = {
    persons : [{
        id: 4,
        age: 36,
        email: "user1@gmail.com",
        firstName: "Dan",
        homePhoneNumber: "0256 123 456",
        lastName: "Bugariu",
        mobilePhoneNumber: null,        
        personalIdentifier: 4,
        userName: "dan"
    },{
        id: 3,
        age: 33,
        email: "user2@gmail.com",
        firstName: "Bogdan",
        homePhoneNumber: "0256 456 123",
        lastName: "Solga",
        mobilePhoneNumber: null,        
        personalIdentifier: 3,
        userName: "bogdan"
    },{
        id: 2,
        age: 30,
        email: "user3@gmail.com",
        firstName: "Adi",
        homePhoneNumber: "0256 123 451",
        lastName: "Dozsa",
        mobilePhoneNumber: null,        
        personalIdentifier: 2,
        userName: "adi"
    },{
        id: 1,
        age: 24,
        email: "user4@gmail.com",
        firstName: "Petru",
        homePhoneNumber: "0256 123 452",
        lastName: "Isfan",
        mobilePhoneNumber: null,        
        personalIdentifier: 1,
        userName: "petru"
    }],
    appartment: [{
        id: "1",
        entranceId: "1",
        identifier: "1",
        alias: "Popescu",
        numberOfPersons: 3,
        surface: 75
    },{
        id: "2",
        entranceId: "1",
        identifier: "2",
        alias: "Ionescu",
        numberOfPersons: 2,
        surface: 100
    },{
        id: "3",
        entranceId: "1",
        identifier: "3",
        alias: "Georgescu",
        numberOfPersons: 5,
        surface: 50
    },{
        id: "4",
        entranceId: "1",
        identifier: "4",
        alias: "Ionescu",
        numberOfPersons: 3,
        surface: 90
    }],
    associations: [{
        id: 2,
        name: "Asociatia Anti-Alcoolicilor Anonimi",
        postalCode: 303200
    },{
        id: 1,
        name: "Asociatia Alcoolicilor Anonimi",
        postalCode: 303100
    },{
        id: 3,
        name: "Asociatia 141",
        postalCode: 303100
    },{
        id: 4,
        name: "Asociatia 142",
        postalCode: 303100
    },{
        id: 5,
        name: "Asociatia 143",
        postalCode: 303100
    }]
}