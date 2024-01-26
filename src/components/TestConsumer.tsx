'use client'

import React,{ useContext } from "react";
import { TestContext } from "./TestContext.js";

export const TestConsumer = () => {
    const value = useContext(TestContext);
    //console.log('value',value);
    return (<div>{value}</div>);
}