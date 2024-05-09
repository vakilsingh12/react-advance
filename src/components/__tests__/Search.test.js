import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react"
import Body from '../Body'
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RestorantData } from "../../mocks/data";
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(RestorantData) }
    })
})

test("shimmer search on home page", () => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    const shimmer = body.getByTestId("shimmer")
    // console.log(shimmer.children);
    expect(shimmer.children.length).toBe(15);
})
test("restorant should load on home page", async () => {
    const body = render(<StaticRouter><Provider store={store}><Body /></Provider></StaticRouter>);
    await waitFor(() => expect(body.getByTestId("search-btn")))
    // const resList = body.getByTestId("res-list")
    const searchInput = body.getByTestId("search-input")
    fireEvent.change(searchInput, {
        target: {
            value: "sub"
        }
    })
    const searchBtn = body.getByTestId("search-btn")
    fireEvent.click(searchBtn)
    const resList = body.getByTestId("res-list")
    expect(resList.children.length).toBe(1);
})