function conditionFeedback(
  state,
  totalFeedback,
  percentagePositives,
  notificationMessage
) {
  if (totalFeedback > 0) {
    return (
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
          <p>Positive feedback: {percentagePositives}%</p>
        </li>
      </>
    );
  }
  return null; // Якщо умова не виконується, повертаємо null
}

function Statistic({
  state,
  totalFeedback,
  percentagePositives,
  notificationMessage,
}) {
  return (
    <div>
      <ul>
        <li>
          <h1>{totalFeedback > 0 ? 'Statistic' : notificationMessage}</h1>
        </li>
      </ul>
      <ul>
        {conditionFeedback(
          state,
          totalFeedback,
          percentagePositives,
          notificationMessage
        )}
      </ul>
    </div>
  );
}

export { Statistic };
