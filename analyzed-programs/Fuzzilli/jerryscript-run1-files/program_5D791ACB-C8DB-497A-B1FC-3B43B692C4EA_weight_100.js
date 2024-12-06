function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = Symbol.species;
    this[v4] = this;
    for (let v5 = 0; v5 < 32; v5++) {
        v4["p" + v5] = v5;
    }
    this.h = -9007199254740990;
}
new F0();
const v9 = new F0();
const v10 = new F0();
const v13 = -1 >>> v10;
function F14(a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a17;
}
const v19 = new F14(-1, -4294967297, v13);
new F14(-4294967297, v19, -4294967297);
new F14(-4294967297, F0, v13);
[-65537,-4294967296,0,0,-4];
const v24 = [1073741824,-438822695,75723568,-2147483648,-1187201203,2147483648,17724,-9,9007199254740991,-19589];
[-2147483647,26523,4294967295,4294967296,-44135,268435441,0];
const v28 = Symbol.iterator;
const o37 = {
    [v28]() {
        let v30 = 10;
        const o36 = {
            next() {
                v30--;
                const v34 = v30 == 0;
                const o35 = {
                    "done": v34,
                    "value": v30,
                };
                return o35;
            },
        };
        return o36;
    },
};
const v54 = new Int32Array(7);
new Float64Array(220);
const v60 = new Int8Array(3428);
function f61(a62, a63) {
    try { a63(a63, a62); } catch (e) {}
    v60[2117] = v54;
    a62[9] = a63;
}
new Promise(f61);
try { v60.find(f61, v9); } catch (e) {}
v24[v54] = 3428;
