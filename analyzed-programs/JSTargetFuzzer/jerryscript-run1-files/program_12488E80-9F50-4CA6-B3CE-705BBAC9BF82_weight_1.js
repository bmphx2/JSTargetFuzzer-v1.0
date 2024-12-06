function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -81701249;
    this.b = -81701249;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o11 = {
        "b": v4,
        "h": a8,
        get f() {
            const v10 = a7 || this;
            Object.defineProperty(a7, "g", { writable: true, value: v3 });
            [] = a8;
            return v10;
        },
        "g": v3,
        "d": v5,
        [v5]: v5,
    };
    return o11;
}
f6(v4, v3, f6(v5, v5, f6(v5, v4)));
function f15() {
    return v3;
}
Math.abs();
