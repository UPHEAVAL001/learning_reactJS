let score = 0;
let wicket = 0;
let ballwiseRes = [];
let hit = 0;
let inputRef = React.createRef();

function handleAdd(run) {
    // if (wicket < 10) {
    //     if(run==0){
    //         ballwiseRes.push("*");
    //     }else{
    //         ballwiseRes.push(run);
    //     }
    //     score += run;
    //     rootElement.render(<><App /></>);
    // }

    hit = run;
    rootElement.render(<><App /></>);

}

function Wicket() {
    // if (wicket < 10) {
    //     ballwiseRes.push("W");
    //     wicket += 1;
    //     rootElement.render(<><App /></>);
    // }

    hit = "W";
    rootElement.render(<><App /></>);
}

const Scorebuttons = () => (
    <div>
        <button onClick={() => handleAdd(0)}>0</button>
        <button onClick={() => handleAdd(1)}>1</button>
        <button onClick={() => handleAdd(2)}>2</button>
        <button onClick={() => handleAdd(3)}>3</button>
        <button onClick={() => handleAdd(4)}>4</button>
        <button onClick={() => handleAdd(5)}>5</button>
        <button onClick={() => handleAdd(6)}>6</button>
        <button onClick={Wicket} >wicket</button>
    </div>
)

const Result = () => (
    <div>
    {ballwiseRes.map((r,i) => (

        <>  
            {i%6===0?<br />:null}
            <span key={i}>{r === "W"?<span className="wicket">{r}</span>:r}</span>&emsp;    
        </>))}
    </div>
)

function handleSubmit(event){
    event.preventDefault();
    console.log(event.type);
    
    if(typeof(hit) === "string" && wicket<10){
        wicket += 1;
        //ballwiseRes.unshift(<span>{hit}{" , "}{inputRef.current.value}</span>);
        ballwiseRes.unshift(<span>{`${hit}, ${inputRef.current.value}`}</span>); // using template literals
        rootElement.render(<App />);
        hit = 0;
        inputRef.current.value = "";
    }else if(wicket<10){
        score += hit;
        ballwiseRes.unshift(<span>{hit}{" , "}{inputRef.current.value}</span>);
        rootElement.render(<App />);
        hit = 0;
        inputRef.current.value = "";
    }
   
}

const Form = () => (
    <div>
        <form onSubmit={handleSubmit}>
            <input value = {hit} />
            <input ref={inputRef} placeholder="Comment on Shot!" />
            <button type="submit">Submit</button>
        </form>
    </div>
)

const App = () => (
    <>
        <hr />
        <h1>Score Keeper</h1>
        <h2>SCORE: {score}/{wicket} </h2>
        <Scorebuttons />
        <br />
        <Form />
        <hr />
        {/* <Result /> */}

        {ballwiseRes.map((r,i) => (<p key={i}>{r}</p>))}
        

    </>
)


var rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<><App /></>);








// Dynamic User Card another mini assignment
    //   let nameRef = React.createRef();
    //   let emailRef = React.createRef();
    //   let aboutRef = React.createRef();
      
    //   const Card = () => (
    //     <div className="card">
    //       <h3>Name: {nameRef.current.value} </h3>
    //       <p>Email: {emailRef.current.value} </p>
    //       <p>About: {aboutRef.current.value} </p>
    //     </div>
    //   );

    //   function handlechange(){
    //     rootElement.render(<><Card /><App /></>);
    //   }  
      
    //   const App = () => (
    //   	<>
    //     <div className="App">
    //       <div className="inputs">
    //         <input onChange={handlechange} ref={nameRef} placeholder="Name" />
    //         <input onChange={handlechange} ref={emailRef} type="email" placeholder="Email" />
    //         <textarea onChange={handlechange} ref={aboutRef} placeholder="About"></textarea>
    //       </div>
    //     </div>
    //     </>
    //   );

    //   const rootElement = ReactDOM.createRoot(document.getElementById("root"));
    //   rootElement.render(<App />);
