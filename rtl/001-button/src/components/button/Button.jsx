export const Button = (props) => {
  const { onClick, children } = props;

  return <button onClick={onClick}>{children}</button>;
};
