$(function(){
    getRecipies();
})

function getRecipies() {
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes",
      method: "GET",
      error: function (response) {
        var recipies = $("#recipes");
        recipies.html("An Error has occured");
      },
      success: function (response) {
        console.log(response);
        var recipies = $("#recipes");
        recipies.empty();
        for (var i = 0; i < response.length; i++) {
          var rec = response[i];
          recipies.append(
            `<div class="recipe" data-id="${rec._id}"><h3>${rec.title}</h3><p><button class="btn btn-danger btn-sm float-right">delete</button><button class="btn btn-warning btn-sm float-right">Edit</button> ${rec.body}</p></div>`
          );
        }
      },
    });
  }