import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <p>
      {props.stat} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  return (
    <>
      <h1>Statistics</h1>
      {props.good + props.bad + props.neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <StatisticLine stat="good" value={props.good} />
          <StatisticLine stat="neutral" value={props.neutral} />
          <StatisticLine stat="bad" value={props.bad} />
          <StatisticLine
            stat="all"
            value={props.good + props.bad + props.neutral}
          />
          <StatisticLine
            stat="average"
            value={
              (props.good - props.bad) /
              (props.good + props.bad + props.neutral)
            }
          />
          <StatisticLine
            stat="positive feedback"
            value={
              ((props.good + props.neutral) /
                (props.good + props.bad + props.neutral)) *
              100
            }
          />
        </>
      )}
    </>
  );
};

const Button = (props) => {
  return <button onClick={props.clickHandle}>{props.text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button clickHandle={() => setGood(good + 1)} text="good" />
      <Button clickHandle={() => setNeutral(neutral + 1)} text="neutral" />
      <Button clickHandle={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
