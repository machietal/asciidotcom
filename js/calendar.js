const d = new Date();
let todayDate = [d.getDate(),d.getMonth()+1,d.getFullYear()]

const months= document.querySelectorAll("month");
for (let m = 0; m < months.length; m++) {
    let validDays= months[m].querySelectorAll("day:not(.nullDay)");
    for (let day = 0; day < validDays.length; day++) {
        validDays[day].setAttribute("thisDate", ""+(day+1)+"")
    }
}
const sel = 'calendar year month:nth-of-type('+todayDate[1] +') [thisDate="'+todayDate[0] +'"]';
const todayElement= document.querySelector(sel);
todayElement.classList.add("activeDay")




let blogday = 'calendar year month:nth-of-type(1) [thisDate="1"]';
const blogdayEl= document.querySelector(blogday);
blogdayEl.classList.add("blogDay")