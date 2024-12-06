new BigInt64Array(256);
const v5 = new Int16Array(7);
const v8 = new Int8Array(8);
[256,Int8Array,Int16Array,256,null];
const v11 = [256,null];
[7,v11,v11,v8,BigInt64Array];
function F13() {
    if (!new.target) { throw 'must be called with new'; }
    const v17 = Symbol.species;
    this[v17] = this;
    for (let v18 = 0; v18 < 32; v18++) {
        v17["p" + v18] = v18;
    }
    this.h = -9007199254740990;
}
new F13(v5, 8, 7);
const v22 = new F13();
const v23 = new F13();
const v26 = -1 >>> v23;
function F27(a29, a30, a31) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a30;
}
const v32 = new F27(-1, -4294967297, v26);
new F27(-4294967297, v32, -4294967297);
new F27(-4294967297, F13, v26);
[-65537,-4294967296,0,0,-4];
const v37 = [1073741824,-438822695,75723568,-2147483648,-1187201203,2147483648,17724,-9,9007199254740991,-19589];
[-2147483647,26523,4294967295,4294967296,-44135,268435441,0];
const v41 = Symbol.iterator;
const o50 = {
    [v41]() {
        let v43 = 10;
        const o49 = {
            next() {
                v43--;
                const v47 = v43 == 0;
                const o48 = {
                    "done": v47,
                    "value": v43,
                };
                return o48;
            },
        };
        return o49;
    },
};
const v67 = new Int32Array(7);
new Float64Array(220);
const v73 = new Int8Array(3428);
function f74(a75, a76) {
    try { a76(a76, a75); } catch (e) {}
    v73[2117] = v67;
    a75[9] = a76;
}
new Promise(f74);
try { v73.find(f74, v22); } catch (e) {}
v37[v67] = 3428;
