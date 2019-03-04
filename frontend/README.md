# React Demo

One Paragraph of project description goes here

This project is bootstrapped by: https://github.com/Microsoft/TypeScript-React-Starter

There is no backend integration for this project. Therefore all user-created are tempororily 
preserved in mobx and would disapper after the page is refreshed.

## Built With

* React
* Typescript
* Mobx

### Prerequisites

* node
* npm

### Running the project

```
npm install
```

```
npm run start
```

the server runs at http://localhost:3000 automatically for you


### Current Issues / Known Bugs
* CORS problem

  * there is no way I can call the existing API by primitive AJAX in the frontend since it has been blocked by CORS policy
  * To solve this issue, it would require the backend to return "access-control-allow-origin: *" in the request-response However I do not have control over this.
  * I could use native HTTP request but I also have to set up the backend server which is beyond this task.

* no backend Integration
* awful css 
* logout is needed 
* sloppy indentation 
* Router needs to be refactored
* generic form factory to handle all form validation is needed
* ui-kit is incomplete at this moment






