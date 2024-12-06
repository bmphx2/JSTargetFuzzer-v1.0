class C9 {
    g;
    set b(a11) {
        +11;
        1e-15 % a11;
        1e-15 && a11;
        Math.trunc(a11);
        new Map();
        const v26 = new Uint16Array(1475);
        const v28 = new Uint16Array(1845);
        v28 >= v26;
    }
}
new C9();
new C9();
new C9();
const v33 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v34 = [-5,-42608,1,-61785];
const v35 = [1694320064,1195474237,-22462];
const v36 = [v33,v35];
const v37 = [v36];
const v38 = [v36];
function f39(a40, a41, a42, a43) {
    const o61 = {
        __proto__: v34,
        "d": v37,
        toString(a45, a46, a47) {
            v38["some"](a45, v35);
            const v51 = Symbol.iterator;
            const o60 = {
                [v51]() {
                    let v53 = 10;
                    const o59 = {
                        next() {
                            v53--;
                            const v57 = v53 == 0;
                            const o58 = {
                                "done": v57,
                                "value": v53,
                            };
                            return o58;
                        },
                    };
                    return o59;
                },
            };
            return a45;
        },
    };
    return o61;
}
const v62 = f39(v34, v36, v37, v34);
const v63 = f39(v38, v36, v34, v37);
f39(v37, v38, v36, v33);
function F65(a67, a68) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a67;
}
const v69 = new F65(v38, v62);
const v70 = new F65(v37, v63);
new F65(v36, v63);
for (let v72 = 0; v72 < 81; v72++) {
    break;
    Object.defineProperty(v70, v63, { configurable: true, value: v69 });
    v38.length;
    break;
}
v34 instanceof f39;
