```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic here
    if (count > 5) {
      //Only update the state if it has changed from previous value      
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => {
      if (prevCount >= 5) {
        return 0;
      } else {
        return prevCount + 1;
      }
    });
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
```