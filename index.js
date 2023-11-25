// JAVASCRIPT

// const heading = document.createElement("h2");
// heading.textContent = "hello World";
// heading.className = "header";
// document.getElementById("root").append(heading);

// console.log('Javascript element - ' , heading);//DOM element


// REACT with JS

// const reactHeading = React.createElement("h1",{className : "head"} , "Hello React!");//React.createElement("h1",{className : "head", id : "reacthead", children : "Hello React!"} )
// console.log('React element - ' , reactHeading); // Object with props - defined in object argument (className , id , children , it will hold the content inside the element)

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// REACT with JSX

/* <></> updated version of react fragment */

// it is not a react component its just a simple variable
// const jsxHeading  = <React.Fragment> 
//                     <h1 className = "head">Hello JSX</h1>
//                     <p>this is created using JSX</p>
//                     </React.Fragment>

// React Component

function App() { // name convention for components starts with capital letter

    return (
        <>

            <h1 className="head">React Project</h1>
            <p>Skills used to make this project</p>
            <ol>
                <li>HTML</li>
                <li>javaScript</li>
                <li>CSS</li>
            </ol>
            <Name/>

        </>
    )
}

// react component using arrow function expression

// const Name = () => {
//     return (
//         <>
//             <p>JSX is javaScript XML</p>
//         </>
//     )
// }

// Also be written as below if just JSX needs to be returned

const Name = () =>( // paranthesis tells that we are returning jsx and whole thing inside it is single expression
        <>
            <p>JSX is javaScript XML</p>
        </>
    )

//ReactDOM.createRoot(document.getElementById("root")).render(App()); // App called as function

ReactDOM.createRoot(document.getElementById("root")).render(<><App /><Name/></>); // App called as react component

   

