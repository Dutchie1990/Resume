function userInformationHtml(user){
    return `<h2>${user.name}
                <span class="small-name">
                    @ <a href="${user.html_url}" target="_blank">${user.login}</a>
                </span>
            </h2>
            <div class="gh-content">
                <div class="gh-avatar">
                    <a href=${user.html_url} target="_blank">
                        <img src=${user.avatar_url} width="80" height="80" alt="${user.login}"/>
                    </a>
                </div>
                <p>Followers: ${user.followers} - Following: ${user.following} <br> Repos: ${user.public_repos}</p>
            </div>`

}

function repoInformationHtml(repos){
    if(repos.length == 0){
        return `<div class="clearfix repo-list">No repos!</div>`;
    }

    var listItemsHtml = repos.map(function(repo){
        return `<li>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </li>`
    });

    return `<div class="clearfix repo-list">
                <p>
                    <strong>Repo List:</strong>
                </p>
                <ul>
                    ${listItemsHtml.join("\n")}
                </ul>
            </div>`;

}

function fetchGitHubInformation(event){

    var userName = $("#gh-username").val();

    if(!userName){
        $("#gh-user-data").html(`<h2>Please enter a github username</h2>`)
        return;
    }

    $("#gh-user-data").html(`<div id="loader"><img src="assets/images/g0R9.gif" alt="loading"></div>`)

    $.when(
        $.getJSON(`https://api.github.com/users/${userName}`),
        $.getJSON(`https://api.github.com/users/${userName}/repos`)  
        )
    .then(function(firstResponse, secondResponse){
        var userData = firstResponse[0];
        var repoData = secondResponse[0]; 
        $("#gh-user-data").html(userInformationHtml(userData));
        $("#gh-repo-data").html(repoInformationHtml(repoData));
    },
        function(errorResponse){
            if (errorResponse.status === 404){
                $("#gh-user-data").html(`<h2>User not found for user: ${userName}</h2>`)
            } else{
                console.log(errorResponse);
                $("#gh-user-data").html(`<h2>Error: ${errorResponse.responseJSON.message}</h2>`)
            }
    })
}

