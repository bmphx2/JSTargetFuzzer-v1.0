new BigInt64Array(1000);
const o7 = {
    ...BigInt64Array,
    valueOf() {
        delete this[this];
        let v6;
        try { v6 = this.valueOf(); } catch (e) {}
        v6.__proto__ = this;
        return v6;
    },
};
const v9 = new Proxy(BigInt64Array, o7);
try {
const t0 = 1000;
t0(v9);
} catch (e) {}
new Int16Array(2910);
new Uint8ClampedArray(34);
function f19(a20, a21, a22) {
    return f19;
}
const v24 = new Uint32Array();
const o25 = {
};
const v27 = new Proxy(v24, o25);
function F28(a30, a31, a32, a33) {
    if (!new.target) { throw 'must be called with new'; }
    v27.toString = a31;
}
const v34 = new F28();
new F28(Proxy, v34, v34, v24);
