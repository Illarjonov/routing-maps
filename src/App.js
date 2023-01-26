import { TableContainer } from './components/table/table';
import { MapPage } from './components/map/map';
import { useEffect } from 'react';
import { API } from './api/api';
import { useDispatch } from 'react-redux';
import { actionSetData } from './redux/slice';
import s from './App.module.css';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    API
      .fetchData()
      .then(response => dispatch(actionSetData(response.data)))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={s.App}>
      <div className={s.AppPage}>
        <div className={s.content}>
          <TableContainer />
          <MapPage />
        </div>
      </div>
    </div>
  )
}

export default App;

