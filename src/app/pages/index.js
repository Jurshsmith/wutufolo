

import { mountApp } from './../utils/index';
import { appTitle } from './templates/app-title.template';
import { fiveUserDetails, usersContainer } from './templates/users-container.template';


const indexPage = `
    <div class="container d-flex flex-column justify-content-center">
        ${appTitle} <br />
        ${usersContainer(fiveUserDetails)}
        <button type="button" class="btn btn-primary m-3 randomize-btn">Randomize</button>
    </div>
`;

if (window.location.pathname === '/') {
    mountApp('#app', indexPage);
} else {
    mountApp('#app', '<h1>Page 404</h1>')
}
