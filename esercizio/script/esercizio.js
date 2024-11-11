class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }

  confronto() {
    return this.age > luigi.age
      ? 'Mario è più vecchio di Luigi'
      : 'Luigi è più vecchio di Mario'
  }
}

const mario = new User('Mario', 'Rossi', 20, 'Germania')
console.log(mario)

const luigi = new User('Luigi', 'Verdi', 19, 'Olanda')
console.log(luigi)

console.log(mario.confronto())

// ---------------------------------------------------

const form = document.getElementById('petForm')

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }
}
// const newpet = new Pet(
//   petName.value,
//   ownerName.value,
//   species.value,
//   breed.value
// )
// const pet2 = new Pet(petName.value, ownerName.value, species.value, breed.value)

const arrPet = []

form.addEventListener('submit', function (e) {
  e.preventDefault()

  //   const petName = document.getElementById('petName').value
  //   console.log(petName);

  const petName = document.getElementById('petName')
  const ownerName = document.getElementById('ownerName')
  const species = document.getElementById('species')
  const breed = document.getElementById('breed')

  const newPet = new Pet(
    petName.value,
    ownerName.value,
    species.value,
    breed.value
  )
  //salvo i risultati in un array, ad ogni invio del form mi appare un nuovo pet nell'array
  arrPet.push(newPet)

  //lo ciclo per vedere se trovo due nomi di padroni uguali
  for (let i = 1; i < arrPet.length; i++) {
    arrPet[0].ownerName === arrPet[i].ownerName
      ? console.log(true)
      : console.log(false)
  }

  console.log(arrPet)

  this.reset()
})
