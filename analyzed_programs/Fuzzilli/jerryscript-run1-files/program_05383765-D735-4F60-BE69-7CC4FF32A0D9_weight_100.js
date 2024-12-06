const v2 = new Int16Array(257);
new Float64Array(1024);
const v8 = new BigUint64Array(247);
const v12 = [7,-65536,8,4294967296,9,536870887,10,2147483647,61971];
const v13 = [-5,-42608,1,-61785];
const v14 = [1694320064,1195474237,-22462];
const v15 = [v12,v14];
const v16 = [v15];
const v17 = [v15];
function f18(a19, a20, a21, a22) {
    const o40 = {
        __proto__: v13,
        "d": v16,
        toString(a24, a25, a26) {
            v17["some"](a24, v14);
            const v30 = Symbol.iterator;
            const o39 = {
                [v30]() {
                    let v32 = 10;
                    const o38 = {
                        next() {
                            v32--;
                            const v36 = v32 == 0;
                            const o37 = {
                                "done": v36,
                                "value": v32,
                            };
                            return o37;
                        },
                    };
                    return o38;
                },
            };
            return a24;
        },
        ...v13,
        "c": v2,
        [247]: a19,
        "f": v16,
        "g": v8,
    };
    return o40;
}
const v41 = f18(v13, v15, v16, v13);
const v42 = f18(v17, v15, v13, v16);
f18(v16, v17, v15, v12);
function F44(a46, a47) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a46;
}
const v48 = new F44(v17, v41);
const v49 = new F44(v16, v42);
new F44(v15, v42);
for (let v51 = 0; v51 < 81; v51++) {
    break;
    Object.defineProperty(v49, v42, { configurable: true, value: v48 });
    v17.length;
    break;
}
v13 instanceof f18;
