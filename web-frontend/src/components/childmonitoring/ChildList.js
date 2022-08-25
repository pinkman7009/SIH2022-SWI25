import React, { useEffect } from "react";
import ChildItem from "./ChildItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchChildren } from "../../store/actions/childAction";

const ChildList = () => {
  const dispatch = useDispatch();
  const children = useSelector((state) => state.children);

  // console.log({ children });

  useEffect(() => {
    dispatch(fetchChildren());
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      {children.length === 0 ? (
        <h2 className="text-lg font-bold my-3 border-2 rounded text-center p-3">
          There are no pending reports
        </h2>
      ) : (
        children?.map((item) => <ChildItem key={item._id} child={item} />)
      )}
    </div>
  );
};

export default ChildList;
