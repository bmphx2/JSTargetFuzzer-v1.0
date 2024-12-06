function f0() {
}
function F5() {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new F5();
const v8 = [v7,F5];
const v9 = [v8,F5];
const v10 = v9.copyWithin(v7, v8, v9);
v10.length;
new F5();
new WeakMap();
const v21 = new BigUint64Array(3);
v21.sort();
function* f23(a24, a25, a26) {
    a26 = a24;
    ++a24;
    const v29 = a25;
    const v31 = Symbol.iterator;
    const o40 = {
        __proto__: Symbol,
        10000: v10,
        "g": -1742656439,
        "c": -1.6209666704156975e+308,
        "b": v29,
        [v31]() {
            let v33 = 10;
            const o39 = {
                next() {
                    v33--;
                    const v37 = v33 == 0;
                    const o38 = {
                        "done": v37,
                        "value": v33,
                    };
                    return o38;
                },
            };
            return o39;
        },
    };
    return yield -1000.0;
}
function f47() {
    return 16;
}
class C48 {
}
new C48();
const v51 = new Date();
v51.getFullYear();
