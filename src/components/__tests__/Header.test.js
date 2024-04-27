import { render } from "@testing-library/react"
import HeaderComponent from "../Header"
import { Provider } from "react-redux"
import store from '../../utils/store'
import { StaticRouter } from "react-router-dom/server"
test("logo should render while header render", () => {
    const header = render(<StaticRouter><Provider store={store}><HeaderComponent /></Provider></StaticRouter>)
    const logo = header.getAllByTestId("logo")
    expect(logo[0].src).toBe("http://localhost/dummy.png")
})
// test("check online status while render header", () => {
//     const header = render(<StaticRouter><Provider store={store}><HeaderComponent /></Provider></StaticRouter>)
//     const onlineStatus = header.getByTestId("online-status")
//     expect(onlineStatus.innerHTML).toBe("✅")
// })
test("cart should have zero item", () => {
    const header = render(<StaticRouter><Provider store={store}><HeaderComponent /></Provider></StaticRouter>)
    const cartItems = header.getByTestId("cart-item")
    expect(cartItems.innerHTML).toBe("Cart 0 items")
})
