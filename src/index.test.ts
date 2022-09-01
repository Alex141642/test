import { hello } from '.'

describe("Test hello function", () => {
    it("Should say hello world", () => {
        expect(hello()).toBe("Hello world! ")
    })
    it("Shoud say hello billy", () => {
        expect(hello("Billy")).toBe("Hello Billy! ")
    })
})