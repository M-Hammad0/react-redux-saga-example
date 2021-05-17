import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestApiData } from './Redux/actions';

function App() {
  const disptach = useDispatch()
  const data = useSelector(state => state.data.data);

  useEffect(() => {
  disptach(requestApiData())
  },[])

  console.log(data)

  return (
    <div>
    {data && data.results.map(p => <p>{p.gender}</p>)}
    </div>
  );
}

export default App;
