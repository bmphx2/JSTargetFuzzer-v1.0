new BigInt64Array(129);
new Float32Array(8);
new Int32Array(0);
function F15() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v18 = new F15();
const v19 = new F15();
const v20 = new F15();
let v22 = -937546.0274885385;
("p").split(5);
const v26 = [2147483648,-9,65535,-216988321,-65536,47176,-1940727804,-65537];
function f27(a28, a29) {
    v26.concat(a29);
    return a28;
}
const v35 = [-1e-15,1000000.0,v22,v20];
const v36 = [1000000.0,-1e-15,v19,v35,-1e-15];
const v37 = [v20,v22,v20];
function f38(a39, a40) {
    const o54 = {
        "b": -1e-15,
        ...a40,
        [v37]: v19,
        __proto__: v19,
        "d": v20,
        "f": a40,
        [a39]: v35,
        set a(a42) {
            this.__proto__ = v36;
            v37[-1e-15] = a39;
            const v44 = Symbol.iterator;
            const o53 = {
                [v44]() {
                    let v46 = 10;
                    const o52 = {
                        next() {
                            v46--;
                            v46 == 0;
                            const o51 = {
                                "done": a39,
                                "value": "p",
                            };
                            return o51;
                        },
                    };
                    return o52;
                },
            };
        },
    };
    return o54;
}
let v55 = f27(v37, v18);
f38(v37, v19);
const v57 = f38(v36, v36);
with (v20) {
    let v58 = a;
    const v59 = v58 || v58;
    const v60 = `rizPp${v55}number${v57}sticky${426.7417148362349}-29565${v59}atan2`;
    ({"length":v58,} = v58);
    v22 |= 426.7417148362349;
    let v63 = -9;
    Math.round(v63);
    const v66 = v55++;
    v63++;
    Math.fround(v66);
    Math.sign(v59);
    v63 || v60;
}
