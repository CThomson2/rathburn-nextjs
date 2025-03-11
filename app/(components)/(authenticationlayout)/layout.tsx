"use client"
import Switcher from "@/shared/layout-components/switcher/switcher"
import { Fragment } from "react"
import { connect } from "react-redux"

const Layout = ({ children }: any) => {

  return (
    <>
       <Fragment>
            {children}
            <Switcher />
        </Fragment>
    </>
  )
}
const mapStateToProps = (state: any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, {})(Layout);