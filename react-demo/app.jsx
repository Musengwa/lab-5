import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function App() {
  const [text, setText] = useState(false);
  const currentHour = dayjs().hour();

  const handleClick = () =>{
    if(text){
        setText(" This component dynamically updates its greeting based on the current time of day. Try changing the system time to see it in action!")
    }
    else{setText(null)}
  }
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
      <div className="row bg-white rounded-4 shadow-lg overflow-hidden w-100" style={{ maxWidth: "900px" }}>
        {/* Left Side: Image */}
        <div className="col-md-6 p-0">
          <img
            src="https://images.unsplash.com/photo-1612831455544-c572e0f6b86b?auto=format&fit=crop&w=800&q=80"
            alt="Cool Image"
            className="img-fluid h-100 w-100 object-fit-cover"
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Right Side: Greeting and Description */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-4 text-center text-md-start">
          <Name time={currentHour} />
          <p className="text-muted mt-3">
           {text}
          </p>
          <button className="btn btn-primary mt-4 px-4 py-2 shadow-sm" onClick={handleClick}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

function Name({ time }) {
  const [greeting, setGreeting] = useState("Good day");

  useEffect(() => {
    if (time >= 5 && time <= 12) {
      setGreeting("Good morning");
    } else if (time >= 13 && time <= 18) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, [time]);

  return (
    <h2 className="text-primary fw-bold">
      {greeting}
    </h2>
  );
}