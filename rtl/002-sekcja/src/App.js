import { Section } from "./components/section/Section";

function App() {
  return (
    <Section initialOpen={false}>
      <div>
        <div>Hello</div>
        <div>World!</div>
      </div>
    </Section>
  );
}

export default App;
