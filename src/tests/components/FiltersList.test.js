import React from 'react';
import { shallow } from 'enzyme';
import { FiltersList } from '../../components/FiltersList';
import { filters, altFilters } from '../filtersData';
import moment from 'moment';

let setTextFilter, sortBy, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortBy = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
      <FiltersList
        filters={filters}
        changeText={setTextFilter}
        changeSortBy={sortBy}
        changeStartDate={setStartDate}
        changeEndDate={setEndDate}
      />
    );
  });

test("Test snapshot of Filters List", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Change filters and render correctly", () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
})

test("Test text filter change", () => {
    const value = 'New Text Update';
    wrapper.find('input').simulate('change', {
        target: {value}
    })
    expect(wrapper).toMatchSnapshot();
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("Change Sort By to Date", () => {
    const value = 'date';
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(wrapper).toMatchSnapshot();
    expect(sortBy).toHaveBeenLastCalledWith(value);
});

test("Change Sort By to Amount", () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(wrapper).toMatchSnapshot();
    expect(sortBy).toHaveBeenLastCalledWith(value);
});

test("Change Start and End Date", () => {
    const startDate = moment();
    const endDate = moment().add(3, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
    expect(wrapper).toMatchSnapshot();
});