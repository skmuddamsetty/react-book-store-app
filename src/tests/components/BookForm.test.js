import React from 'react';
import { shallow } from 'enzyme';
import { books } from '../fixtures/books';
import toJSON from 'enzyme-to-json';
import BookForm from '../../components/BookForm/BookForm';

test('should render book form properly', () => {
  const wrapper = shallow(<BookForm />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render book form with book data', () => {
  const wrapper = shallow(<BookForm book={books[1]} />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<BookForm />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(toJSON(wrapper)).toMatchSnapshot();
});

test('should set description on input change', () => {
  const value = 'New Description';
  const wrapper = shallow(<BookForm />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value } });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
  const value = 'New Note';
  const wrapper = shallow(<BookForm />);
  wrapper.find('textarea').simulate('change', { target: { value } });
  expect(wrapper.state('note')).toBe(value);
});

test('should set price if valid price', () => {
  const value = '12.22';
  const wrapper = shallow(<BookForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value } });
  expect(wrapper.state('price')).toBe(value);
});

test('should not set price if invalid price', () => {
  const value = '12.222';
  const wrapper = shallow(<BookForm />);
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value } });
  expect(wrapper.state('price')).toBe('');
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<BookForm book={books[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', { preventDefault: () => {} });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: books[0].description,
    price: books[0].price,
    note: books[0].note
  });
});
