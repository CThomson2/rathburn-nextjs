"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import DatePicker from "react-datepicker";
import { setHours, setMinutes } from "date-fns";
import Calendar from "react-calendar";
//css
import "react-calendar/dist/Calendar.css"; //  react Calendar

const Datetimepicker = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [startDate3, setStartDate3] = useState(new Date());
    const [startDate4, setStartDate4] = useState(new Date());
    const [startDate5, setStartDate5] = useState(new Date());
    const [startDate6, setStartDate6] = useState(new Date());

    const [startDate7, setStartDate7] = useState<any>(new Date());
    // Date picker With Time

    const [startTime, setStartTime] = useState(
        setHours(setMinutes(new Date(), 30), 17)
    );

    //range data picker

    const [dateRange, setDateRange] = useState([null, null]);
    const [startsDate5, endDate] = dateRange;

    //React Calender 

    const [value, setValue] = useState<Date | null>(new Date());
    const onChange = (selectedDates: Date[] | Date | null, _dateStr: string, instance: any): void => {
        // Handle the change and update your state accordingly
        if (selectedDates instanceof Date) {
          // Handle the case when a single date is selected
          setValue(selectedDates);
        } else if (Array.isArray(selectedDates) && selectedDates.length > 0) {
          // Handle the case when multiple dates are selected (if your calendar supports it)
          // For simplicity, you can choose to use the first selected date
          setValue(selectedDates[0]);
        } else {
          // Handle the case when no date is selected (selectedDates is null)
          setValue(null);
        }
      
        setShow(false); // Assuming you want to hide the calendar after a date is selected
      };

    const [show, setShow] = useState(false);
    return (
        <Fragment>
            <Seo title={"Date Time Picker"} />
            <Pageheader currentpage="Date Time Picker" activepage="Form Elements" mainpage="Date Time Picker" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Date picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date as Date)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date picker With Time
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startTime} onChange={(date) => setStartTime(date as Date)} showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)} maxTime={setHours(setMinutes(new Date(), 30), 20)} dateFormat="MMMM d, yyyy h:mm aa" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Human Friendly dates
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate1} onChange={(date2) => setStartDate1(date2 as Date)} showTimeSelect timeFormat="p" timeIntervals={15} dateFormat="Pp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date range picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholderText="Choose Date" selectsRange={true} startDate={startsDate5} endDate={endDate} onChange={(update:any) => { setDateRange(update); }} isClearable={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Time picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate3} onChange={(date) => setStartDate3(date as Date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Time Pickr with 24hr Format
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate6} onChange={(date) => setStartDate6(date as Date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Time Picker with Limits
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate4} onChange={(date) => setStartDate4(date as Date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                DateTimePicker with Limited Time Range
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startTime} onChange={(date) => setStartTime(date as Date)} showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)} maxTime={setHours(setMinutes(new Date(), 30), 20)} dateFormat="MMMM d, yyyy h:mm aa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date Picker with week numbers
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group mb-0">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate2} onChange={(date) => setStartDate2(date as Date)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Inline Time Picker
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="form-group mb-0">
                                        <DatePicker className="ti-form-input focus:z-10" selected={startDate5} onChange={(date) => setStartDate5(date as Date)} inline showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Inline Calendar
                            </div>
                        </div>
                        <div className="box-body">
                        <div className="form-group overflow-auto">
                        <DatePicker selected={startDate7} onChange={(date) => setStartDate7(date)} inline/></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Datetimepicker