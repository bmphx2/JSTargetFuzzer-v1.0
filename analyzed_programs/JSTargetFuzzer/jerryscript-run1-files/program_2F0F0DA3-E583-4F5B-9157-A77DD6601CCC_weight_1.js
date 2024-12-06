const v5 = new Uint8ClampedArray(128);
function f8(a9) {
    return "number";
}
class C10 extends f8 {
    ["number"] = v5;
}
const v11 = new Uint8Array(6);
function f12(a13, a14) {
    const o15 = {
        "h": v5,
        __proto__: a13,
        ...C10,
    };
    return o15;
}
f12("1", "number");
f12("number", "1");
f12("object", "object");
new Uint8ClampedArray(7);
v11.isConcatSpreadable;
Int8Array == Int8Array;
