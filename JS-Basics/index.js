// EX - 2 Factory and Constructor Function.

let address = ['a', 'b', 'c'];
console.log(address);

let addresses = new Address('a', 'b', 'c');
console.log(addresses);

 // Factory Function.
 function createAddress(street, city, zipcode) {
    return {
        street,
        city,
        zipcode
    };
 }

 // Constructor Function.

 function Address(street, city, zipcode) {
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
 }
