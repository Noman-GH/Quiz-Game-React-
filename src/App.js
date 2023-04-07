import { useState } from "react";
import "./assets/app.css";
import Quiz from "./components/quiz";
import { useEffect } from "react";

function App() {
    const [questionNum, setQuestionNum] = useState(1);
    const [stop, setStop] = useState(false);
    const [pyramidActive, setPyramidActive] = useState(true);
    const [earned, setEarned] = useState("$ 0");

    const data = [
        {
            id: 1,
            question:
                " In a website browser address bar, what does www stands for?",
            answers: [
                {
                    text: "World Wide Web",
                    correct: true,
                },
                {
                    text: "Wide Web World",
                    correct: false,
                },
                {
                    text: "World Web Wide",
                    correct: false,
                },
                {
                    text: "Web Wide World",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "Which of the following is not a Javascript framework?",
            answers: [
                {
                    text: "Node",
                    correct: false,
                },
                {
                    text: "React",
                    correct: false,
                },
                {
                    text: "Cassandra",
                    correct: true,
                },
                {
                    text: "vue",
                    correct: false,
                },
            ],
        },
        {
            id: 3,
            question: "How can a datatype be declared to be a constant type?",
            answers: [
                {
                    text: "var",
                    correct: false,
                },
                {
                    text: "const",
                    correct: true,
                },
                {
                    text: "let",
                    correct: false,
                },
                {
                    text: "constant",
                    correct: false,
                },
            ],
        },
        {
            id: 4,
            question:
                "Which of the following keywords is used to define a variable in Javascript?",
            answers: [
                {
                    text: "Var",
                    correct: false,
                },
                {
                    text: "Let",
                    correct: false,
                },
                {
                    text: "Both A and B",
                    correct: true,
                },
                {
                    text: "None",
                    correct: false,
                },
            ],
        },
        {
            id: 5,
            question:
                "Which of the following methods can be used to display data in some form using Javascript?",
            answers: [
                {
                    text: "document.write()",
                    correct: false,
                },
                {
                    text: "console.log()",
                    correct: false,
                },
                {
                    text: "window.alert()",
                    correct: false,
                },
                {
                    text: "All of above",
                    correct: true,
                },
            ],
        },
        {
            id: 6,
            question:
                "What is the output of the following code? print(NaN === NaN)",
            answers: [
                {
                    text: "true",
                    correct: false,
                },
                {
                    text: "false",
                    correct: true,
                },
                {
                    text: "undefined",
                    correct: false,
                },
                {
                    text: "error",
                    correct: false,
                },
            ],
        },
        {
            id: 7,
            question:
                "Which of the following is used in React.js to increase performance?",
            answers: [
                {
                    text: "Original DOM",
                    correct: false,
                },
                {
                    text: "Virtual DOM",
                    correct: true,
                },
                {
                    text: "Both A and B",
                    correct: false,
                },
                {
                    text: "None of above",
                    correct: false,
                },
            ],
        },
        {
            id: 8,
            question:
                "Identify the one which is used to pass data to components from outside?",
            answers: [
                {
                    text: "useState",
                    correct: false,
                },
                {
                    text: "setState",
                    correct: false,
                },
                {
                    text: "Both A and B",
                    correct: false,
                },
                {
                    text: "props",
                    correct: true,
                },
            ],
        },
        {
            id: 9,
            question: "How many elements can a valid react component return?",
            answers: [
                {
                    text: "1",
                    correct: true,
                },
                {
                    text: "2",
                    correct: false,
                },
                {
                    text: "3",
                    correct: false,
                },
                {
                    text: "4",
                    correct: false,
                },
            ],
        },
        {
            id: 10,
            question:
                "Using which of the following command can prevent default behaviour at in react?",
            answers: [
                {
                    text: "avoidDefault()",
                    correct: false,
                },
                {
                    text: "revokeDefault()",
                    correct: false,
                },
                {
                    text: "preventDefault()",
                    correct: true,
                },
                {
                    text: "None of above",
                    correct: false,
                },
            ],
        },
        {
            id: 11,
            question:
                "Which of the following function is used to change the state of react class component?",
            answers: [
                {
                    text: "useState()",
                    correct: false,
                },
                {
                    text: "this.useState()",
                    correct: false,
                },
                {
                    text: "setState()",
                    correct: false,
                },
                {
                    text: "this.setState()",
                    correct: true,
                },
            ],
        },
        {
            id: 12,
            question:
                "Choose the method with refers to the parent class in ReactJS?",
            answers: [
                {
                    text: "this()",
                    correct: false,
                },
                {
                    text: "inherit()",
                    correct: false,
                },
                {
                    text: "self()",
                    correct: false,
                },
                {
                    text: "super()",
                    correct: true,
                },
            ],
        },
        {
            id: 13,
            question:
                "Which of the following are two ways to handle data in react?",
            answers: [
                {
                    text: "Services and Components",
                    correct: false,
                },
                {
                    text: "State and Props",
                    correct: true,
                },
                {
                    text: "State and Services",
                    correct: false,
                },
                {
                    text: "State and Component",
                    correct: false,
                },
            ],
        },
        {
            id: 14,
            question:
                "What happens if you render an input element with disabled = {false}?",
            answers: [
                {
                    text: "Will be rendered as enabled",
                    correct: true,
                },
                {
                    text: "Will be rendered as disabled",
                    correct: false,
                },
                {
                    text: "will not be rendered at all",
                    correct: false,
                },
                {
                    text: "None of above",
                    correct: false,
                },
            ],
        },
        {
            id: 15,
            question: "In react, the key should be?",
            answers: [
                {
                    text: "Unique in DOM",
                    correct: false,
                },
                {
                    text: "Unique among his siblings only",
                    correct: true,
                },
                {
                    text: "Does not require to be unique",
                    correct: false,
                },
                {
                    text: "All of above",
                    correct: false,
                },
            ],
        },
    ];

    const money = [
        { id: 15, amount: "$ 1000000" },
        { id: 14, amount: "$ 500000" },
        { id: 13, amount: "$ 200000" },
        { id: 12, amount: "$ 100000" },
        { id: 11, amount: "$ 50000" },
        { id: 10, amount: "$ 40000" },
        { id: 9, amount: "$ 30000" },
        { id: 8, amount: "$ 20000" },
        { id: 7, amount: "$ 10000" },
        { id: 6, amount: "$ 5000" },
        { id: 5, amount: "$ 2000" },
        { id: 4, amount: "$ 1000" },
        { id: 3, amount: "$ 500" },
        { id: 2, amount: "$ 200" },
        { id: 1, amount: "$ 100" },
    ];

    useEffect(() => {
        questionNum > data.length && setStop(true);
        questionNum > 1 &&
            setEarned(money.find((m) => m.id === questionNum - 1).amount);
    }, [questionNum, money]);

    return (
        <div className="app">
            <div className="main">
                {stop ? (
                    <h1 className="endText">You earned {earned}</h1>
                ) : (
                    <>
                        <Quiz
                            data={data}
                            setStop={setStop}
                            questionNum={questionNum}
                            setQuestionNum={setQuestionNum}
                            setPyramidActive={setPyramidActive}
                        />
                    </>
                )}
            </div>
            <div className="pyramid hide">
                <ul className="moneyList">
                    {money.map((m, index) => {
                        return (
                            <li
                                key={index}
                                className={
                                    questionNum === m.id && pyramidActive
                                        ? "moneyListItem active"
                                        : "moneyListItem"
                                }
                            >
                                <span className="moneyListItemNumber">
                                    {m.id}
                                </span>
                                <span className="moneyListItemAmount">
                                    {m.amount}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
