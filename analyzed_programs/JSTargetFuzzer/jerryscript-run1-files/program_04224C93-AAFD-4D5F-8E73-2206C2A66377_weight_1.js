function f0() {
    const o4 = {
        "f": "b",
        "c": "b",
        10: 127,
        "a": 127,
        "h": -3.0,
        "g": 127,
        "b": 127,
        __proto__: "b",
        "d": "b",
        [127]: 127,
        ..."b",
        882718168: -3.0,
    };
    return o4;
}
const v5 = f0();
const v6 = f0();
const v7 = f0();
function F8(a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a10;
    this.c = v6;
}
const v11 = new F8(v6);
const v12 = new F8(v11);
const v13 = new F8(v12);
function f14(a15, a16, a17, a18) {
    const o19 = {
        ...a18,
        188: v13,
        ...v13,
        ...v5,
        "g": a18,
        1298: a17,
        "d": F8,
        "f": f0,
        "a": v11,
        [a16]: v6,
        __proto__: v13,
        "b": a17,
    };
    return o19;
}
f14(v6, v7, v7, v12);
f14(v6, v13, v7, v11);
f14(v5, v11, v6, v12);
const v28 = new Uint8Array(512);
new Int16Array(447);
new Uint8Array(2438);
function f38() {
}
v28.description <<= 2006448021;
const v46 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v46.copyWithin(v46, v46));
new Uint8Array(0);
let v57 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v59 = Symbol.iterator;
const o68 = {
    [v59]() {
        let v61 = 10;
        const o67 = {
            next() {
                v61--;
                const v65 = v61 == 0;
                const o66 = {
                    "done": v65,
                    "value": v61,
                };
                return o66;
            },
        };
        return o67;
    },
};
const v70 = new Int32Array(127);
v57 /= v70;
new WeakSet();
("1073741824").match([-3,-8]);
new BigInt64Array(2);
([5]).reverse();
