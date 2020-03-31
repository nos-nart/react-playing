import React from 'react';
import "./App.css";
import useSWR, { SWRConfig } from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

function App() {
  return <SWRConfig value={{ revalidateOnFocus: false, fetcher }}>
    <Crimes />
  </SWRConfig>
}

export default App;

function Crimes() {
  const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";

  const {data, error} = useSWR(url);

  if (error) return <div>...error</div>;

  if (!data) return <div>...loading</div>

  return <DisplayCrimes
    crimes={data}
    categories={[...new Set(data.map(crime => crime.category))]}
  />
}

function DisplayCrimes({crimes, categories}) {
  const [filterCategory, setFilterCategory] = React.useState(null);
  const filterCrimes = filterCategory ? crimes.filter(crime => crime.category === filterCategory) : crimes;
  return <>
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex ", flexDirection: "column", marginRight: "2rem" }}>
        {
          categories && categories.map(category => (
            <button 
              style={{ outline: "none", cursor: "pointer", padding: "0.5rem 0", border: "none", background: "none" }}
              key={category}
              onClick={() => setFilterCategory(category)}>
              { category }
            </button>
          ))
        }
        {
          filterCategory && <button style={{ outline: "none", cursor: "pointer", padding: "0.5rem 0", border: "none", background: "none" }}
            onClick={() => setFilterCategory(null)}>reset</button>
        }
      </div>
      <pre style={{ borderLeft: "1px solid #1890ff", paddingLeft: "2rem" }}>{JSON.stringify(filterCrimes, null, 2)}</pre>
    </div>
  </>
}
