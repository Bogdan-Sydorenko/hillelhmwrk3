const contactBook = {
    contacts: [
        {
            name: "Bohdan",
            email: "bohdanckik@gmail.com",
            phoneNumber: "1234567890",
        },
        {
            name: "Georgiy",
            email: "georgiytop@gmail.com",
            phoneNumber: "1231233211",
        },
        {
            name: "Alice",
            email: "alice2006@gmail.com",
            phoneNumber: "5876587678",
        },
        {
            name: "Vika",
            email: "vikatissot@gmail.com",
            phoneNumber: "9248732984",
        },
    ],

    findContactByName: function(name) {
        const contact = this.contacts.find((contact) => contact.name === name);
        if (contact) {
            return contact;
        }else {
            return "Contact not found";
        }
    },

    addContact: function(name, email, phoneNumber) {
        this.contacts.push({name: name, email: email, phoneNumber: phoneNumber });
    }
}

console.log(contactBook.findContactByName("Georgiy"));

contactBook.addContact("Sanya", "3487593475", "sanches@gmail.com");

console.log(contactBook.contacts);


