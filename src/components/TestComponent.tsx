import withLoader from "../utils/withLoader";

const TestComponent = () => {
  return (
    <div style={{ padding: "20px", border: "1px solid black" }}>
      <h2>This is a test component</h2>
      <p>If you see this, the component has loaded!</p>
    </div>
  );
};

export const TestComponentWithLoader = withLoader(TestComponent);
