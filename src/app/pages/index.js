

import { mountApp } from './../utils/index';
import { appTitle } from './templates/app-title.template';
import { usersContainer } from './templates/users-container.template';


const indexPage = `
    ${appTitle}

    ${usersContainer}
`
if (window.location.pathname === '/') {
    mountApp('#app', indexPage);
} else {
    mountApp('#app', '<h1>Page 404</h1>')
}
