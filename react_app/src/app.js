import Table from "./components/table/table";
import { useEffect, useState } from "react";
import { DATA_LINK } from "./settings.js";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [sortInfo, setSortInfo] = useState({
    prevSortingType: null,
    isRightDirection: false,
  });

  useEffect(() => {
    const load = async () => {
      const req = await fetch(DATA_LINK);
      const d = await req.json();
      console.log(d);
      setTasks(d);
    };
    load();
  }, []);

  const onSort = (type) => {
    console.log(type);
    
    const sortC = { ...sortInfo };
    const tasksC = [...tasks];

    sortC.isRightDirection =
      sortC.prevSortingType === type ? !sortC.isRightDirection : true;

    sortC.prevSortingType = type;

    const multi = sortC.isRightDirection ? 1 : -1;

    let callback;
    switch (sortC.prevSortingType) {
      case "when": {
        callback = (a, b) => multi * (new Date(a.when) - new Date(b.when));
        break;
      }
      case "name": {
        callback = (a, b) => multi * (a.name > b.name ? 1 : -1);
        break;
      }
      case "status": {
        callback = (a, b) => multi * (a.status > b.status ? 1 : -1);
        break;
      }
    }
    tasksC.sort(callback);

    setTasks(tasksC);
    setSortInfo(sortC);
  };

  console.count("APP FUNCTION");

  return (
    <div>
      <aside>
        <input
          className="form-control me-2 input-search"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <hr />
        <div className="filter-menu"></div>
        <hr />
        <div className="modal-container"></div>
      </aside>
      <Table data={tasks} onSort={onSort} sortInfo={sortInfo} />
    </div>
  );
}
