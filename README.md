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
      3. 
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
