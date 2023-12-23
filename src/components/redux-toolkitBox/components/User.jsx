import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncUser } from "../Features/User/userSlice";

export default function UserShow() {
  const { loading, data, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAsyncUser());
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error...</div>;
  }
  return (
    <div className="md:w-1/2 border border-slate-400 p-2 rounded-lg">
      <h1 className="text-red-600 font-bold text-lg">Show Users</h1>
      <p className="text-teal-500">(Async Action)</p>
      <div className="px-3">
        {data?.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </div>
    </div>
  );
}
