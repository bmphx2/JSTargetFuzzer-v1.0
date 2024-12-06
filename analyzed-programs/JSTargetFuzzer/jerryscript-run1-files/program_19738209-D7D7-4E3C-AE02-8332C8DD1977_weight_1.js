new Map();
function f5() {
    return Map;
}
[3,65536,847807807,-16,-11,-34034,65536,10917,-16];
[2147483648,0,-1073741824,65537,1705592133,1,9161];
[-4096,10000,37833,7,536870887,-49822];
function F12() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v15 = new F12();
const v16 = new F12();
const v17 = new F12();
let v19 = -937546.0274885385;
const v24 = [-1e-15,1000000.0,v19,v17];
const v25 = [1000000.0,-1e-15,v16,v24,-1e-15];
const v26 = [v17,v19,v17];
function f27(a28, a29) {
    const o43 = {
        "b": -1e-15,
        ...a29,
        [v26]: v16,
        __proto__: v16,
        "d": v17,
        "f": a29,
        [a28]: v24,
        set callee(a31) {
            this.__proto__ = v25;
            v26[-9.899771639207565] = a28;
            const v33 = Symbol.iterator;
            const o42 = {
                [v33]() {
                    let v35 = 10;
                    const o41 = {
                        next() {
                            v35--;
                            const v39 = v35 == 0;
                            const o40 = {
                                "done": v39,
                                "message": v35,
                            };
                            return o40;
                        },
                    };
                    return o41;
                },
            };
        },
    };
    return o43;
}
f27(v26, v15);
f27(v26, v16);
const v46 = f27(v25, v26, -9.899771639207565);
with (v17) {
    let v47 = a;
    let v49 = `rizPp${-9.899771639207565}number${v46}sticky${426.7417148362349}-29565${v47 || v47}atan2`;
    ({"length":v47,} = v49);
    v19 |= 426.7417148362349;
    let v52 = -9;
    Math.round(v52);
    const v55 = v49++;
    v52++;
    Math.fround(v55);
    Math.sign(v52);
    v52 || v49;
}
