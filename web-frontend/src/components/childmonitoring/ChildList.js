import React, { useEffect } from "react";
import ChildItem from "./ChildItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchChildren } from "../../store/actions/childAction";

const ChildList = () => {
  const dispatch = useDispatch();
  const children = useSelector((state) => state.children);

  useEffect(() => {
    dispatch(fetchChildren());
  }, []);

  return (
    <div className="w-4/5 mx-auto">
      {children?.map((item) => (
        <ChildItem key={item._id} child={item} />
      ))}
    </div>
  );
};

export default ChildList;
