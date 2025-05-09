const Counter = ({ plus, minus, count }) => {
  return <div>
    <span onClick={plus}>-</span>{count}<span onClick={minus}>+</span>
  </div>;
};
