function submitForm() {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var eventDateInput = document.getElementById('eventDate');
    
    
    if (!firstName || !lastName || !eventDateInput.value) {
      alert('Visi laukai privalo būti užpildyti.');
      return;
    }
  
    var eventDate = new Date(eventDateInput.value);
    if (isNaN(eventDate.getTime())) {
      alert('Neteisingas datos formatas.');
      return;
    }
  
    var currentDate = new Date();
    if (eventDate <= currentDate) {
      alert('Data turi būti ateityje.');
      return;
    }
  
    var daysUntilEvent = Math.ceil((eventDate - currentDate) / (1000 * 60 * 60 * 24));
  
  
    var dayWordForm = (daysUntilEvent === 1) ? 'diena' : 'dienos';
  

    console.log(firstName + ' ' + lastName + ' nugyveno ' + daysUntilEvent + ' ' + dayWordForm + '.');
  

    var resultContainer = document.createElement('div');
    resultContainer.innerHTML = '<p>Vartotojo vardas: ' + firstName + '</p>' +
                                '<p>Pavardė: ' + lastName + '</p>' +
                                '<p>Laukiamo įvykio data: ' + eventDate.toDateString() + '</p>' +
                                '<p>Nugyventa dienų: ' + daysUntilEvent + ' ' + dayWordForm + '</p>';
  
    document.body.appendChild(resultContainer);
  

    if (daysUntilEvent <= 1000) {
      resultContainer.style.fontSize = '10px';
    } else if (daysUntilEvent <= 7000) {
      resultContainer.style.fontSize = '16px';
    } else {
      resultContainer.style.fontSize = '20px';
    }
  }
  
