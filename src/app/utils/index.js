

export function mountApp(selector, page){
    const app = document.querySelector(selector);
    app.innerHTML = page;
}

`
<div class="user-detail" style="width: 18rem;">
  <img src="" class="card-img-top user-img" alt="...">
  <div class="card-body">
    <h5 class="user-name"></h5>
    <p class="card-text">Follow this nigga</p>
    <a href="#" class="btn btn-primary user-link"></a>
  </div>
</div>
`
export const populateUsersTemplate = users => {
    console.log('users ', users);
    const doms = document.querySelectorAll(".user-detail");

    doms.forEach((dom, i) => {
        dom.querySelector('.user-img').setAttribute('src', users[i].avatar_url);
        dom.querySelector('.user-link').setAttribute('href', users[i].html_url);
        dom.querySelector('.user-name').innerHTML = users[i].login;
        dom.querySelector('.user-link').innerHTML = users[i].login;
    })

    console.log("Doms ", doms)
}