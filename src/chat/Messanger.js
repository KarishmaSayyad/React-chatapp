import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/ChatSlice';
import file from '../database/db';

import Leftside from './Leftside';
import Rightside from './Rightside';

const Messenger = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(add(file));
  },[]);
  
  //Fetching state from redux
  const data = useSelector((state) => state.chat[0]);

  return (
    <>
      <div className="container-fluid">

        <div className="main">
          <div className="head ">
            <div className="row">
              {/* ************************   Left Hand  Side   *********************** */}
              <Leftside data2={data} />
              {/*  ************************  Right Hand side *******************  */}
              <Rightside />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Messenger