function Statistic({
  state,
  totalFeedback,
  percentagePositives,
  notificationMessage,
}) {
  return (
    <ul>
      <li>
        <h1>{totalFeedback > 0 ? 'Statistic' : notificationMessage}</h1>
      </li>
      {totalFeedback > 0 ? (
        <>
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
        </>
      ) : null}
    </ul>
  );
}

export { Statistic };
