function sendRequest(file, callback) : void {
    var searchterm : string = document.getElementById("search").value;
    if (searchterm != "") {
        $.ajax({
            url:'https://www.googleapis.com/books/v1/volumes?q='+ searchterm,
            success: function(json) {
                var content = "";
                try {
                    for (var i=0; i<json.items.length; i++) {
       		            content += "<li>Title: " + json.items[i].volumeInfo.title + "&nbsp Author: " + json.items[i].volumeInfo.authors[0] + "<br>";
      	            }
		            document.getElementById("books").innerHTML = "<ul>" + content + "</ul><br>";
                } catch (e) {
                    document.getElementById("books").innerHTML = "<ul>" + "No Items Found" + "</ul><br>";
                }
	        }
        });
    } else {
        document.getElementById("books").innerHTML = "<ul>" + "Please enter a search term" + "</ul><br>";
    } 
}


