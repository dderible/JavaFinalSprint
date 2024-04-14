const taxes = 0.15;

fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(person => {
      console.log(gFullName(person));
      console.log(gAge(person));
      console.log(gNetIncome(person));
      console.log(selectRoom(person));
    });
  })

  function selectRoom(person) {
    switch(person.gender){
      case "Female": 
        return`${person.fname} is permitted to use the -FEMALE- washroom.`;
        break;
      case "Male":
        return `${person.fname} is permitted to use the -MALE- washroom.`;
        break;
      default:
        return `${person.fname} is permitted to use the wahroom that best suits their needs.`;
    }
  }

  function gFullName(person) {
    return `${person.fname} ${person.lname}`;
  }

  function gAge(person) {    
    return `${person.fname} is ${new Date().gFullYear() - 
      new Date(person.birthday).gFullYear()} years old.`; 
  }

  function gGender(person){
    return person.gender;
  }

  function gSalary(person){
    return person.salary;
  }

  function gIncomeTax(person){
    return person.salary * taxes;
  }

  function gNetIncome(person){
    return `makes a salary of ${person.salary - gIncomeTax(person)} per year.`;
  }