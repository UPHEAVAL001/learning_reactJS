
function Sum (){
    var a = 78+45;
    return a;
}

const header = <h2>JSX Expression</h2> // Jsx expression

function App(){

    var name = "Akhil";
    var age = 23;
    var demo = null;
    var boolean = true;
    var undefined;

    return (
        <>
            <h1>Starting JSX with {name}!</h1>
            {header}
            <p>{name} is {age} years old.</p>
            <p>Null value - {demo}.</p> 
            <p>boolean - {boolean.toString()}</p>
            <p>undefined - {undefined}</p>
            <p>Sum - {Sum()}</p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);