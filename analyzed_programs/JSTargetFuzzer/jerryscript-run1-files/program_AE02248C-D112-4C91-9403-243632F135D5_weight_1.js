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
            const v14 = [];
            Reflect.apply(this.valueOf, a12, v14);
            return -268435456n;
        },
    };
    return o20;
}
f2(false);
f2(false);
f2(false);
function f34(a35, a36) {
    try { a35(a35); } catch (e) {}
    const v38 = [-9223372036854775807,2,268435439,0,0,55990];
    const o39 = {
        "isExtensible": a35,
    };
    const v41 = new Proxy(v38, o39);
    v41 % 1000000000000.0;
    return a36;
}
const v43 = f34(f34);
try { v43.every(BigUint64Array); } catch (e) {}
const o49 = {
    valueOf() {
        delete this[this];
        let v48;
        try { v48 = this.valueOf(); } catch (e) {}
        v48.__proto__ = this;
        return v48;
    },
};
