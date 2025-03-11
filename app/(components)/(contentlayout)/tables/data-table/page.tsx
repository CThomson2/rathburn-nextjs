"use client"
import { BasicTable, ResponsiveDataTable, } from '@/shared/data/tables/datatabledata';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react';
const Datatable = () => {


  return (
    <div>
      <Seo title={"Data Tables"} />
      <Pageheader currentpage="Data Tables" activepage="Tables" mainpage="Data Tables" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic DataTable</h5>
            </div>
            <div className="box-body">
              <div className="overflow-auto table-bordered p-3">
                <div id="basic-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                  <BasicTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Responsive DataTable</h5>
            </div>
            <div className="box-body space-y-3">
              <div className="overflow-hidden">
                <div id="reactivity-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                  <ResponsiveDataTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Datatable