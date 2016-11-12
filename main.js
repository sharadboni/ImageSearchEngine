// ----- custom js ----- //

// hide initial




$(function() {
	$("#searching").hide();
	$("#error").hide();

  // sanity check
  console.log( "ready!" );

  // image click
  $(".img").click(function() {

    // empty/hide results
    $("#results").empty();
    $("#results-table").hide();
    $("#error").hide();

    // add active class to clicked picture
    $(this).addClass("active")

    // grab image url
    var image = $(this).attr("src")
    console.log(image)

    // show searching text
    $("#searching").show();
    console.log("searching...")
    // using jQuery

    // ajax request
    $.ajax({
      type: "POST",
      dataType: "json",
      url: document.URL+"search/",
      data : { img : image },
      
      // handle success
      success: function(result) { 
     
     // var data = result;
    	  
     //   var data = jQuery.parseJSON(result);
       // console.log(jQuery.parseJSON(result));
     // loop through results, append to dom
    	  $("#results-table").show();
        for (i = 0; i < result.length; i++) {
          $("#results").append('<tr><td>'+(i+1)+'</th><th><img src="{% static "query_pics/1.jpg" %}" style="height: 50px;width:80px;"></th></tr>')
        	//console.log('<tr><th><a href="'+result[i]["image"]+'"><img src="'+result[i]["image"]+
           // '" class="result-img"></a></th><th>'+result[i]['score']+'</th></tr>');
        };
        $("#searching").hide();
      },
     
      // handle error
      error: function(error) {
        console.log(error);
        // append to dom
        $("#error").append()
      }
      
      
    });

  });

});