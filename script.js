// The schedule data in JSON format
const scheduleData = {
    "schedule": [
      {
        "class": "Physical Education",
        "teacher": "Debra Razzino",
        "room": "Gymnasium",
        "period": 1,
        "days": ["A", "B", "C", "E"]
      },
      {
        "class": "AP Physics Lab",
        "teacher": "Paul Reardon",
        "room": "G202",
        "period": 2,
        "days": ["A", "B", "D", "E", "F"]
      },
      {
        "class": "NJIT WDPP",
        "teacher": "Megan Herbert",
        "room": "B114",
        "period": 3,
        "days": ["A", "C", "D", "E", "G"]
      },
    
      {
        "class": "BCC English",
        "teacher": "Lisa Lomovsky",
        "room": "E107",
        "period": 4,
        "days": ["B", "C", "D", "F", "G"]
      },
      {
        "class": "N/A",
        "teacher": "N/A",
        "room": "Cafeteria",
        "period": "Lunch",
        "days": ["A", "B", "C", "D", "E", "F", "G"]
      },
      {
        "class": "Fine Art 1",
        "teacher": "Alexis Roth",
        "room": "A103",
        "period": 5,
        "days": ["A", "B", "D", "E", "G"]
      },
      {
        "class": "Sociology",
        "teacher": "Alexander Dohan",
        "room": "G106",
        "period": 6,
        "days": ["A", "C", "D", "F", "G"]
      },
      {
        "class": "AP Calculus AB",
        "teacher": "Phillip Drummond",
        "room": "D219",
        "period": 7,
        "days": ["B", "C", "E", "F", "G"]
      }
    ]
  };
  
  // Function to load schedule based on the selected day
  function loadSchedule(day) {
      // Clear the existing schedule from the table
      $('#scheduleList').empty();
  
      // Filter the schedule based on the day
      const filteredSchedule = scheduleData.schedule.filter(item => item.days.includes(day.toUpperCase()));
  
      // Check if there are any classes for the given day
      if (filteredSchedule.length > 0) {
          filteredSchedule.forEach(item => {
              $('#scheduleList').append(
                  `<tr>
                      <td>dsafwsdfasdfasd</td>
                      <td>${item.period}</td>
                      <td>${item.class}</td>
                      <td>${item.teacher}</td>
                      <td>${item.room}</td>
                  </tr>`
              );
          });
      } else {
          $('#scheduleList').html('<tr><td colspan="4" class="text-center text-danger">No classes for this day! Please try a different day (A-G).</td></tr>');
      }
  }
  
  // Event listener for the "Show Schedule" button
  $('#submitDay').click(function() {
      const day = $('#dayInput').val().trim();
  
      // Validate the input (only A-G days are valid)
      if (day && /^[A-Ga-g]$/.test(day)) {
          loadSchedule(day); // Load the schedule for the valid day
      } else {
          // If the input is invalid, show an error message
          $('#scheduleList').html('<tr><td colspan="5" class="text-center text-danger">Please enter a valid day (A-G).</td></tr>');
      }
  });
  