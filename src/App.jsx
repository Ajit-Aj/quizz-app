import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "What is the primary purpose of the useEffect hook in React?",
      answers: [
        {
          text: "To manage the component's state",
          correct: false,
        },
        {
          text: "To perform side effects in function components",
          correct: true,
        },
        {
          text: "To handle user input",
          correct: false,
        },
        {
          text: "To create a context",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question:
        "Which hook is used to access the previous state or props in a functional component?",
      answers: [
        {
          text: "useState",
          correct: false,
        },
        {
          text: "useRef",
          correct: true,
        },
        {
          text: "useEffect",
          correct: false,
        },
        {
          text: "useContext",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "What is the purpose of React's useMemo hook?",
      answers: [
        {
          text: "To memorize the result of a function",
          correct: true,
        },
        {
          text: "To perform side effects in function components",
          correct: false,
        },
        {
          text: "To manage component's state",
          correct: false,
        },
        {
          text: "To handle asynchronous operations",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "How do you optimize performance in a large React application?",
      answers: [
        {
          text: "By using multiple useState hooks",
          correct: false,
        },
        {
          text: "By using React.memo and useMemo hooks",
          correct: true,
        },
        {
          text: "By using class components instead of functional components",
          correct: false,
        },
        {
          text: "By avoiding the use of hooks",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question:
        "Which hook should you use to perform a data fetch when the component mounts?",
      answers: [
        {
          text: "useState",
          correct: false,
        },
        {
          text: "useEffect",
          correct: true,
        },
        {
          text: "useRef",
          correct: false,
        },
        {
          text: "useContext",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "What is the use of the useCallback hook?",
      answers: [
        {
          text: "To store a value between renders",
          correct: false,
        },
        {
          text: "To memoize a function",
          correct: true,
        },
        {
          text: "To create a stateful component",
          correct: false,
        },
        {
          text: "To perform side effects",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How can you manage global state in a React application?",
      answers: [
        {
          text: "Using useState in each component",
          correct: false,
        },
        {
          text: "Using useReducer with Context API",
          correct: true,
        },
        {
          text: "Using only useEffect",
          correct: false,
        },
        {
          text: "Using useMemo and useCallback",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What is the difference between useState and useReducer?",
      answers: [
        {
          text: "useState is used for complex state logic, while useReducer is used for simple state logic",
          correct: false,
        },
        {
          text: "useState is used for simple state logic, while useReducer is used for complex state logic",
          correct: true,
        },
        {
          text: "There is no difference",
          correct: false,
        },
        {
          text: "useState is asynchronous, while useReducer is synchronous",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the purpose of the useLayoutEffect hook?",
      answers: [
        {
          text: "It is similar to useEffect, but it fires synchronously after all DOM mutations",
          correct: true,
        },
        {
          text: "It is used to handle errors",
          correct: false,
        },
        {
          text: "It is used to manage state",
          correct: false,
        },
        {
          text: "It is used to optimize performance",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "How can you create a custom hook in React?",
      answers: [
        {
          text: "By using a class component",
          correct: false,
        },
        {
          text: "By creating a function that uses built-in hooks",
          correct: true,
        },
        {
          text: "By using useState and useEffect only",
          correct: false,
        },
        {
          text: "By using the render prop pattern",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the context API in React?",
      answers: [
        {
          text: "A way to manage component state",
          correct: false,
        },
        {
          text: "A way to pass data through the component tree without having to pass props down manually at every level",
          correct: true,
        },
        {
          text: "A method to fetch data",
          correct: false,
        },
        {
          text: "A way to create a higher-order component",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "What does the useImperativeHandle hook do?",
      answers: [
        {
          text: "It allows you to customize the instance value that is exposed when using ref",
          correct: true,
        },
        {
          text: "It manages side effects",
          correct: false,
        },
        {
          text: "It manages component state",
          correct: false,
        },
        {
          text: "It performs data fetching",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "When should you use React.memo?",
      answers: [
        {
          text: "To prevent unnecessary re-renders of functional components",
          correct: true,
        },
        {
          text: "To handle side effects",
          correct: false,
        },
        {
          text: "To manage state",
          correct: false,
        },
        {
          text: "To fetch data",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "What is the primary difference between useEffect and useLayoutEffect?",
      answers: [
        {
          text: "useEffect runs after the render is committed to the screen, while useLayoutEffect runs before the render is committed",
          correct: true,
        },
        {
          text: "useEffect is used for side effects, while useLayoutEffect is used for data fetching",
          correct: false,
        },
        {
          text: "There is no difference",
          correct: false,
        },
        {
          text: "useEffect runs synchronously, while useLayoutEffect runs asynchronously",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "How can you handle errors in React components?",
      answers: [
        {
          text: "Using the componentDidCatch lifecycle method in class components",
          correct: false,
        },
        {
          text: "Using Error Boundaries",
          correct: true,
        },
        {
          text: "Using try-catch blocks in functional components",
          correct: false,
        },
        {
          text: "Using the useErrorHandler hook",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
                <h1 className="endText">
                  Good Luck! {username} <br />
                  You earned: {earned}
                </h1>
              </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
