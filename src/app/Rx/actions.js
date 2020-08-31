import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs/operators';
import { populateUsersTemplate } from '../utils';

const randomOffset = Math.floor(Math.random() * 500);
const data$ = fromFetch(`https://api.github.com/users?&since=${randomOffset}`).pipe(
 switchMap(response => {
   if (response.ok) {
     // OK return data
     return response.json();
   } else {
     // Server is returning a status requiring the client to try something else.
     return of({ error: true, message: `Error ${response.status}` });
   }
 }),
 catchError(err => {
   // Network or other error, handle appropriately
   console.error(err);
   return of({ error: true, message: err.message })
 })
);
 
data$.subscribe({
 next: users => {
    const users_ = new Set();
    // user.login
    while (users_.size <= 6){
        users_.add(users[Math.floor(Math.random() * (users.length - 1))]);
    }
    const usersArray = [ ...users_ ];

    populateUsersTemplate(usersArray);
 },
 complete: () => console.log('done')
});

