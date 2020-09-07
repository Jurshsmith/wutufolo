
import { fromEvent, interval } from 'rxjs';
import { map, concatMap, switchMap, catchError, debounce } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { populateUsersTemplate } from '../utils';


const processData = [
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
];


const randomizeButton = document.querySelector('.randomize-btn');

const randomizeButtonStream = fromEvent(randomizeButton, 'click');

// important to define your stream in a variable, it cooks up the whole structure of how the observable would look like

const randomizeButtonStream$ = randomizeButtonStream.pipe(
    map(
        () => Math.floor(Math.random() * 500)
    )
)


const updatedStream$ = randomizeButtonStream$.pipe(
    debounce(() => interval(500)),
    concatMap( randomOffset => fromFetch(`https://api.github.com/users?&since=${randomOffset}`) ),
    ...processData
);

updatedStream$.subscribe({
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

// you need to subscribe to an observable before it can listen to events
