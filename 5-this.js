const person = {
	name: 'jordan',
	greet: function() { console.log('hello, ' + this.name) }
}

person.greet()

const friend = {
	name: 'david'
}

friend.greet = person.greet

friend.greet()

const greet = person.greet
person.greet.call({name: "this is a bound object"})
person.greet.apply({name: "this is a bound object"})

//ES7 Arrow notation
const newPerson = {name: 'newPerson', greet: () => {console.log(this.name)}}
newPerson.greet() // undefined

greet()
