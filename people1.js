fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(person => {
      console.log(gFullName(person));
      console.log(getAge(person));
    });
  })

  function gFullName(person) {
    return `${person.fname} ${person.lname}`;
  }

  function gAge(person) {    
    return `${person.fname} is ${new Date().gFullYear() - 
      new Date(person.birthday).gFullYear()} years old.`; 
  }