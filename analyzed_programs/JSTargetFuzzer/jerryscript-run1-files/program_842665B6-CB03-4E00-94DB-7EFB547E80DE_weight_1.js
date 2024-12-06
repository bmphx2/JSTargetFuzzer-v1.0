const v2 = new TypeError(128);
const v5 = new Uint8Array(2);
let v6 = 18209n;
-4294967295n | (v6 /= -2147483649n);
const v12 = new Int16Array(4);
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    Symbol.for();
}
new F13();
function f21() {
    return "-2";
}
function f22(a23, a24, a25, a26) {
    const o36 = {
        31: v12,
        set c(a28) {
        },
        "d": a26,
        "h": "o",
        "g": a24,
        ...v12,
        __proto__: a25,
        93: a26,
        0: a24,
        /*
        __proto__: v5,
        */
        set h(a33) {
            Object.defineProperty(a33, a33 == v5 ? a33 : v5, { writable: true, enumerable: true, value: this });
        },
    };
    return o36;
}
f22("o", 128, "h", v2);
f22("-2", 4, "o", f22("h", 2, "-2", TypeError));
const v43 = 12n && (-5534n >= -5534n);
try { v43.n(); } catch (e) {}
1 == 1;
