document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.querySelector('.calendar');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let html = '<div class="calendar-header">' + months[currentMonth] + ' ' + currentYear + '</div>';
    html += '<table class="calendar-table">';
    html += '<tr><th>D</th><th>S</th><th>T</th><th>Q</th><th>Q</th><th>S</th><th>S</th></tr>';

    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        html += '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfMonth) {
                html += '<td></td>';
            } else if (dayCount > daysInMonth) {
                html += '<td></td>';
            } else {
                html += '<td>' + dayCount + '</td>';
                dayCount++;
            }
        }
        html += '</tr>';
    }

    html += '</table>';
    calendar.innerHTML = html;
});
