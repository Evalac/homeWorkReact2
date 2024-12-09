function Statistic({ state, totalFeedback, percentagePositives }) {
  return (
    <ul>
      {Object.entries(state).map(([key, value], index) => {
        const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);

        return (
          <li key={index}>
            {capitalizedKey}: {value}
          </li>
        );
      })}
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive feedback: {percentagePositives}</p>
      </li>
    </ul>
  );
}

export { Statistic };
