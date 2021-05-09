const salon = {
    name:'The Fashion Pet',
    address:{
        street: '4720 Scott Allen Dr',
        city: 'Missoula',
        state: 'MT',
        zip: '59803'
    },
    hours: {
        open: '9:00 am',
        close: '5:00 pm'
    },
    pets:[]
}
var {name,address:{street,city,state,zip}} = salon;

document.getElementById('footer-info').innerHTML = `
    <p> ${name} | ${street} | ${city}, ${state} ${zip} </p>
`;

// create the object constructor
var counter=0;
class Pet {
    constructor(
        name, 
        age, 
        gender,
        type, 
        breed, 
        service, 
        ownerName, 
        contactPhone, 
        ownerAddress, 
        ownerCity, 
        ownerState, 
        ownerZip){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.type = type;
            this.breed = breed;
            this.service = service;
            this.price = 0;
            this.ownerName = ownerName;
            this.contactPhone = contactPhone;
            this.ownerAddress = ownerAddress;
            this.ownerCity = ownerCity;
            this.ownerState = ownerState;
            this.ownerZip = ownerZip;
            this.id=counter++;
    }
}