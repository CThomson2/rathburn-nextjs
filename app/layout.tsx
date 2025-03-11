
"use client"
import "./globals.scss";
import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import PrelineScript from "./PrelineScript";
import {   useState } from "react";
import { Initialload } from "@/shared/contextapi";


const RootLayout = ({children}:any) =>{
  const [pageloading , setpageloading] = useState(false)
    return(
      <>
      <Provider store={store}>
        <Initialload.Provider value={{ pageloading , setpageloading }}>
          {children}
        </Initialload.Provider>
      </Provider>
      <PrelineScript/>
      </>
    )
  }
  export default RootLayout
