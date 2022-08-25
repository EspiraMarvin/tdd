import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

// let  { r } = render
// let getByTestId;


// beforeEach(() => {
//     getByTestId = component.getByTestId
// })

afterEach(() => {
    cleanup() // this is specified by default, so we don't have to create it
})


test("header renders with correct text", () => {
    render(<Counter />)
    const headerEl = screen.getByText(/counter/i)
    expect(headerEl).toBeInTheDocument()
})


test("header has with correct text", () => {
    render(<Counter />)
    const headerEl = screen.getByTestId("header")
    expect(headerEl.textContent).toBe("My Counter")
}) 
test("counter initially starts with text of 0", () => {
    render(<Counter />)
    const counterEl = screen.getByTestId("counter")
    
    expect(counterEl.textContent).toBe("0")
})

test("input contains initial value of 1", () => {
    render(<Counter />)
    const inputEl = screen.getByTestId("input")

    expect(inputEl.value).toBe("1")
})

test("add button renders with +", () => {
    render(<Counter />)
    const addBtn = screen.getByTestId("add-btn")

    expect(addBtn.textContent).toBe("+")
})

test("subtract button renders with -", () => {
    render(<Counter />)
    const subBtn = screen.getByTestId("subtract-btn")

    expect(subBtn.textContent).toBe("-")
})

test("change value of input works correctly", () => {
    render(<Counter />)
    const inputEl = screen.getByTestId("input")

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    });

    expect(inputEl.value).toBe("5")
})

test("click on plus btn adds 1 to counter", () => {
    render(<Counter />)
    const AddBtnEl = screen.getByTestId("add-btn")
    const counterEl = screen.getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(AddBtnEl)

    expect(counterEl.textContent).toBe("1")
})

test("click on subtract btn 1 to counter", () => {
    render(<Counter />)
    const subBtnEl = screen.getByTestId("subtract-btn")
    const counterEl = screen.getByTestId("counter")

    expect(counterEl.textContent).toBe("0")

    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe("-1")
})

test("changing input value then clicking on plus btn works correctly", () => {
    render(<Counter />)
    const addBtnEl = screen.getByTestId("add-btn")
    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(addBtnEl)

    expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on subtract btn works correctly", () => {
    render(<Counter />)
    const subBtnEl = screen.getByTestId("subtract-btn")
    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "5"
        }
    })

    fireEvent.click(subBtnEl)

    expect(counterEl.textContent).toBe("-5")
})

test("adding and then subtracting leads to the correct conter number", () => {
    render(<Counter />)
    const addBtnEl = screen.getByTestId("add-btn")
    const subBtnEl = screen.getByTestId("subtract-btn")
    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("input")

    fireEvent.change(inputEl, {
        target: {
            value: "10"
        }
    })

    fireEvent.click(addBtnEl) // 10
    fireEvent.click(addBtnEl) // 20
    fireEvent.click(addBtnEl) // 30
    fireEvent.click(addBtnEl) // 40

    fireEvent.click(subBtnEl) // 30
    fireEvent.click(subBtnEl) // 20

    expect(counterEl.textContent).toBe("20")
})

test("counter contains correct class name", () => {
    render(<Counter />)
    const counterEl = screen.getByTestId("counter")
    const inputEl = screen.getByTestId("input")
    const addBtnEl = screen.getByTestId("add-btn")
    const subBtnEl = screen.getByTestId("subtract-btn")


    expect(counterEl.className).toBe("")

    fireEvent.change(inputEl, {
        target: {
            value: "50"
        }
    })

    fireEvent.click(addBtnEl) 

    expect(counterEl.className).toBe("")

    fireEvent.click(addBtnEl) 

    expect(counterEl.className).toBe("green")

    fireEvent.click(addBtnEl) // 150

    expect(counterEl.className).toBe("green")

    fireEvent.click(subBtnEl) 
    fireEvent.click(subBtnEl) // 50

    expect(counterEl.className).toBe("")

    fireEvent.click(subBtnEl) 
    fireEvent.click(subBtnEl) 
    fireEvent.click(subBtnEl) 
    fireEvent.click(subBtnEl) // -150

    expect(counterEl.className).toBe("red")

})