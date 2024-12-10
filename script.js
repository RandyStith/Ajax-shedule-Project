$(documnet).ready(function() {

    const scheduleContainer = $('#scheduleList');
    const btn = ('#submitDay');

    btn.on('click', function() {
      let selectedDay = $('#dayInput').val().trim();
  
      if (!['A', 'B', 'C', 'D', 'E', 'F', 'G'].includes(selectedDay)) {
          alert('You ndeed to type a valid letter day!');
          return;

      } else {

        $.ajax({
          url: 'https://www.npoint.io/docs/b3eca2927c70f2794488',
          method: "GET",
          success: function(data) {
            const schedule = data.shedule
            console.log(schedule)
            const daySchedule = schedule.filter(item => item.days.includes(selectedDay))
            console.log(daySchedule)
            renderHTML(daySchedule)


          }
        })     }

function renderHTML(daySchedule) {
  $('#scheduleList').empty()
  var htmlString = ''
  daySchedule.forEach(function (item) {
    htmlString += (`<tr>
                    <td>${item.period}</td>
                    <td>${item.class}</td>
                    <td>${item.teacher}</td>
                    <td>${item.room}</td>
                </tr>`)
  })
}



   

      
        $('#scheduleList').append(htmlString);
    
    })})