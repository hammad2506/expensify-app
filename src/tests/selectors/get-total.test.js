import expenses from "../dummyData";
import getTotal from "../../selectors/get-total";

test("Test total value with empty array", () => {
    const result = getTotal([]);
    expect(result).toBe(0);
})

test("Test total value with one array value", () => {
    const result = getTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
})

test("Test total value with multiple array values", () => {
    const total = expenses[0].amount + expenses[1].amount + expenses[2].amount;
    const result = getTotal(expenses);
    expect(result).toBe(total);
})