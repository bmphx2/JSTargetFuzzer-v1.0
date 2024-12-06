function f3() {
    return 268435439;
}
const o15 = {
    valueOf() {
        Object.defineProperty("symbol", "f", { configurable: true, enumerable: true, set: f3 });
        try { ("yuD9U").charAt(9007199254740990); } catch (e) {}
        return 6;
    },
};
