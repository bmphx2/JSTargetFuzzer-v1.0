function f3(a4, a5) {
    const o6 = {
        "d": 65535,
        [-4294967297]: a4,
        "h": -2147483647,
        "f": -4294967297,
        [a4]: -4294967297,
        [65535]: -4294967297,
        "a": 65535,
        "b": a5,
        ...-4294967297,
        "e": -2147483647,
    };
    return o6;
}
const v7 = f3(-4294967297, 65535);
const v8 = f3(65535, 65535);
let v9 = f3(-4294967297, -2147483647);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a16;
    this.g = -4294967297;
    this.f = 1000;
}
new F13(v7, v8);
new F13(v9, v7);
new F13(v7, v8);
v9 = v7;
