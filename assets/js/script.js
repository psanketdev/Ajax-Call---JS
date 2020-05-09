var lode_btn = document.getElementById("lode_more");
var result = document.getElementById("result");


var request = new XMLHttpRequest();   //send http request.
request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);  //specifies the type of request.

request.onload = function (e) {  //onload function when click on button.
    e.preventDefault();
    if (this.status == 200) {
        //  console.log(xhr.responseText);
        var users = JSON.parse(this.responseText);  //convert string to object/array.
        // console.log(users);

        var output = '';
        var maxresult = 6;   //fisrt print the 6 valus.
        for (var i = 0; i < maxresult; i++) {
            output +=
                '<ul  class="user_data">' +
                '<li>' +
                '<span>ID: </span>' + users[i].id +
                '<h5><span>Title: </span>' + users[i].title + '</h5>' +
                '<p><span>Description:</span> ' + users[i].body + '</p>' +
                '</li>' +
                '</ul>';
        }
        // else
        // {
        //     alert("File not found");
        // }   
        document.getElementById('result').innerHTML = output; //we get first 6 values.

        //here second loop for the next 6 - 6 values on onclick button

        var n = i; //to stored the i value here.
        rem = users.length;    //to total length of user
        lode_btn.addEventListener('click', loadmMoreValue);
        function loadmMoreValue() {
            for (var i = n; i < n + maxresult; i++) {
                output +=
                    '<ul  class="user_data">' +
                    '<li>' +
                    '<span>ID: </span>' + users[i].id +
                    '<h5><span>Title: </span>' + users[i].title + '</h5>' +
                    '<p><span>Description: </span> ' + users[i].body + '</p>' +
                    '</li>' +
                    '</ul>';
            }
            if (i == rem - 4) {
                lode_btn.style.display = "none";
            }
            document.getElementById('result').innerHTML = output;
            n = n + 6;
        }
    }
    else if (this.status == 404) {
        alert("Users Data Not Found");
    }
};
request.send();
