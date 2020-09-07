


export const usersContainer = template => `
    <div class="user-container container row justify-content-center">
        ${template}
    </div>
`;



export const userDetail = `
    <div class="user-detail">
        <div class="user-img"></div>
        <div class="user-name"></div>
    </div>
`;

export const newUserDetail = `
    <div class="card user-detail" style="width: 18rem; col">
        <img src="" class="card-img-top user-img" alt="...">
        <div class="card-body">
            <h5 class="user-name"></h5>
            <p class="card-text">Follow</p>
            <a href="#" target="_blank" class="btn btn-primary user-link"></a>
        </div>
    </div>
`;


export const nthUsersDetails = (n, template) => {
    let totalTemplate = '';

    for (let i=0; i < n; i++) {
        totalTemplate =    `
            ${totalTemplate}
            ${template}
        `;
    }

    return totalTemplate;
}


export const fiveUserDetails = nthUsersDetails(6, newUserDetail);