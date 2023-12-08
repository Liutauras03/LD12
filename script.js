function submitForm() {
    // Gauname įvestus duomenis
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var eventDate = new Date(document.getElementById('eventDate').value);
  
    // Apskaičiuojame dienas iki įvykio
    var currentDate = new Date();
    var daysUntilEvent = Math.ceil((eventDate - currentDate) / (1000 * 60 * 60 * 24));
  
    // Pasirinkime tinkamą dienos formą
    var dayWordForm = (daysUntilEvent === 1) ? 'diena' : 'dienos';
  
    // Išvedame rezultatą į konsolę
    console.log(firstName + ' ' + lastName + ' nugyveno ' + daysUntilEvent + ' ' + dayWordForm + '.');
    
    // Išvedame rezultatą į HTML puslapį
    var resultContainer = document.createElement('div');
    resultContainer.innerHTML = '<p>Vartotojo vardas: ' + firstName + '</p>' +
                                '<p>Pavardė: ' + lastName + '</p>' +
                                '<p>Laukiamo įvykio data: ' + eventDate.toDateString() + '</p>' +
                                '<p>Nugyventi dienų: ' + daysUntilEvent + ' ' + dayWordForm + '</p>';
  
    document.body.appendChild(resultContainer);
  }
  
