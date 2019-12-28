var inputSearch = $('#search');
var searchWord = "";
var searchArray = [];
var newSearch = "";

$('#search').on("keydown", (event) => {
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
      search();
    }
})

function search(){
    searchWord = inputSearch.val();
    searchArray = searchWord.split(' ');
    newSearch = searchArray.join('%20');
    $.ajax({
        url: `https://api.edamam.com/api/nutrition-data?app_id=5aec3db4&app_key=40fe225bdd6d2901649f531eef0fe2fd&ingr=${newSearch}`,
        dataType: 'JSONP'
      }).done(function(data){
          console.log(data)
          update(data);
      }).fail(function(){
          console.log("Failed");
      });
  } 

function update(data){
    alert(data.calories)
    $('#tableBody').append(`
    <tr class="row">
            <td>Jonathan</td>
            <td>Lollipop</td>
            <td>$7.00</td>
            <td>$7.00</td>
            <td>$7.00</td>
          </tr>
    `)
}


