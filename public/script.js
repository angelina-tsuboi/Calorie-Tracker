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
    try{
        $('#tableBody').append(`
        <tr class="row">
                <td>${searchWord}</td>
                <td>${data.calories}</td>
                <td>${data.totalNutrients.CHOCDF.quantity.toFixed(2)}g</td>
                <td>${data.totalNutrients.FAT.quantity.toFixed(2)}g</td>
                <td>${data.totalNutrients.PROCNT.quantity.toFixed(2)}g</td>
              </tr>
        `)
    } catch{
        alert("Invalid Input")
    }
        
    } 
   



