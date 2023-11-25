function App() {

    let arr = [0, 1, 2, 3, 4, 5, 6];

    let obj = {
        name: "Alexa",
        age: 10
    }

    let cars = ["BMW", "Aston Martin", "Schulin", "CAPA", "Nissan", "FORD", "Ferrari", "lamborghini"];
    // react expects from us to give a unique key to all the elements of an array or list. 
    // key is a property in react not a attribute in HTML so , it needs to be passed with array items.

    let student = [{
        name: "Akhil",
        age: 23,
        marks: 95
    },
    {
        name: "rahil",
        age: 24,
        marks: 90
    },
    {
        name: "rahul",
        age: 25,
        marks: 92
    }];

    return (
        <>
            <h1>Arrays and Objects in Javascript</h1>
            {arr.map((num) => <h2>{num}</h2>)}
            {arr.filter((num) => num % 2 == 0).map((num) => <h3>{num}</h3>)}
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, i) => <li key={i}>{car}</li>)}
            </ul>
            <h1>Student Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>StudentName</th>
                        <th>Age</th>
                        <th>Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((stu) => (<>
                        <tr>
                            <td>{stu.name}</td>
                            <td>{stu.age}</td>
                            <td>{stu.marks}</td>
                        </tr>
                    </>))}
                </tbody>
            </table>

        </>
    )
}

const Table = () => {
    const itemsSold = [
      { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
      { id: 2, name: "iPad Pro", price: 800, qty: 18 },
      { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
      { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
      { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 }
    ];
    
    return (
        
      <>
        <h1>Record of sold items</h1>
        <table border="1px">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Selling price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {itemsSold.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.qty}</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total Revenue</td>
                    <td colspan="3">$5800</td>
                </tr>
            </tfoot>
        </table>
      </>
    );
  };

function App2(){ // Conditional Rendering
    let showTable = false;

    if(showTable){
        return <Table />
    }
    return <App />
  }

function Conditionals(){
    let loggedIn = true;

    let name = "Alexa";
    let Lname = "Diaz";
    

    return (
        <>
            <h1>Hello {(loggedIn?Lname || name:"User")}!</h1>
            {loggedIn && <h2>Welcome to the Portal</h2>}
        </>
    )
    
}

//ReactDOM.createRoot(document.getElementById('root')).render(<><Conditionals /></>);

const timeTable = {
    Monday: {
      9: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      10: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour"
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour"
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour"
      }
    },
    Tuesday: {
      9: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour"
      },
      11: {
        subject: "Environtal Studies",
        teacher: "Rakesh Prakash",
        time: "1 hour"
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      },
      14: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      15: {
        subject: "Physics Practical",
        teacher: "Sumit Yadav",
        time: "1 hour"
      }
    },
    Wednesday: {
      9: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      },
      10: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour"
      },
      11: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      13: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour"
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      15: {
        subject: "Chemistry Practical",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      }
    },
    Thursday: {
      9: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour"
      },
      11: {
        subject: "Chemistry",
        teacher: "Vedanti Joshi",
        time: "1 hour"
      },
      13: {
        subject: "Maths",
        teacher: "Brijesh Mishra",
        time: "1 hour"
      },
      14: {
        subject: "Physics",
        teacher: "Sumit Yadav",
        time: "1 hour"
      },
      15: {
        subject: "Biology Practical",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      }
    },
    Friday: {
      9: {
        subject: "English Litrature",
        teacher: "Mayur Pandey",
        time: "1 hour"
      },
      10: {
        subject: "Hindi Sahitya",
        teacher: "Ramesh Jha",
        time: "1 hour"
      },
      11: {
        subject: "English Grammar",
        teacher: "Aditi Upasane",
        time: "1 hour"
      },
      13: {
        subject: "Biology",
        teacher: "Kuldeep Narayan",
        time: "1 hour"
      },
      14: {
        subject: "Hindi Vyakaran",
        teacher: "Sony Desai",
        time: "1 hour"
      },
      15: {
        subject: "PT",
        teacher: "Sonu Tyagi",
        time: "1 hour"
      }
    }
  };

const App3 = () => {

return (
    <>
    <table border="1">
      <caption>School time-table of a class 12th Student.</caption>
      {/* Write your code from here */}
      <thead>
          <tr>
            <th></th>
            <th>9am-10am</th>
            <th>10am-11am</th>
            <th>11am-12noon</th>
            <th>12noon-1pm</th>
            <th>1pm-2pm</th>
            <th>2pm-3pm</th>
            <th>3pm-4pm</th>
        </tr>
    </thead>
    <tbody>
    {Object.entries(timeTable).map(([k, v]) => (<><tr><th>{k}</th>
                <td>{v[9].subject}</td>
                <td>{v[10].subject}</td>
                <td>{v[11].subject}</td>
                <td>Break</td>
                <td>{v[13].subject}</td>
                <td>{v[14].subject}</td>
                <td>{v[15].subject}</td>
            </tr>
        	</>
            ))}
    </tbody>
    </table>
    </>
    )
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(<App3 />);