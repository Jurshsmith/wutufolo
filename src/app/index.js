
import { Octokit } from "@octokit/rest";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './pages/index';
import './Rx/';

window.getGitHubUsers = () => {
    const octokit = new Octokit();
    octokit.request('GET /users').then(value => console.log("Some value ", value));
}
