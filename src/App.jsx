
import List from "./List.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 80 },
    { id: 4, name: "coconut", calories: 80 },
    { id: 5, name: "pineapple", calories: 40 },
  ];

  const vegetables = [
    { id: 1, name: "potatoes", calories: 110 },
    { id: 2, name: "celery", calories: 60 },
    { id: 3, name: "carrots", calories: 24 },
    { id: 4, name: "corn", calories: 89 },
    { id: 5, name: "brocoli", calories: 34 },
  ];
  return (
    <>
      {/* {fruits.length > 0 ? <List items={fruits} category="fruits"/> : null}
      {vegetables.length > 0 ? <List items={vegetables} category="vegetables"/> : null} */}
    
      {fruits.length > 0 && <List items={fruits} category="fruits"/> }
      {vegetables.length > 0 && <List items={vegetables} category="vegetables"/>}
    
    </>
  );
}

export default App;
