import axios from "axios";

export default function App() {
  return (
    <div className="container-fluid">
      {" "}
      <MyComponent />
    </div>
  );
}
function MyComponent() {
  const headerApp = "MyChatApp";
  const studentName = "Bhushan Chaudhari";
  const studentId = "210940520020";
  const [inputchat, setinputchat] = ("");

  const handleinput = (e) => {
    const newvalue = e.target.value;
    setinputchat(newvalue);
  };
  const sendmessage = () => {};

  return (
    <div>
      <div className="row bg-secondary p-3 ">
        <div className="col fs-1">{headerApp}</div>
        <div className="col fs-4">
          {studentName} {studentId}
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-10 p-2 h-50">
          <input
            type="text"
            name=""
            id=""
            placeholder="Lets Chat Here..."
            className="form-control w-100 p-3 rounded-pill"
            onChange={handleinput}
          />
        </div>
      </div>
      <div className="col-2 p-2">
        <input
          type="button"
          value="send"
          className="form-control w-100 p-3 rounded-pill"
          onChange={sendmessage}
        />
      </div>
    </div>
  );
}
