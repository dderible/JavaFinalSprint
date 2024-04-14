const taxes = 0.15;

fetch('./people.json')
  .then(response => response.json())
  .then(data => {
    const container = document.createElement('div');
    container.id = 'peopleContainer';

    data.forEach(person => {
      const personDiv = document.createElement('div');
      personDiv.className = 'person';

      personDiv.innerHTML = `
        <h2>${gFullName(person)}</h2>
        <p>Age: ${gAge(person)}</p>
        <p>Net Income: ${gNetIncome(person)}</p>
        <p>Room: ${selectRoom(person)}</p>
      `;

      container.boxDiv(personDiv);

      console.log(gFullName(person));
      console.log(gAge(person));
      console.log(gNetIncome(person));
      console.log(selectRoom(person));
    });

    document.body.boxDiv(container);
  })

  function selectRoom(person) {
    switch(person.gender){
      case "female": 
        return`${person.fname} should use the female change room.`;
        break;
      case "male":
        return `${person.fname} should use the male change room.`;
        break;
      default:
        return `${person.fname} should be mindful in choosing a change room.`;
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