import axios from "axios";
import { useEffect, useState } from "react";
import _ from "lodash";

const url =
  "https://react-mini-projects-api.classbon.com/Programmer/programmers";
const usePaginatedClientFetch = (pageSize) => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(url);
    const result = response.data;
    setData(_.chunk(result, pageSize));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading];
};

export default usePaginatedClientFetch;
