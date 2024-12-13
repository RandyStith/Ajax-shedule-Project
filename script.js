$(document).ready(function () {
  const scheduleContainer = $('#scheduleList');
  const btn = $('#submitDay');



  const periodTimes = {
    "1": "Block 1 8:24 AM - 9:031 AM",
    "2": "Block 29:36 AM - 10:43 AM",
    "3": "Lunch 10:48 AM - 11:55 AM",
    "4": "12:00 PM - 12:35 PM",
    "5": "12:40 PM - 1:48 PM",
    "6": "1:53 PM - 3:00 PM",
  }





  btn.on('click', function () {
    let selectedDay = $('#dayInput').val().trim();

    if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
      alert('You ndeed to type a valid letter day!');
      return;

    }
  

    $.ajax({
      url: 'sched.json',
      method: "GET",
      success: function (data) {
        const schedule = data.schedule;
        console.log(schedule);
        const daySchedule = schedule.filter(item => item.days.includes(selectedDay));
        console.log(daySchedule);
        renderHTML(daySchedule);
      }
    });
  });

  function renderHTML(daySchedule) {
    scheduleContainer.empty();
    let htmlString = '';

    daySchedule.forEach(function (item, periodTimes) {
      for(i = 0; i < item.length; i++){
        const periodTime = periodTimes[i];
        htmlString += `<tr>
        <td>${periodTime}</td>
        <td>${item.period}</td>
        <td>${item.class}</td>
        <td>${item.teacher}</td>
        <td>${item.room}</td>
        </tr>`;
      }
  
    });

    scheduleContainer.append(htmlString);



  }







});