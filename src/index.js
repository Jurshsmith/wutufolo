
import { Octokit } from "@octokit/rest";
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
import { module } from "../webpack.config";


const getGitHubUsers = () => {

    const octokit = new Octokit();
    octokit.request('GET /users').then(value => console.log("Some value ", value));
    
}


const simplePage = `
    <button onclick="getGitHubUsers()">Click here to see logs</button>
`;
 
function mountApp(){

    const app = document.querySelector('#app');
    console.log('App ', app);

    app.innerHTML = simplePage;

}

mountApp();
// range(1, 200)
//   .pipe(
//     filter(x => x % 2 === 1),
//     map(x => x + x)
//   )
//   .subscribe(x => console.log(x));

module.exports = {
    getGitHubUsers
}






// (async () => {
    

//     // const a = await octokit.request('GET /users');
//     // console.log('Cool ', a);

// })();
