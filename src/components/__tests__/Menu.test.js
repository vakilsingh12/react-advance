import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { resMenu } from "../../mocks/menuData";
import ItemList from "../ItemList";
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(resMenu) }
    })
})
test("Add item to cart", async () => {
    const body = render(<StaticRouter><Provider store={store}>
        <ItemList />
    </Provider></StaticRouter>
    )
    await waitFor(() => expect(body.getByTestId("menu")));
    const addBtn = body.getByTestId("add-btn");
    fireEvent.click(addBtn[0])
    const cart = body.getByTestId("cart-item")
    expect(cart.innerHTML).toBe("1")
})