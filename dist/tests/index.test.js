import { describe, expect, it } from "@jest/globals";
import { sum } from "../index.js";
describe("Testing sum module", () => {
    it("adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
});
//# sourceMappingURL=index.test.js.map