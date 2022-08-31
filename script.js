var myHttp = new XMLHttpRequest();
var allPosts = [];

function getData() { 
  myHttp.open("GET", "https://api.themoviedb.org/3/trending/all/day?api_key=988e25c30ceee67e8657d95d2dd654a0");
  myHttp.send();
  // the event readystatechange happen every time there any change in readystate changes
  myHttp.addEventListener("readystatechange", function () {
    if (myHttp.readyState == 4 && myHttp.status == 200) {
      allPosts = JSON.parse(myHttp.response).results;
      displayPosts(); // مشكله الكود دا انه موجود كده ف الطل ف هيتنفذ ع طول ودا مش صح
      // عشان كده دا معناه انه هيشتغل في كل الاحوال لكن لما نحطه جو الايفينت دا مش هيشغله غير لما يوصل ل 4
    }
  });
  function displayPosts() {
    var cartonna = ``;
    for (var i = 0; i < allPosts.length; i++) {
      cartonna += ` <div class="col-md-3">
      <img class="w-100" src="https://image.tmdb.org/t/p/w500/${allPosts[i].poster_path}"/>
            <h3>${allPosts[i].title}</h3>
            <p>${allPosts[i].overview}</p>
          </div>`;
    }
    document.getElementById("postsRow").innerHTML = cartonna;
  }
  // All that called AJAX , and this is shortcut for = Asncync javascript and XML
  // one of the most powerful things in AJAX is he can do multiple requests without reload
}
