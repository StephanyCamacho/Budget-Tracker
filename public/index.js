//get the info from the user
// ajax to post the info on the db

$("#addbudget").on("click", function () {
    event.preventDefault();
    var newTrans = {
        name: $("#name").val(),
        amount: $("#amount").val()
    }

    // var name = $("#name").val()
    // var amount = $("#amount").val()
    // var newT = {
    //     name: name,
    //     amount: amout
    // }

    console.log(newTrans)
    $.post("/api/budget", newTrans).then(function(data){

        location.reload()
    })
})


// render all the row in the table
// ajax get all the info from the db
// build the rows
$.get("/api/budget").then(function(data){
    console.log(data)
    $("#budget").empty()
    data.map(elem => {
    var rowBudget = `<tr>
                        <td>${elem.name}</td>
                        <td>${elem.amount}</td>
                    </tr>`
    
    $("#budget").append(rowBudget)
    })

})