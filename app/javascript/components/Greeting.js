import React, { useEffect } from "react"
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from "../redux/greeting"

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting);
  }, [])

  return (
  <React.Fragment>
            <h1>{greeting}</h1>
  </React.Fragment>         
  )
}

export default Greeting