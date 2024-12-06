const v1 = [536870912];
const v2 = [55330,9223372036854775807,29585,42050,1175240318,-8,1073741823,5];
const v3 = [-2147483649,13,-941206072];
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
}
new F4(v3);
new F4(v2);
new F4(v2);
function F10(a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a13;
    this.g = null;
}
new F10(v1, v1, v3);
new F10(v3, v2, v3);
new F10(v2, v3, v3);
const v21 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v22 = [-5,-42608,1,-61785];
const v23 = [1694320064,1195474237,-22462];
const v24 = [v21,v23];
const v25 = [v2];
const v26 = [v24];
function f27(a28, a29, a30, a31) {
    const o49 = {
        __proto__: v22,
        "d": v25,
        toString(a33, a34, a35) {
            v26[a34](a33, v23);
            const v39 = Symbol.iterator;
            const o48 = {
                [v39]() {
                    let v41 = 10;
                    const o47 = {
                        next() {
                            v41--;
                            const v45 = v41 == 0;
                            const o46 = {
                                "done": v45,
                                "value": v41,
                            };
                            return o46;
                        },
                    };
                    return o47;
                },
            };
            return a33;
        },
    };
    return o49;
}
const v50 = f27(v22, v24, v25, v21);
const v51 = f27(v26, v24, v22, v25);
f27(v25, v26, v24, v21);
function F53(a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a55;
}
const v57 = new F53(v26, v50);
const v58 = new F53(v25, v51);
new F53(v24, v51);
for (let v60 = 0; v60 < 81; v60++) {
    break;
    Object.defineProperty(v58, v51, { configurable: true, value: v57 });
    v21.length;
    break;
}
v22 instanceof f27;
