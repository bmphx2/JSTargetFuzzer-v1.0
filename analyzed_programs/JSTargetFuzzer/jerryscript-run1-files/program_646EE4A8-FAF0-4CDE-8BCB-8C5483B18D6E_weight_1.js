function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a10;
    this.h = a8;
    this.c = a8;
}
new F6(536870889, 536870889, "isConcatSpreadable", "30746");
new F6(536870889, -1105370274, "isConcatSpreadable", "bigint");
const v14 = new F6(-9007199254740990, -9007199254740990, "bigint", "bigint");
const v18 = [9007199254740992,2986,-2132228841,-2];
function f19(a20, a21, a22) {
    const o23 = {
        ...v14,
        "c": 257n,
    };
    v18.g = o23;
    arguments[arguments];
    v14[Symbol.match] = v14;
    a20 = Symbol;
    return arguments;
}
const v28 = f19(f19, "isConcatSpreadable", f19, f19);
let v29 = "-9223372036854775808";
let v30 = -4294967297;
let v31 = -4294967295;
[v29,,v30,v31] = v28;
async function f32(a33, a34) {
    const v36 = new Proxy();
    let v37 = e;
    try { v36.reduceRight("bigint", v14, f19); } catch (e) {}
    v29 <<= (v37 = "30746");
    Object.defineProperty("isConcatSpreadable", "e", { configurable: true, enumerable: true, get: f19, set: f32 });
    return f19;
}
f32(v29, v28);
