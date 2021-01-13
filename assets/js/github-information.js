function fetchGitHubInformation(event){

    var userName = $("#gh-username").val();

    if(!userName){
        $("#gh-user-data").html(`<h2>Please enter a github username</h2>`)
        return;
    }

    $("#gh-user-data").html(`<div id="loader"><img src="assets/images/g0R9.gif" alt="loading"></div>`)

}

