
import { Octokit } from "@octokit/rest";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './pages/index';

window.getGitHubUsers = () => {
    const octokit = new Octokit();
    octokit.request('GET /users').then(value => console.log("Some value ", value));
}
