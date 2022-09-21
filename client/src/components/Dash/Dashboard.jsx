import { Fragment } from "react/cjs/react.development";
import React, { useEffect } from "react";
import { getUserNoLoading } from "../../redux/actions/auth/authActions";
import { grabPhotos, boughtPhoto } from "../../redux/actions/img&Vid/imgVid";
import { useDispatch} from "react-redux";
import Hero from "./hero";

const Dashboard = () => {
  const dispatch = useDispatch();
 
  // console.log(name)
  useEffect(() => {
    dispatch(getUserNoLoading());
    dispatch(grabPhotos());
    dispatch(boughtPhoto())
  }, [dispatch]);

  return (
    <Fragment>
      <Hero/>
    </Fragment>
  );
};

export default Dashboard;
