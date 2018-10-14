const add = (a,b) => a+b;

test("Add of two numbers", () => {
    const val = add(3,4);
    expect(val).toBe(7);
})