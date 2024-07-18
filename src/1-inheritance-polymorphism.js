class Phone {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
    this.contacts = [];
  }

  makeCall(contact) {
    const foundContact = this.contacts.find(cont => cont.name === contact || cont.phoneNumber === contact)
    if (foundContact) {
      return `Calling ${foundContact.name}...`
    } else if (contact.length === 10) {
      return `Calling ${contact}...`
    } else {
      return 'Invalid'
    }
  }

  addContact(newContact) {
    const { name, phoneNumber } = newContact
    if (!name || !phoneNumber || phoneNumber.length !== 10) {
      return 'Invalid'
    } else {
      this.contacts.push(newContact);
      return `${name} added.`
    }
  }
removeContact(contactToRemove) {
    const index = this.contacts.findIndex(contact => contact.name === contactToRemove);
    if (index !== -1) {
      this.contacts.splice(index, 1)
      return `${contactToRemove} removed.`
    }
    return 'Contact not found.'
  }
}

class AppleIPhone extends Phone {
  constructor(phoneNumber, model) {
    super(phoneNumber);
    this.model = model;
  }

  sendIMessage(receiver, message) {
    if (receiver instanceof AppleIPhone) {
      return `Message: ${message} - sent from ${this.model}`
    } else {
      return 'Message could not be sent.'
    }
  }
}

module.exports = {
  Phone,
  AppleIPhone,
};
