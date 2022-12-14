import React from 'react'
import Dropdown from '../common/dropdown/Dropdown';
import Input from '../common/input/Input';
import Title from '../common/text/Title';

const TableFilter = ({ currentQuaterData, onSelectStatus }) => {
  const dataElemets = ["All", "Approved", "Draft", "Executed", "Planning", "Pending"];
  return (
    <div className="card-header flex flex-wrap gap-y-2 gap-x-4 md:gap-0 items-center p-4 border-b border-slate-300 text-xs">
      <div className="inline-flex md:contents order-1 items-center gap-4">
        <div className="relative border rounded p-1 md:py-2 md:px-4">
          <Title type="icon" classProperties="bi bi-calendar4 pr-2" />
          {currentQuaterData && currentQuaterData.period}
        </div>
        <div className="border w-px mx-4 py-4 hidden md:block order-3"></div>
        <div className="forecast md:ml-0 order-4">
          <span>Forecast: <Title type="span" classProperties="font-medium" value="$8,081.00" /></span>
          <span className="text-red-500 ml-2 font-semibold">
            <Title type="icon" classProperties="bi bi-arrow-down" />
            <span id="growth-perc">3.1</span>%
          </span>
        </div>
      </div>
      <div className="inline-flex items-center md:contents">
        <div className="border w-px mx-4 py-4 hidden md:block order-1"></div>
        <div className="search-box-2 md:ml-0 w-40 md:w-0 relative order-2 ">
          <div className="flex absolute inset-y-0 right-2 md:right-4 items-center pl-3 pointer-events-none text-slate-400">
            <Title type="icon" classProperties="bi bi-search" />
          </div>
          <Input type="search" id="" className="border-2 rounded p-1 md:p-2 border-stone-300 focus:border-stone-400 w-full" placeholder="Search" isRequired={true} />
        </div>
        <div className="filterby mt-1 ml-4 md:ml-auto order-5">
          <label className="text-gray-500">Filter by:</label>
          <Dropdown onSelectValue={onSelectStatus} data={dataElemets} classProperties="font-medium ml-1 pr-1" />
        </div>
      </div>
      <div className="icons items-center gap-3 md:gap-4 ml-auto md:ml-4 text-xs md:text-base hidden md:flex order-6">
        <span className="icon"><Title type="icon" classProperties="bi bi-calendar4" /></span>
        <span className="icon"><Title type="icon" classProperties="bi bi-fullscreen-exit" /></span>
      </div>
    </div>
  )
}

export default TableFilter;