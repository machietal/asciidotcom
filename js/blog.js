/*
<h5>21/01/1999</h5>
<h3>This title is too long so lets see</h3>
<p>
    Aliquam turpis lacus, maximus ac libero non, aliquet gravida orci. Vestibulum eu sem vitae justo aliquet dapibus
    ac at lorem. Fusce vel magna vitae enim fringilla vestibulum. Praesent aliquet eros augue, eu vulputate urna
    molestie iaculis. Nullam eleifend sit amet tellus in suscipit. Sed porttitor scelerisque dui, eu ultrices
    turpis interdum at. In tincidunt vulputate tincidunt. Sed lobortis nibh tincidunt iaculis dictum. Duis faucibus
    a felis at efficitur. Donec mollis lacus vitae interdum tincidunt. Maecenas imperdiet ligula ipsum, vitae
    tincidunt quam consequat a. Nullam dignissim turpis in tellus accumsan pulvinar. Aenean porttitor, justo et auctor
    suscipit, magna est porta dolor, ac lobortis lectus leo eget velit. Sed at dui sit amet purus lacinia convallis
    ut vel erat.
</p>
*/


// function Func() {
//     fetch("test.json")
//         .then((res) => {
//             return res.json();
//         })
//         .then((data) => console.log(data));
// }
//
// Func();

// const blog =
//     {
//     date:[],
//     title:"",
//     tags:[""],
//     content:"",
//     };


// function to get json blog contents


// function to highlight days with valid blog posts


// function to post the previews

async function logMovies() {
    const response = await fetch("/blogposts/blog.json");
    const movies = await response.json();
    console.log(movies);
}
logMovies()