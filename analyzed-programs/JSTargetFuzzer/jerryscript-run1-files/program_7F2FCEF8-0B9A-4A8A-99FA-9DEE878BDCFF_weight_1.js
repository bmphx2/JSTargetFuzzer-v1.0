new Float32Array(3);
let v8 = -2n;
v8++;
function* f10(a11, a12, a13, a14) {
    return f10;
}
const v17 = f10()["return"]();
const v18 = new Float64Array(16);
function f21() {
    return 4.0;
}
const v22 = f21();
const o28 = {
    "apply": f21,
    toString(a24) {
        let v25;
        try { v25 = a24(); } catch (e) {}
        const v26 = ~v25;
        function f27() {
            return v26;
        }
        return v17;
    },
    "call": f21,
    "construct": f21,
    "defineProperty": f21,
    "deleteProperty": f21,
    "get": f21,
    "getOwnPropertyDescriptor": f21,
    "getPrototypeOf": f21,
    "has": f21,
    "isExtensible": f21,
    "ownKeys": f21,
    "preventExtensions": f21,
    "setPrototypeOf": f21,
};
new Proxy(v18, o28);
new Uint8Array(129);
5 - 4294967297;
let v35 = 9007199254740991n;
v35--;
function f37() {
    return f37;
}
const o53 = {
    [-2.555238492285163](a39, a40, a41, a42) {
        return "string";
    },
    toString(a47, a48, a49, a50) {
        return SyntaxError();
    },
    ...f37,
    "a": v22,
    "b": 3,
    [Float32Array]: Float64Array,
    "e": Float64Array,
    "d": v18,
    ...f37,
};
v18[-1];
[6,5,321063234,536870887,129,976843939,16340,-9223372036854775808,-43464];
[4,9223372036854775807,32673];
[9007199254740991,9007199254740990];
