import { render } from "@testing-library/react"
import FooterComponent from "../Footer"
test("footer render", () => {
    const footer = render(<FooterComponent />)
    const footerItem = footer.getByTestId("footer-test")
    expect(footerItem.innerHTML).toBe("All rights and reserved 2024. Design by Vakil Verma")
})