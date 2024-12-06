function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 2147483648n;
    this.g = a5;
    this.b = a5;
}
const v7 = new F3(2147483648n, F3);
const v8 = new F3(256n, 2147483648n);
const v9 = new F3(-2147483647n, -2147483647n);
function f10(a11, a12, a13, a14) {
    const o22 = {
        get e() {
            const v16 = `
                try { v8["register"]("register", a13); } catch (e) {}
                v7 in a12;
            `;
            eval(v16);
            return -2147483647n;
        },
        ...a12,
        "g": v9,
        [a13]: a11,
        "h": a13,
    };
    return o22;
}
f10(256n, f10, F3, v7);
f10(2147483648n, 256n, v7, v7);
f10(-2147483647n, 2147483648n, 2147483648n, v8);
function f29() {
}
new Uint8Array(0);
let v43 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v45 = new Int32Array(127);
v43 /= v45;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
