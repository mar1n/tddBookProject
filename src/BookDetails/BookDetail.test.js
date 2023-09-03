import { render, screen } from "@testing-library/react";
import BookDetail from "./BookDetail";

describe('BookDetail', () => {
    it('renders title', () => {
        const props = {
            book: {
                name: 'Refactoring'
            }
        }
        
        render(<BookDetail {...props} />);

        screen.getByText("Refactoring");
    });
    it('renders description', () => {
        const props = {
            book: {
                name: 'Refactoring',
                description: 'Martin Flowers Refactoring defined core ideas and techniques that hundres of thousands of developers have used to improve their software.'
            }
        }

        render(<BookDetail {...props} />);

        const findThisText = props.book.description;
        screen.getByText(new RegExp(findThisText, "i"));
    });
});