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

const blogPosts = [];

// function to get json blogs
function jsonGet() {
    fetch("/js/blogposts/blog.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            blogPosts.push(data)

            highlight();
            previews();
        });
}


// function to highlight days with valid blog posts
function highlight(){
    blogPosts[0].forEach(function(item){
        let blogday = 'calendar year month:nth-of-type('+ item.date[1]+') [thisDate="'+ item.date[0]+'"]';
        let blogdayEl= document.querySelector(blogday);
        blogdayEl.classList.add("blogDay")
    })

}

// function to post the previews
function previews(){
    for (let i = 0; i < 3; i++) {
        }
}

jsonGet();
