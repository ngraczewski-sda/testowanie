function App() {
  return (
    <>
      <div> Hello world</div>

      <input placeholder="some placeholder" />

      <label htmlFor="test">Some label</label>
      <input id="test" />

      <input value={"some display value"} />

      <button>Some button</button>

      <p data-testid="some-test-id">Some paragraph</p>
    </>
  );
}

export default App;
