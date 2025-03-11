"use client"
import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from '@/shared/data/forms/select2data';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import Select, { Props as SelectProps } from 'react-select';
interface Option {
    value: string;
    label: string;
}
interface Optionmax {
    value: string;
    label: string;
}
const Select2 = () => {

    const [selectedOptions, setSelectedOptions] = useState<Optionmax[] | null>(null);

    const handleSelectChange = (selected: Optionmax[] | null) => {
        // Define your maximum selection limit (e.g., 2 in this example)
        const maxSelections = 3;

        if (selected && selected.length <= maxSelections) {
            setSelectedOptions(selected);
        }
    };

    const [singleSelectValue, setSingleSelectValue] = useState<Option | null>(null);
    const [multiSelectValue, setMultiSelectValue] = useState<Option[] | null>([]);
    const [isSelectDisabled, setSelectDisabled] = useState(false);

    const options: Option[] = [
        { value: 's-1', label: 'Selection-1' },
        { value: 's-2', label: 'Selection-2' },
        { value: 's-3', label: 'Selection-3' },
        { value: 's-4', label: 'Selection-4' },
        { value: 's-5', label: 'Selection-5' },
    ];

    const handleSingleSelectChange = (selectedOption: Option | null) => {
        setSingleSelectValue(selectedOption);
    };

    const handleMultiSelectChange = (selectedOptions: Option[] | null) => {
        setMultiSelectValue(selectedOptions);
    };

    const disableSelect = () => {
        setSelectDisabled(true);
    };

    const enableSelect = () => {
        setSelectDisabled(false);
    };


    return (
        <Fragment>
            <Seo title={"Select2"} />
            <Pageheader currentpage="Select2" activepage="Forms" mainpage="Select2" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Select2
                            </div>
                        </div>
                        <div className="box-body">
                            <Select name="state" options={Selectoption1} className="js-example-basic-single w-full" isSearchable
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption1[0]]}
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title !text-start">
                                Multiple Select
                            </div>
                        </div>
                        <div className="box-body">
                            <Select isMulti name="states[]" options={Selectoption2} className="js-example-basic-multiple w-full" isSearchable
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption2[0]]}
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Single Select With Placeholder
                            </div>
                        </div>
                        <div className="box-body">
                            <Select name="state" options={Selectoption3} className="js-example-placeholder-single js-states" isClearable
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption3[0]]}
                            />

                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Multiple Select With Placeholder
                            </div>
                        </div>
                        <div className="box-body">
                            <Select isMulti name="state" options={Selectoption4} className="js-example-placeholder-multiple w-full js-states"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption4[0]]}
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Templating
                            </div>
                        </div>
                        <div className="box-body">
                            <Select
                                name="state"
                                options={Selectoption5}
                                className="js-example-templating js-persons"
                                menuPlacement="auto"
                                classNamePrefix="Select2"
                                defaultValue={[Selectoption5[0]]}
                            />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Templating Selection
                            </div>
                        </div>
                        <div className="box-body">
                            <Select
                                name="state"
                                options={Selectoption5}
                                className="select2-client-search"
                                menuPlacement="auto"
                                classNamePrefix="Select2"
                                defaultValue={[Selectoption5[0]]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Max Selections Limiting
                            </div>
                        </div>
                        <div className="box-body">
                        <Select
                                isMulti
                                name="states[]"
                                options={Selectmaxoption}
                                className="basic-multi-select"
                                isSearchable
                                menuPlacement="auto"
                                classNamePrefix="Select2"
                                value={selectedOptions}
                                onChange={handleSelectChange as SelectProps<Optionmax>['onChange']} // Type assertion here
                            />

                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Disabling a Select2 control
                            </div>
                        </div>
                        <div className="box-body flex flex-col gap-3">

                            <Select
                                className="js-example-disabled mb-3"
                                options={options}
                                classNamePrefix="Select2"
                                value={singleSelectValue}
                                onChange={handleSingleSelectChange}
                                isDisabled={isSelectDisabled}
                            />
                             <Select
                                className="js-example-disabled-multi"
                                options={options}
                                value={multiSelectValue}
                                classNamePrefix="Select2"
                                onChange={handleMultiSelectChange as SelectProps<Option>['onChange']}
                                isMulti
                                isDisabled={isSelectDisabled}
                                isClearable={!isSelectDisabled}
                            />
                            <div>
                                <button type="button" className="ti-btn ti-btn-primary js-programmatic-enable me-2" onClick={enableSelect}>Enable</button>
                                <button type="button" className="ti-btn ti-btn-primary-full js-programmatic-disable" onClick={disableSelect}>Disable</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Select2