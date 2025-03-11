"use client"
import Backtotop from "@/shared/layout-components/backtotop/backtotop";
import Landingswitcher from "@/shared/layout-components/switcher/landingswitcher";
import { Fragment } from "react";

const Layouts = ({ children }: any) => {
  return (
    <>

     
       
          <Fragment>
              <Landingswitcher />
              {children}
              <Backtotop/>
          </Fragment>
    </>
  )
}

export default Layouts;
