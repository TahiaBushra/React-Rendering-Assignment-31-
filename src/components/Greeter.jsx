const Greeter = ({ fName, msg, children }) => {
  return (
    <div>
      <h1>
        {msg}, {fName}
      </h1>
      <div>{children}</div>
    </div>
  );
};
export default Greeter;
