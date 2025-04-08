# Project Requirement 

---

## 🔹 Frontend (React + TypeScript + Vite)

### 1. React + TypeScript
- Functional Components and Hooks
- Typing props, state, and custom hooks
- Context API (for global state)
- Form handling (`react-hook-form`)
- Error boundaries and `Suspense`
- Performance optimization (memoization, lazy loading)

### 2. State Management
- Zustand (lightweight Redux alternative)
- React Query (`@tanstack/react-query`) — server state caching and API calls
- Global state patterns: when to use Context, Zustand, or React Query

### 3. Form and Validation
- `react-hook-form` + `zod` or `yup` for schema-based validation
- Controlled vs uncontrolled components

### 4. UI Libraries & Styling
- `@radix-ui/react-*`: Unstyled, accessible UI primitives
- `lucide-react`: Icon system
- `tailwindcss` + `clsx` / `classnames` + `tailwind-merge`
- `shadcn/ui`: Radix + Tailwind-based reusable UI components

### 5. Data Grids & Tables
- `react-data-grid` or `@tanstack/react-table`
- Infinite scroll, virtual lists: `react-virtuoso`, `react-infinite-scroll-component`

### 6. Charts
- `recharts` for visualizations and dashboards

### 7. Other Concepts
- File uploads: image preview, `html2canvas`, `.xlsx` export/import
- 3D rendering: `three.js`
- GIS/Maps: ArcGIS, OpenLayers (`ol`, `proj4`, `ol-geocoder`, `@arcgis/core`)
- Auth Integration: `react-oidc-context` for OIDC flow

---

## 🔹 Backend (Node.js + Express + Prisma + TypeScript)

### 1. Core Frameworks
- Express.js fundamentals: middleware, routing, error handling
- TypeScript with Node.js: interfaces, types, enums, modules

### 2. Database Layer
- Prisma ORM: schema definition, relationships, migrations
- SQL Basics (PostgreSQL or MySQL)

### 3. Authentication & Authorization
- Passport.js (`passport-jwt`, `passport-local`)
- JWT and session-based auth
- Keycloak: enterprise SSO integration

### 4. File Uploads
- `multer` for local uploads
- MinIO / Azure Blob for object storage

### 5. API Docs
- Swagger with `swagger-jsdoc`, `swagger-ui-express`

### 6. Queue & Messaging
- RabbitMQ (`amqplib`) for async jobs & messaging

### 7. Security
- Password hashing: `argon2`
- OWASP best practices: validation, sanitization, input protection

---

## 🔹 Shared / Full-stack Concepts

### 1. Validation
- `zod` for frontend + backend validation
- DTOs or schemas for strong input typing

### 2. Error Handling
- Centralized handling with `@hapi/boom`
- Custom error classes and middleware

### 3. Logging
- `winston`, `winston-daily-rotate-file`, `winston-azure-blob`

### 4. Monitoring
- `@sentry/react`, `@sentry/node`, `@sentry/profiling-node` for error tracking

---

## 🔹 DevOps & Build Tools

### 1. Frontend Build Tools
- Vite: fast dev server and bundler
- TypeScript compilation with `tsc`
- Code quality: ESLint + Prettier

### 2. Backend Build Tools
- `ts-node`, `nodemon` for local development
- `webpack`, `pkg` for production builds and binary packaging

### 3. Testing
- Backend: Jest for unit & integration tests
- Frontend (optional): React Testing Library (RTL), Cypress, Playwright

---
# Self study
### List
 1. Node.js
 2. Express.js
 3. PostgreSQL
 4. TypeScript
 5. Prisma ORM
 6. ShadCN/UI
 7. React with TypeScript
 8. pgAdmin
 9. GIT 
 10. Tailwind CSS
 11. Zod
 12. Linux Commands 
 13. Docker
 14. Browser Frontend Debugging
 15. Backend Node.js Debugging
## Vite 
- To start with the vite project 
```bash
$ npm create vite@latest
# You can also directly create the vite react ts app using the following command
$ npm create vite@latest app-name -- --template react-ts
# You can also use . for creating the project structure in the current directory

```
## React
- React apps are made up of components.
- A component is a piece of the UI user interface that has its own logic and apperance.
- A component can be as small as button, or as large as an entire page.
- React components are JavaScript functions that return markup.
```jsx
    export default function MyButton(){
        return <button>I'm a button</button>
    }
```
- Now, you have declared MyButton, now you can nest it into another component.
```jsx
    import MyButton fromn './MyButton.jsx';
    function MyApp(){
        return <>
        <h1>Hello</h1>
        <MyButton />
        </>
    }
```
- All the react component must start with capital letter and rest html elements can be lowercase.
- The export default component define the main main component in the file.
- JSX is Javascript XML representation.
- JSX is more stricter than the HTML. You have to close the tag 
```html
<br />
```
- You can not return multiple JSX tags or HTML tags instead you have to wrap it into the shared single parent tag 
```html
<!-- Either use the html tag for enclosing  -->
<div></div>
<!-- Or you can use the react fragements that are empty tags -->
<></>
```
```jsx
function Demo(){
    return <>
    <h1>Hello</h1>
    <MyButton />
    <p>Mayank</p>
    </>
}
```
- If you have alot of html tags for porting to JSX then you can use online converter.
### Adding Styles
- You can add styles using the clasName attribute in the tag.
- It works the same way as the class attribute in the html tag.
```jsx
function MyApp(){
    return <p className="red">Mayank</p>
}
```
```css
.red{
    border-radius:50%;
}
```
- react does not prescribe the way you are going to add the css.
- You can either use the < link > tag.
- Or if you are using the build tools, you can refer to its documentation.
### Displaying Data
- JSX lets you put the markup into JavaScript.
- Curly braces lets escape back into the JavaScript.
- So that you can embedd some variable from your code and display it into the user.
- You can also escape into JavaScript from the JSX attributes, but you have to use the curly braces instead of quotes.

```jsx
function MayankDemo{
    let user={
        name:"Mayank Choudhary".
        imageURL:"http://someimg.com/img",
        imageSize:90
        }
    return <>
    <h2>Name : {user.name}</h2>
    <img src={user.imageURL} style={
        {
            width:user.imageSize
            height:user.imageSize
        }
    }>
    </>
}
```
- style={{}} is not a special syntax but the regular object inside the style = {} JSX curly braces.
- You can use the style attributes when your styles is based on the javascript variables.
### Conditional Rendering 
- In React, there is no special syntax for writing conditions.
- You can use the simple if statement for writing the conditions.
- Or you can use the conditional operator for more compact code.
```jsx
    function ConditionalRenderingUsingIf{
        let isLoggedIn=false;
        let content=null;
        if(isLoggedIn)
        {
            content=<Login />;
        }else{
            content=<Dashboard/>
        }
        return <>
        {content}
        </>;

    }
```
```jsx
    function ConditionalRenderingUsingConditionalOperator(){
        let isLoggedIn=false;
        return <>
        {isLoggedIn?<Login/>:<Dashboard/>}
        </>
    }
```
- When you do not want a separate else branch then you can use the **logical && <Component/>**

```jsx
    function ConditionalRenderingUsingConditionalOperator(){
        let isLoggedIn=true;
        return <>
        {isLoggedIn && <Dashboard/>}
        </>
    }
```
### Rendering Lists
- You will rely on the JavaScript features like for loop and array map() functions for rendering the list of components.
```jsx
            function MayankList(){
                let list=[{name:"Mayank",id:1},{name:"Tushar",id:2}];
                let listContent=list.map(item =>
                <li key={item.id}>{item.name}</li>
                )
                return <ul>{listContent}</ul>
            }
```
- < li > has a key attribute.
- For each item in a list, you should pass a strin or number that uniquely identifies that item among its siblings.
- Usually, a key should be coming from the database ID.
- React uses your keys to know what happened if you later insert, delete or reorder the items.
### Responding to events
- You can responds to the event by declaring the event handler functions inside your components.
```jsx
function MayankEventHandler(){
    function mayankHandler(){
        alert('You clicked me !!');
    }
    return <button onClick={mayankHandler}>Click Me !</button>
}
``` 
- Do not add parenthesis while assiging the function to the onClick attribute otherwise it will call the function instead just add it withou paranthesis so that react will automatically call it when the button is clicked.
### Updating the screen
- You will want you component to remember some information and display it. For Example: count the number of times the button is clicked.
- To do this add state to your component.
- First import useState from the react.
- useState will return you two things inside the array the very first thing is the state variable itself and second is the setState Function which will be used for updating the state. 
- You can give them any names the way you want. However, remember it will return two values inside the array.
- You can pass the initial value to the useState() hook as an parameter.
- Whenever you change the state vaue it causes the component to re-render.
- If you call the same component multiple times then each component will have its own state.
```jsx
import {useState} from 'react';
function MayankUseStateDemo(){
    let [count,setCount]=useState(0);
    function incrementCountHandler(){
        setCount(count+1);
    }
    function decrementCountHandler(){
        setCount(count-1);
    }
    return <>
    <button onClick={incrementCountHandler}>Increment</button>
    Count : <p>{count}</p>
    <button onClick={decrementCountHandler}>Decrement</button>
    </>
}
```
### Using Hooks 
- Functions starting with use are called as Hooks.
- useState is a built-in hook provided by React.
- You can also create your own separate hooks by combining different exisiting hooks.
- Hooks are more restrictive as compared to the other functions. You can only call hooks at the top of your components or other Hooks.
- If you want to use a useState in the condition or loop, extract the new component and put it there.
### Sharing data between components
- If there are multiple same component and that component is having the useState inside it then each component will maintain its own state independent of each other.
```jsx
  function MayankDemo(){
    return <>
    <MyButton />
    <MyButton />
    </>
  }
  function MyButton(){
    let [count,setCount]=useState(0);
    function incrementCountHandler(){
        setCount(count+1);
    }
    function decrementCountHandler(){
        setCount(count-1);
    }
    return <>
    <button onClick={incrementCountHandler}>Increment</button>
    Count : <p>{count}</p>
    <button onClick={decrementCountHandler}>Decrement</button>
    </>
  }
```
- See, the other button count state will not affect the other button count state.
- However, often you will need to share the data among different components and always update together.
- You will need to shift the state to the closest ancestor containing those components which are sharing the data and updating it together.
- Moving the state to the closest component which contains all of the components.
- lifting the state up means , shifting the state up and sharing the state among all the components.
```jsx
  function MayankDemo(){
    let [count,setCount]=useState(0);
    function incrementCountHandler(){
        setCount(count+1);
    }
    function decrementCountHandler(){
        setCount(count-1);
    }
    return <>
    <MyButton count={count} incrementHandler={incrementCountHandler} decrementHandler={decrementCountHandler}/>
    <MyButton count={count} decrementHandler={decrementCountHandler} incrementHandler={incrementCountHandler} />
    </>
  }
   function MyButton({count,incrementHandler,decrementHandler}){

    return <>
    <button onClick={incrementHandler}>Increment</button>
    Count : <p>{count}</p>
    <button onClick={decrementHandler}>Decrement</button>
    </>
   }
```
- The information you passed down are called as props.
### Practice - Tic-Tac-Toe Game
```jsx
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

```
### React Developer Tools
- React DevTools let you check the props and the state of your React components.
- JavaScript supports closures which means that inner function hav access to the variables and functions defined in the outer functions. For e.g. - handleClick() function has access to the state variable and setState function defined in the outer functional component.
- While assigning the function as an prop make sure you are not adding the parenthesis instead you are just passing its name and if you want to pass the parameter then you better pass an anonymuous function which internally call the function having parameter as it avoid the infinite loop condition.
- arr.slice() is an javascript method used for copying the elements of array and creating a new array.
- When a list is re-rendered, React takes each list item's key and searches the previous list's items for a matching key.
- If the current list has a key that does not exists before, React creates a component.
- If the current list does not have a key that existed before then react will destroy the component and state is re-created.
- If keys is matched in previous exisiting list and new list then the component is moved.
- key is a special and reserved property in React. When a element is created, React extracts the key property and stores the key directly on the returned element.
- On the basis of key React descided which component is to be updated.
- Keys no need to be globally unique but they must be unique among the siblings components.

### Thinking in React
- You will aways break your application into small pieces called as components.
- Then you define different visual states for each of your components.
- Finally you connect all of your components together so that data flows through them.
```json 
[
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]
```
- To implement the UI in React, you will always follow these following steps :
  1. **Break the UI into a component hierrachy**
    - Start by drawing boxes around each component and sub-component in the mockup and naming them.
    - Usually, designer already name these component in their design tools.
    - Depending upon the background, you can think of breakng the design into components in three different ways :
      1. **Programming** 
        - Use the same technique for deciding if you should create a new function or object.
        - One such function is single responsibility principle.
        - The above principle states that the component should do only one thing.
      2. **CSS**
        - Consider what you make class selector for.
        - React components are bit less granular.
      3. **Design**
        - Consider how you would organize the design's layers.
    - If your JSON is well strucutred, it naturally maps to the component structure of your UI.
    - UI and data models usually have the similar information architecture, the same shape.
    - Separate your UI into components, where each component matches one piece of your data model.
  2. **Build a Static version in React**
    - Build a UI from your data model without any interactivity. Because it is easier to build the static version of your app then adds interactivity later on.
    - Building a static version requires a lot of writing and not thinking. While adding interactivity requires a lot of thinking and not writing.
    - To build the static version of your appp that renders your data model, you'll want to build components that reuse other components and pass data using props.
    - Props are the way of passing the data from parent component to child component.
    - Never use the state to build the static version of your app.
    - State is reserved only for interactivity i.e. data changes over time.
    - You can either go top-downor bottom-up approach.
    - Small projects- top down
    - Large projects - bottom up
    - One way data flow which means data is flowing from top level component.
  3. **Find the minimal but complete representation of UI state**
    - To make the UI interactive, you need to change the underlying data model. And for that you will be using the useState.
    - Think of state as the minimal set of changing data that your apps needs to remember.
    - The most important thing while defining the state is DRY. i.e. Don't repeat yourself.
    - Figure out the absolute minimal representation of state that your application is needs and compute everything else on demand.
    - If your building shopping list then you can have a state as array of shopping list but let suppose you also want the list of items then instead of creating another state of list of items use the length method.
    - Which of them are states and identify the ones that are not :
      1. Does it remain unchanges overtime? It is not a state.
      2. Is it passed in from a parent via props ? It is not state.
      3. Can you compute it based on some existing state and props then it is not a state.
    **Props vs State**
      - There aer two types of model data in React: props and state. The two are very different.
      - Props are like argument you pass to a function. They let parent component pass the data to its child component.
      - State is like component's memory. It lets a comoppnent keep track of some information and change it in response to interactions.
      - Parent component will keep some information in state and pass it as props to child components.
  4. **Identify where your state should live**
    - After identifying your app's minimal state, you need to identify which component is responsible for for changing this state. Remember : React uses one way data flow, passing data down the component hierarchy from parent to child component.
    - It may not be immediately clear which state belongs to which component.
    - For each piece of state in your application : 
      1. Identify every component that renders something based on that state.
      2. Find their closest common parent component - a component above them all in the hierarchy.
      3. Decide where the state should live :
        1. Often, you can put the state directly into their common parent.
        2. You can also put the state into some component above their common parent.
        3. If you can't find a component where it makes sense to own the state, create a new component solelt for holding the state and add it somewhere in the hierarachy above the parent component.
      - We can add the state to the react component using the hook useState.
  5. **Add Inverse Data Flow**
    - Two way binding, means adding the value and onChange attribute together so that is works well together and keeps on updating the UI as well on the basis of value changed.

#### Installation
##### Creating React app
- If you want to build a new app or website with React, we recommend starting with a framework.
- If your app is well not served by the existing framework, you prefer to build your own framework or you can build the React app from scratch.
**Full-stack Frameworks**
- These recommended frameworks support all the features you need to deploy and scale your app in production.
**Full stack Frameworks do require a server**
- All the framework below support the CSR client side scriptiing, single page application SPA, and static site generation SSG. These apps can be deployed to a CDN or static hoisting service without a server.
- Additionally, these frameworks allows you to add server side rendring on a per-route basis, when it makes sense for your use case.
- This allows you to start with client only app. If your needs change later then you can opt-in to using server features on individual routes without re-writing your app.
1. **Next.js (App Router)**
 -  Next.js's App router is a React framework that takes full advantage of React's Architecture to enable full-stack React apps.
 ```bash
npx create-next-app@latest
 ```
 - Next.js is maintained by Vercel. You can deploy a Next.js app to any Node.js or serverless hosting, or to your own server. Next.js also supports static export which doesn't require server. Vercel additionally provides opt-in paid cloud services.

2. **React Router**
- React router is a most popular routing library for React and can be paired with Vite to create a full stack React Framework.
- It emphasizes standard Web APIs and has several ready to deploy templates for various Javascript runtimes and platforms.
- To create a new react router framework project
```bash
npx create-react-router@latest
```
- React router is maintained by Shopify

3. **Expo (for native apps)**
- Expo is a react framework that is used for creating the universal Android , IOS and web apps with truly native UIs.
- It provides a SDK for React Native that makes the native parts easier to use, 
- To create the new Expo project :
```bash
npx create-expo-app@latest
```
- Expo is maintained by the company Expo, Building Expo app is free and you can submit them to Google and Apple stores without restrictions. Expo additionally provides opt-in paid cloud services.
- There are other frameworks as well 
  1. Tanstack Start (Beta)
    - Fullstack react framework powered by tanstack router.
    2. It provides  a full document ssr, streaming, server functions , bundling and more using tools like Nitro and Vite.

  2. Redwood JS
  - React full stack framework with pre installed packages.
  - Pre configuration that makes easy to b build full stack web application.
##### **Which features make up the React team's full stack architecture vision ?**
-  Next/js's App Router bundler fully implement the official Rect Server components specification.
- This lets you mix build time, server-only and interactive components in a single React tree.
- For example you can create server-only component as an async function that reads from a database or from a file.
- Then you can pass data down from it to your interactive components.
```jsx
// This component runs only on the server (or during the build)
async function Talks({confiId}){
  // 1. You are on the server, so you can talk to the data layer. API endpoint not required.
  const talks = await db.Talks.findAll({confiId});
  // 2. Add any amount of rendering logic. It won't make your javascript bundle larger.
  const videos=talks.map(talk=>talk.video);
  // 3. Pass the data down to the components that will run in the browser.
  return <SearchableVideList videos={videos} / >
}
```
- Next.js also integrates data fetching with Suspense. This lets you specify a loading state (like a skeleton placeholder) for different parts of user interface directly in your react tree.
```jsx
<Suspense fallback={<TaskLoading/>}>
<Talks confId={confId}>/>
</Suspense>
```
- Server components and Suspense are react features rather than Next.js features.
##### **Start From Scratch for React App**
- If your app has constraints not well served by existing frameworks, you prefer your own framework, or you want to just learn basic of react app, there are options of starting or creating the react from scratch.
- Starting from scratch gives you more flexibility, but does require that you make choices on which tools to use for routing , data fetching and other common usage patterns.
- It is more like building your own framework rather than using the existing ones.
##### **Consider using a Framework**
- Starting from scratch is easy way of getting started with react.
- It is similar to building your own framework.
- It may happen that existing frameworks had already solved simple problems but you still have to solve them as you are not using the framework.
- In the future it may happen you need to have the server side rendering , static site genration, react server components. You will have to implement all of this on your own.
- You have to integrate to frameworks on your own.
- Existing frameworks elimate the network waterfall.
- Data fetching, routing and other features are also developed on your own.
1. **Install a build tool**
- The first step is to install a build tool like vite, parcel or rsbuild.
- These build tools provide features to package and run source code.
- Provide a deveopment server for local development
- build command to deploy your app to a production server.
**Vite**
- Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.
```bash
npm create vite@latest my-app -- --template react
```
- Vite is opinionated and comes with sensible defaults out of the box. Vite has  rich ecosystems plugins to suppor fast refresh , JSX, BABEL/SWC and other common features.
- Vite is already been used as a build tool in one of our recommended frameworks react router.
**Parcel**
- Parcel combines a great out-of-the-box development experience with a scalable architecture that can take your project from just getting started to a massive application.
```bash
npm install --save-dev parcel
```
- Parcel supports fast referesh , JSX , TypeScript , FLow and styling out of the box. 
2. **Build Common Application Patterns**
- The build tool listed start off with client only, single page application, but don't include common functionality like routing , data fetching or styling.
- The React ecosystem includes many tools for these problems. 
**Routing**
- Routing decides what content or pages to display when a user visits a particular url.
- You need to setup a router to map URLs to different parts of your map.
- You will also need to handle the nested routes, routes paramters and query parameters.
- Routes can be configured within your code, or defined based on your component folder and file structures.
- Routes are core part of modern applicatons, and are usually integrated with the data fetching (including pre fetching data for a whole page for faster loading), code splitting (to minimize client bundle sizes) and page rendering approaches (to decide how each gets generated).
- We suggest using 
  1. React Router
  2. Tanstack Router
**Data Fetching**
- Fetching data from server or other data sources is the most important thing in an application.
- Doing this properly requires loading states, error states and caching the fetched data, which can be complex.
- Purpose-built data fetching libraries do the hard work of fetching and caching the data for you. letting you focus on what data your app needs and how to display it.
- These libraries are typically used directly in your components, but can also be integrated into routing loaders for faster pre-fetching and better performance and in server rendering as well.
- Note that fetching data directly in components can lead to slower loading times due to network request waterfalls, so we recommend prefetching router loaders or on the server as much as possible.
- This allows a page's data to be fetched all at once as the page is being displayed.
- If you are fetching data from most backends or REST-style APIs, we suggest using:
1. React Query
2. SWR
3. RTK Query
- If you are fetching data from GraphQL API, we suggest using
1. Apollo
2. Relay
##### **Code Spitting**
- Code spitting is the process of breaking your app into smaller bundles that can be loaded on demand.
- An app's code size increases with every new feature and additional new dependency.
- Apps can become slow to load because all of the code for entire app needs to be sent before it is used.
- Caching, reducing features/ dependencies and moving some code to run on the server can help mitigate slow loading but are incomplete solutions that can sacrifice functionality if overused.
- Similarly, if you rely on the apps using your framework to split the code, you might encounter situations where loading becomes slower than if no code splitting were happening at all.
- For example, lazily loading a chart delays sending the code needed to render the chart,  splitting the chart code from the rest of the app.
- Parcel supports code splitting with React.lazy.
- However, if the chart loads it data after it has been initially rendered you are now waiting twice.
- This is a waterfall: reather than fetching the data for the chart and sending the code to render it simultaneously, you must wait for each step to complete one after another.
- Splitting code by route when integrated with bundling and data fetching, can reduce the initial load time of your app and the time it takes for the largest visible content of your app to render (Largest contentful paint).
##### Improving application Performance
- Since the build tool you select only support single page apps (SPAs) you will need to implement other rendering patterns like server side rendering (SSR), static site generation SSG, React server components RSC.
  1. **SPA Single page application**
    - It loads a single HTML page and dynamically update the HTML page as per the user interacts with the app.
    - SPAs are easier to get started with, but they can have the slower initial load times. SPAs are the default architecture for most of the build tools.
    

## React with TypeScript
## Tailwind CSS
## Prisma + PostgreSQl
## Node.js + Express.js + TypeScript

# Project 
## MapNest - Smart Property Explorer Roadmap

## 🚀 1. Core Technologies (Must-Know)

### Frontend Development (User Interface)

#### React with TypeScript
✅ **Why?** For building dynamic, component-based user interfaces.

📚 **Learn from:**
- [React Official Docs](https://react.dev/)
- [TypeScript Official Docs](https://www.typescriptlang.org/)
- [React + TypeScript Crash Course - Academind (YouTube)](https://www.youtube.com/watch?v=FJDVKeh7RJI)

#### Tailwind CSS
✅ **Why?** For responsive and fast styling.

📚 **Learn from:**
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation)
- [Tailwind Basics - FreeCodeCamp (YouTube)](https://www.youtube.com/watch?v=mr15Xzb1Ook)

#### ShadCN/UI (Optional UI Library)
✅ **Why?** For pre-built, accessible UI components.

📚 **Learn from:**
- [ShadCN UI GitHub](https://github.com/shadcn/ui)

#### Mapping Libraries
✅ **Why?** To integrate interactive maps (Leaflet.js or Mapbox GL JS).

📚 **Learn from:**
- [Leaflet Official Docs](https://leafletjs.com/)
- [Mapbox GL JS Docs](https://docs.mapbox.com/mapbox-gl-js/)

### Backend Development (Server, APIs, Database)

#### Node.js with Express.js
✅ **Why?** For building RESTful APIs.

📚 **Learn from:**
- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [Express.js Docs](https://expressjs.com/)
- [Udemy: Node.js, Express, MongoDB & More](https://www.udemy.com/course/nodejs-express-mongodb-more-the-complete-bootcamp/)

#### TypeScript (Backend)
✅ **Why?** For adding static typing to JavaScript, reducing bugs.

📚 **Learn from:**
- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [Codecademy: TypeScript Course](https://www.codecademy.com/learn/learn-typescript)

#### PostgreSQL with PostGIS (Geospatial Database)
✅ **Why?** For managing geospatial data (property locations, amenities).

📚 **Learn from:**
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [PostGIS Docs](https://postgis.net/documentation/)
- [PostGIS Tutorial for Beginners (YouTube)](https://www.youtube.com/watch?v=VvJeeQ14X4Y)

#### Prisma ORM
✅ **Why?** For managing database queries with ease.

📚 **Learn from:**
- [Prisma Docs](https://www.prisma.io/docs/)

#### Authentication (JWT, Bcrypt)
✅ **Why?** For securing API endpoints.

📚 **Learn from:**
- [JWT.io Introduction](https://jwt.io/introduction/)
- [JWT Authentication Tutorial with Node.js (YouTube)](https://www.youtube.com/watch?v=7Q17ubqLfaM)

### GIS Technologies (Spatial Data Handling)

#### Geospatial Queries with PostGIS
✅ **Why?** To handle complex GIS operations like proximity searches, heatmaps, etc.

📚 **Learn from:**
- [PostGIS Tutorial (Official)](https://postgis.net/workshops/postgis-intro/)
- [PostGIS Tutorial for Beginners (YouTube)](https://www.youtube.com/watch?v=VvJeeQ14X4Y)

#### GeoJSON Format (for Spatial Data Exchange)
✅ **Why?** Widely used for exchanging geographic data.

📚 **Learn from:**
- [GeoJSON Official Specification](https://geojson.org/)

#### Mapping APIs (Leaflet or Mapbox)
✅ **Why?** To display interactive maps in the frontend.

📚 **Learn from:**
- [Leaflet.js Tutorial](https://leafletjs.com/examples/quick-start/)
- [Mapbox GL JS Docs](https://docs.mapbox.com/mapbox-gl-js/)

---

## 🔧 Optional but Useful Tools

### Version Control (GIT & GitHub)
✅ **Why?** For code versioning and collaboration.

📚 **Learn from:**
- [Git Official Docs](https://git-scm.com/doc)
- [GitHub Learning Lab](https://lab.github.com/)

### Docker (Containerization for Deployment)
✅ **Why?** For deploying the app efficiently.

📚 **Learn from:**
- [Docker Docs](https://docs.docker.com/)

### API Testing Tools (Postman, Swagger)
✅ **Why?** For testing APIs and generating documentation.

📚 **Learn from:**
- [Postman Docs](https://learning.postman.com/)

---

## 📈 Learning Path (Roadmap)

### **Phase 1: Fundamentals (2-3 months)**
- JavaScript (if not familiar)
- TypeScript Basics
- Node.js + Express (APIs)
- PostgreSQL Basics

### **Phase 2: GIS Specialization (2 months)**
- PostGIS and Geospatial Queries
- GeoJSON Format
- Mapping with Leaflet or Mapbox

### **Phase 3: Full Stack Development (3-4 months)**
- React + TypeScript (Frontend)
- Prisma ORM with Node.js (Backend)
- Integration with GIS APIs

### **Phase 4: Advanced (Optional, 1-2 months)**
- Real-time Data with WebSockets
- Deployment (Heroku, Vercel, or Docker)
- Advanced Spatial Analysis (Heatmaps, Clustering)

---

## 📚 Top Learning Platforms

### Free:
- [freeCodeCamp](https://www.freecodecamp.org/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [PostGIS Workshop](https://postgis.net/workshops/postgis-intro/)

### Paid:
- [Udemy - Node.js, React, PostgreSQL Courses](https://www.udemy.com/)
- [Coursera - Specializations in GIS and Full-Stack Dev](https://www.coursera.org/)

---

This roadmap ensures you have the essential knowledge and hands-on practice to build **MapNest - Smart Property Explorer** successfully. 🚀
