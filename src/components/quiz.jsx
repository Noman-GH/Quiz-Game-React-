import React, { useEffect, useState } from "react";

export default function Quiz({
    data,
    setStop,
    questionNum,
    setQuestionNum,
    setPyramidActive,
}) {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState(null);
    const [clock, setClock] = useState(180);

    useEffect(() => {
        setQuestion(data[questionNum - 1]);
    }, [data, questionNum]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(1000, () => {
            setClassName(
                a.correct === true ? "answer correct" : "answer wrong"
            );
        });
        delay(4000, () => {
            if (a.correct) {
                setQuestionNum((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                setStop(true);
                setPyramidActive(false);
            }
        });
    };

    function clockStart(clock) {
        setTimeout(() => {
            setClock(clock - 1);
        }, 1000);
    }

    useEffect(() => {
        clockStart(clock);
    }, [clock]);

    if (clock === 0) {
        setStop(true);
        setPyramidActive(false);
    }

    return (
        <>
            <div className="top">
                <div className="timer">{clock}</div>
            </div>
            <div className="bottom">
                <div className="quiz">
                    <ol>
                        <li>Wait a while after clicking an answer</li>
                        <li>You have a limited time to complete</li>
                    </ol>
                    <div className="question">{question?.question}</div>
                    <div className="answers">
                        {question?.answers.map((answer, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        selectedAnswer === answer
                                            ? className
                                            : "answer"
                                    }
                                    onClick={() => handleClick(answer)}
                                >
                                    {answer.text}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
