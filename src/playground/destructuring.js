const person = {
    name: 'Teet',
    age: 26,
    location: {
        city: 'Tallinn',
        temperature: 20
    }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}`);
console.log(`${person.name} is ${person.age}`);

const {city, temperature: temp} = person.location

if(temp && city){
    console.log(`Its ${temp} degrees in ${city}`);
}

const Book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Publisher'} = Book.publisher;
console.log(`Publisher is ${publisherName}.`);

const aadress = ['Järvekalda', 'Kanepi vald', 'Põlvamaa', '63105'];
const [talu, vald = 'Põrgupõhja', maakond, zip] = aadress;
console.log(`Ma elan ${talu} talus ja koduvallaks on  ${vald}`);

const item = ['Coffe (hot)', '2$', '3$', '4$']
const [kohvi, , medium] = item;
console.log(`A medium ${kohvi} maksab   ${medium} dollarit.`);