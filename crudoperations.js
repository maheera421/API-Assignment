$(function(){
    getRecipies();
    $("#recipes").on("click", ".btn-danger", deleteRecipies);
    $("#addBtn").click(postRecipie);
    $("#updateSave").click(putRecipie);
    $("#recipes").on("click", ".btn-warning", handleUpdate);
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


  function deleteRecipies() {
    var btn = $(this);
    var parentDiv = btn.closest(".recipe");
    let id = parentDiv.attr("data-id");
    console.log(id);
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
      method: "DELETE",
      success: function () {
        getRecipies();
      },
    });
  }


  function postRecipie() {
    var title = $("#title").val();
    var body = $("#body").val();
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes",
      method: "POST",
      data: { title, body },
      success: function (response) {
        console.log(response);
        $("#title").val("");
        $("#body").val("");
        getRecipies();
        $("#addModal").modal("hide");
      },
    });
  }


  function putRecipie() {
    var id = $("#updateId").val();
    var title = $("#updateTitle").val();
    var body = $("#updateBody").val();
    $.ajax({
      url: "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
      data: { title, body },
      method: "PUT",
      success: function (response) {
        console.log(response);
        getRecipies();
        $("#updateModal").modal("hide");
      },
    });
  }

  function handleUpdate() {
    var btn = $(this);
    var parentDiv = btn.closest(".recipe");
    let id = parentDiv.attr("data-id");
    $.get(
      "https://usman-fake-api.herokuapp.com/api/recipes/" + id,
      function (response) {
        $("#updateId").val(response._id);
        $("#updateTitle").val(response.title);
        $("#updateBody").val(response.body);
        $("#updateModal").modal("show");
      }
    );
  }