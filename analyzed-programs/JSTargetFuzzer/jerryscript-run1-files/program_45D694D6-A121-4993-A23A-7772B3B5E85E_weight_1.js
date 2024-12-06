[];
function f2(a3) {
    const o20 = {
        "f": a3,
        valueOf(a5, a6) {
            this.f;
            return -22257;
        },
        __proto__: a3,
        p(a12) {
            const v14 = [Reflect];
            Reflect.apply(this.valueOf, a12, v14);
            return -268435456n;
        },
    };
    return o20;
}
const v21 = f2(false);
f2(false);
const v23 = f2(false);
new f2(64904n);
const v31 = Symbol.species;
v23[v31];
delete v23[164];
function f39(a40, a41) {
    try { a40(a40); } catch (e) {}
    const v43 = [-9223372036854775807,2,268435439,0,0,55990];
    const o49 = {
        "isExtensible": a40,
        toString(a45, a46) {
            try {
                super.UTC(a45);
            } catch(e48) {
            }
            return a45;
        },
    };
    const v52 = new BigUint64Array(BigUint64Array);
    const v54 = new BigInt64Array(v52);
    v52.set(v54);
    const v56 = new Proxy(v43, o49);
    v56 % 1000000000000.0;
    return a41;
}
const v58 = f39(f39);
let v60;
try { v60 = v58.every(BigUint64Array); } catch (e) {}
const o64 = {
    valueOf() {
        delete this[this];
        let v63;
        try { v63 = this.valueOf(); } catch (e) {}
        v63.__proto__ = this;
        return v63;
    },
    ...v31,
    ...v60,
    "f": -7n,
    ...v21,
    ...v58,
};
