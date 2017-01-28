RxJS powered state management for Angular applications, inspired by Redux

Redux store is a controlled state container developed to help write consistent applications on top of Angular. Core tenets:

    State is a single immutable data structure
    Actions describe state changes
    Pure functions called reducers take the previous state and the next action to compute the new state
    State accessed with the Store, an observable of state and an observer of actions
    
These core principles enable building components that can use the OnPush change detection strategy giving you intelligent, performant change detection throughout your application.

For more information I am going to make a video tutorial where I will explain how to use Redux on the top of the Angular2.

How to run this repo:

git clone https://github.com/GhatuDB/Angular2-Redux-Typescript.git
cd Angular2-Redux-Typescript
npm install
ng serve 

http://localhost:4200 


