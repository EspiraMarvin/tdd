import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn()

describe('AddInput', () => { 
    it('should render input element', async() => {
        render(
                <AddInput
                    todos={[]}
                    // setTodos={() => {}} 
                    // better approach below, mock the setTodos func
                    setTodos={mockedSetTodo}
                />
              )
        const inputEl = screen.getByPlaceholderText(/Add a new task here../i)
        expect(inputEl).toBeInTheDocument()
    })


    it('should be able to type into input', async() => {
        render(
                <AddInput
                    todos={[]}
                    setTodos={mockedSetTodo}
                />
              )
        const inputEl = screen.getByPlaceholderText(/Add a new task here../i)
        fireEvent.change(inputEl, { target: {value: "Go grocery shopping"} })
        expect(inputEl.value).toBe("Go grocery shopping")
    })


    it('should have empty input when add button is clicked', async() => {
        render(
                <AddInput
                    todos={[]}
                    setTodos={mockedSetTodo}
                />
              )
        const inputEl = screen.getByPlaceholderText(/Add a new task here../i)
        const buttonEl = screen.getByRole("button", { name: /Add/i })
         fireEvent.change(inputEl, { target: {value: "Go grocery shopping"} })
        fireEvent.click(buttonEl)
        expect(inputEl.value).toBe("")
    })
 })