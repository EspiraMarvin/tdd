// intergration test , tests the parent component containing more than 1 child component, test their interactivity

import { toHaveClass } from "@testing-library/jest-dom/dist/matchers";
import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
    return (
        <BrowserRouter>
        <Todo />
        </BrowserRouter>
    )
}

describe('AddInput', () => { 
    it('should render input element', async() => {
        render(<MockTodo />)
        const inputEl = screen.getByPlaceholderText(/Add a new task here../i)
        const buttonEl = screen.getByRole("button", { name: /Add/i})
        fireEvent.change(inputEl, {target: { value: "Go to the gym"}})
        fireEvent.click(buttonEl)
        const divElement = screen.getByText(/Go to the gym/i)
        expect(divElement.textContent).toBe("Go to the gym") // correct
        expect(divElement).toBeInTheDocument()   // correct
    })


    const addTask = (tasks) => {
        const inputEl = screen.getByPlaceholderText(/Add a new task here../i)
        const buttonEl = screen.getByRole("button", { name: /Add/i})
        tasks.forEach(task => {
            fireEvent.change(inputEl, {target: { value: "Go to the gym"}})
            fireEvent.click(buttonEl)
        })
    }

    it('should render 3 todos elements', async() => {
        render(<MockTodo />)
        addTask(["Go to the gym", "Pet my cat", "wash my hands"])
        const divElements = screen.getAllByTestId("task-container")
        expect(divElements.length).toBe(3)
    })

    it('tasks should not have completed class when initially rendered', async() => {
        render(<MockTodo />)
        addTask(["Go to the gym"])
        const divElement = screen.getByText(/Go to the gym/i)
        // expect(divElement).toHaveClass("todo-item")
        expect(divElement).not.toHaveClass("todo-item-active")

    })

    it('tasks should have "completed class" class when initially rendered', async() => {
        render(<MockTodo />)
        addTask(["Go to the gym"])
        const divElement = screen.getByText(/Go to the gym/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active")
    })
})