document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("submit")

    // Get form values
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Get selected food choices
    const foodChoices = [];
    const foodCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    foodCheckboxes.forEach(checkbox => {
        foodChoices.push(checkbox.value);
    });

    // Validate at least 2 food choices
    if (foodChoices.length < 2) {
        alert('Please select at least two food items.');
        return;
    }

    // Create a new table row with form data
    const table = document.getElementById('dataTable');
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${email}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${gender}</td>
        <td>${foodChoices.join(', ')}</td>
    `;

    // Clear form fields
    document.getElementById('form').reset();
});
