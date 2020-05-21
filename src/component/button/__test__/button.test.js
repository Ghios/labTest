import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders renders normalno", () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
})

it("renders button horosho", () => {
    const {getByTestId} = render(<Button label="nazhmi!!!"> </Button>);
    expect(getByTestId('button')).toBe("nazhmi!!!");
})