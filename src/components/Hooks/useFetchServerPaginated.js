import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://react-mini-projects-api.classbon.com/Programmer/sieve";
const useFetchServerPaginated = (sieveModel) => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);
    const response = await axios.post(url, sieveModel);
    setData(response.data);
    setloading(false);
  };
  useEffect(() => {
    fetchData();
  }, [sieveModel.page]);
  return [data, loading];
};

export default useFetchServerPaginated;
