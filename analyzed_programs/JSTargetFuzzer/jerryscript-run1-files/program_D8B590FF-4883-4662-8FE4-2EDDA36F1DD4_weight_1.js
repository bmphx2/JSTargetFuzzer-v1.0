const v1 = new Set();
const v2 = [v1];
const v3 = [v1,v1,v1];
const v4 = [v3];
function f5() {
    return v4;
}
function f6(a7, a8, a9, a10) {
    const o11 = {
        [v4]: a7,
        1073741823: Set,
        ...a8,
        "a": v1,
        "g": a10,
        ...a10,
        7: v1,
        "f": a9,
        "h": v2,
        "e": a8,
        "b": a8,
        "c": a8,
        __proto__: v1,
        [a10]: a7,
        8: a7,
        "b": v1,
        [Set]: a8,
        "e": a9,
        2147483647: a9,
        [a7]: a7,
        1073741824: v2,
    };
    return o11;
}
const v12 = f6(v4, v2, f6, v4);
for (const v13 in v4) {
    function F14(a16, a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = v13;
        a17.d = a18;
    }
    new F14(v2, v13, v2, v3);
    const v21 = new F14(v2, v3, v4, v3);
    new F14(v4, v21, v3, v4);
}
const v23 = f6(v3, v3, f6, v3, v4);
const v24 = f6(v4, v2, v23, v4, v4, v2);
const v25 = [v24,f6,v1];
const v26 = [v24,v1];
const v27 = [v24,v24,v12,v12];
e = f5;
Set instanceof Set;
v26[536870912] = v12;
function F29(a31, a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a31;
    this.a = f6;
    this.d = f6;
}
new F29(v24, v4, v25, v24);
new F29(v24, v4, v3, v23);
new F29(v24, v4, v27, v12);
const v42 = new Set();
class C43 {
}
const v44 = new C43();
const v45 = new C43();
new Float64Array(v44, v45, -421523.9364708499, 1, ...v42);
