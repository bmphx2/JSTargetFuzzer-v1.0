const v1 = new Map();
function f2(a3, a4) {
    const o5 = {
        "e": a3,
        __proto__: a4,
        "b": Map,
        "d": v1,
        "f": v1,
        "c": Map,
        [a3]: a3,
        "g": a3,
        ...v1,
        "a": a3,
        "h": a4,
        ...a4,
        ...v1,
    };
    return o5;
}
const v6 = f2(v1, v1);
const v7 = f2(v6, v6);
v6.length = 1;
const v10 = Symbol.iterator;
const o28 = {
    [v10]() {
        let v12 = 10;
        const o27 = {
            [this](a14, a15, a16, a17) {
                v10[541];
                return a17;
            },
            next() {
                v12--;
                const v25 = v12 == 0;
                const o26 = {
                    "done": v25,
                    "value": v12,
                };
                return o26;
            },
            "h": Map,
            "c": this,
            "g": this,
            "b": Map,
            __proto__: v6,
        };
        return o27;
    },
};
const v29 = f2(f2, v7);
let v33 = 1049143180;
function F36(a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a38;
}
new F36("4", v33, v29);
const v42 = new F36(f2, 536870887, v6);
const v43 = new F36(v42, -16, v29);
function F44() {
    if (!new.target) { throw 'must be called with new'; }
}
const v46 = new F44();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v46, 220, { writable: true, enumerable: true, value: -256 });
}
new Uint16Array(255);
new Int32Array(75);
new BigUint64Array(3145);
const v57 = [977677784,-4230];
for (let i59 = 0; i59 < 9; i59++) {
    v33 |= 536870887;
}
function f65(a66, a67, a68) {
    return a68;
}
v57.reduceRight(f65);
const o70 = {
};
new Proxy(F36, o70);
Uint16Array[7] = v1;
function f73(a74, a75) {
    for (let v76 = 0; v76 < 32; v76++) {
        a75["p" + v76] = v76;
    }
    return v57;
}
f73(v46, v43);
