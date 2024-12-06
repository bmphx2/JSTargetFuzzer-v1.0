const v0 = [2,536870889,-12];
const v1 = [536870887];
const v2 = [-31076,44958,-9007199254740990,-59438,268435456];
let v3;
try { v3 = new v0(v2, v0, v0, v2); } catch (e) {}
v0.length = 64;
try { new v3(v1); } catch (e) {}
v0.length = 64;
const v6 = [v2,v1];
const v7 = [v6];
const v8 = [v2,v7,v6,v0];
function f9(a10, a11, a12, a13) {
    const o14 = {
        "g": a12,
        "h": v6,
        [v0]: a12,
        15: v7,
        [-1]: a11,
        __proto__: a11,
        "b": v7,
        "g": a13,
        "c": a10,
        ...a11,
        "d": a13,
        "e": a13,
        [a10]: a11,
        [v6]: a11,
        "a": v8,
        ...v2,
        [a12]: f9,
        "f": v7,
        ...a10,
        "h": v6,
    };
    return o14;
}
f9(v6, v8, f9(v8, v8, v2, v1), v6);
f9(v0, v8, v1, v2);
const v20 = new BigUint64Array(3);
3 in v20;
