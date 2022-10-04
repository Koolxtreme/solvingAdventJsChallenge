import { describe, expect, it } from "vitest";
import getMinJump from "../src/reto12";

describe("getMinJump", ()=>
{
    it("Has to be a function", ()=>
    {
        expect(typeof getMinJump).toBe("function");
    });
    
    it("Should receive an array as parameter", ()=>{
        expect(()=>getMinJump(1)).toThrow("Parameter must be an array");
    });

    it("Should return a number", ()=>{
        expect(getMinJump([3])).toBeTypeOf("number");
    });

    it("Should avoid the numbers in the array", ()=>{
        expect(getMinJump([5,3,6,7,9])).toBe(4)
    });
})