const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');

const citiesByState = {
    "FL": ["Miami", "Orlando", "Tampa", "Jacksonville"],
    "NY": ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    "VA": ["Virginia Beach", "Norfolk", "Richmond", "Chesapeake", "Hampton", "Alexandria"],
    "SC": ["Charleston", "Columbia", "Myrtle Beach", "Greenville", "Summerville", "Mount Pleasant"],
    "NC": ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville"],
    "GA": ["Atlanta", "Savannah", "Augusta", "Columbus", "Macon", "Roswell"]
};

stateSelect.addEventListener('change', function() {
    const selectedState = this.value;

    citySelect.innerHTML = '<option value="" disabled selected>Please select a city</option>';
    citySelect.disabled = true; 

    if (citiesByState.hasOwnProperty(selectedState)) {
        const cities = citiesByState[selectedState];

        citySelect.disabled = false;
    
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.toLowerCase().replace(/ /g, '-'); 
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

stateSelect.addEventListener('change', function() {
    const selectedState = this.value;

    citySelect.innerHTML = '<option value="" disabled selected>Please select a city</option>';
    citySelect.disabled = true; 

    if (citiesByState.hasOwnProperty(selectedState)) {
        const cities = citiesByState[selectedState];

        citySelect.disabled = false;

        
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.toLowerCase().replace(/ /g, '-'); 
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});

const employmentSelect = document.getElementById("employmentStatus");
    const employmentHoursDiv = document.getElementById("employmentHoursDiv");

    const collegeSelect = document.getElementById("collegeStatus");
    const creditHoursDiv = document.getElementById("creditHoursDiv");

    employmentSelect.addEventListener("change", function() {
      const value = this.value;
      if (value === "part-time" || value === "full-time") {
        employmentHoursDiv.classList.remove("hidden");
      } else {
        employmentHoursDiv.classList.add("hidden");
      }
    });

    collegeSelect.addEventListener("change", function() {
      const value = this.value;
      if (value === "student") {
        creditHoursDiv.classList.remove("hidden");
      } else {
        creditHoursDiv.classList.add("hidden");
      }
    });

    function showSection(sectionId, btn) {
      document.querySelectorAll('.content-section').forEach(sec => {
        sec.classList.remove('active');
      });
      document.querySelectorAll('.button-container button').forEach(button => {
        button.classList.remove('active-btn');
      });
  
      document.getElementById(sectionId).classList.add('active');
      btn.classList.add('active-btn');
    }

    function toggleInterest() {
      const btn = document.getElementById('interestBtn');
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? 'Interested' : 'Add to Interests';
    }

