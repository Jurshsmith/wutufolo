
import { Octokit } from "@octokit/rest";
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
 
range(1, 200)
  .pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
  )
  .subscribe(x => console.log(x));

const octokit = new Octokit();


// (async () => {
    

//     // const a = await octokit.request('GET /users');
//     // console.log('Cool ', a);

// })();
