const v1 = new WeakMap();
function f2(a3, a4) {
    const o5 = {
        "d": a3,
        5: f2,
        ...a4,
        222: a3,
        "e": a4,
        "c": v1,
        __proto__: v1,
        [WeakMap]: a3,
        [a4]: a4,
        "b": a4,
        "d": v1,
        "h": a3,
        "f": WeakMap,
        "g": f2,
        536870912: f2,
        3: v1,
        ...a4,
        "f": v1,
        "e": v1,
        "a": a4,
        1174368261: WeakMap,
        536870888: v1,
    };
    return o5;
}
const v6 = f2(v1, WeakMap);
const v7 = f2(v1, f2);
const v8 = f2(v7, WeakMap);
function f9() {
    return v7;
}
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    switch (this) {
        case a12:
            break;
    }
    Math.atanh(-4294967296);
    let v20 = ~a14;
    ++v20;
    -a14;
    this.b = a14;
}
const v23 = new F10(v8, v7, v8);
const v24 = new F10(v6, v6, v6);
new F10(v7, v24, v6);
[536870887,268435439,-2,-33540,7,536870912];
let v27 = [-14,5,0,2147483648,129,-1738712698];
[-268435456,10000,536870889,-4294967297,40847,536870912,-630983266];
v8[v6] = v23;
Math[f2] >>>= v1;
v27 | f9;
v27 **= v27;
v7 == WeakMap;
Math.round(-1.2063160811879037);
