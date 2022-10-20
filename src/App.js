import Card from "./page/Home"
function App() {
  var filterData = {
    city: null,
    date: null,
    type: null,
    priceRange: null,
  }

  return (
    <div>
      <Card filterData={filterData} />

    </div>
  );
}

export default App;
