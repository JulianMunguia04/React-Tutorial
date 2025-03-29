import List from './List.jsx'

function App() {

  const fruits = [{name:"apple", calories: 95}, 
                  {name:"orange",calories: 45}, 
                  {name:"banana",calories: 105}, 
                  {name:"pineapple",calories: 37}];

  const vegetables = [{name:"potatoes", calories: 92}, 
                  {name:"celery",calories: 42}, 
                  {name:"carrots",calories: 23}, 
                  {name:"corn",calories: 25}];

  return (
    <>
      <List items = {fruits} category="Fruits"/>
      <List items = {vegetables} category="Vegetables"/>
    </>
  );
}

export default App
