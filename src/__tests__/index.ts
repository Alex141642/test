import axios from 'axios'
import { hello, request, my_func } from '..'

describe("Test hello function", () => {
    it("Should say hello world", () => {
        expect(hello()).toBe("Hello world! ")
    })
    it("Shoud say hello billy", () => {
        expect(hello("Billy")).toBe("Hello Billy! ")
    })
})

describe("Test my_func function", () => {
    it("Should be true", () => {
        expect(my_func()).toBe(true)
    })
    it("Should be false", () => {
        expect(my_func("toto")).toBe(false)
    })
})

const axios_mocked = jest.spyOn(axios, 'get')

describe("Test request function", () => {
    it("Should be good", async () => {
        axios_mocked.mockResolvedValue({ data: "I'm ok!" })
        const result = await request()
        expect(result).toBe("I'm ok!")
        expect(axios_mocked).toHaveBeenCalled()
    })
    it("Should not be good", async () => {
        axios_mocked.mockRejectedValue({ data: "I'm not ok..." })
        const result = await request()
        expect(result).toBe("I'm not ok...")
        expect(axios_mocked).toHaveBeenCalled()
    })
})