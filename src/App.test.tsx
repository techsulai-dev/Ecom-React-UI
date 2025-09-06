import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import App from "./App"
// import "@testing-library/jest-dom"

describe("App", () => {
  it("renders Tech shulai legend", () => {
    render(<App />)
    expect(screen.getByText(/Tech shulai legend/i)).toBeInTheDocument()
  })
})
