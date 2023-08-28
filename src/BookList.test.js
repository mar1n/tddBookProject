import React from "react";
import {render, screen} from '@testing-library/react'

import BookList from "./BookList";

describe('BookList', () => { 
    it('loading', () => {
        const props = {
            loading: true
        }

        render(<BookList {...props} />)
        screen.getByText(/LOADING.../i);
    });
 })