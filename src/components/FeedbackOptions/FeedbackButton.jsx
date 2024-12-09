function FeedbackButton({ state, leaveFeedback }) {
  return (
    <div>
      {Object.keys(state).map((key, index) => {
        return (
          <button key={index} onClick={() => leaveFeedback(key)}>
            {key}
          </button>
        );
      })}
    </div>
  );
}

export { FeedbackButton };
