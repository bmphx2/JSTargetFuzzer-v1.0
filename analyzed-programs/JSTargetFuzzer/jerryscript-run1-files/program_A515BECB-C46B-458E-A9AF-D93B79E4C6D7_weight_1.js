function f0() {
    const o16 = {
        "c": 1000000000000.0,
        "a": 1381202571,
        get b() {
            const v5 = this instanceof this;
            const v6 = 0.7631151840659027 instanceof v5;
            function F7(a9, a10, a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = this;
                this.f = this;
            }
            const v13 = new F7(0.7631151840659027, 0.7631151840659027, this, v6);
            const v14 = new F7(1381202571, v13, 0.7631151840659027, v5);
            const v15 = new F7(v14, 1381202571, 1000000000000.0, v14);
            return v15;
        },
        [1381202571]: 1381202571,
    };
    return o16;
}
const v17 = f0();
const v18 = f0();
const v19 = f0();
const v20 = [65536,10,-12,268435456,654634837];
const v21 = [2147483647,-1073741824,43796];
const v22 = [128,18848,4294967295,-3,2147483648,4,2,-2147483648];
function f23() {
    return v19;
}
const v24 = [v22,v17];
const v25 = [f0,v24,v24];
const v26 = [v21];
function f27(a28, a29) {
    const o36 = {
        [a28]: v20,
        set a(a31) {
            v18[87];
            v25.__proto__ = v22;
            v20 + -a28;
            f23();
        },
        "b": v17,
        "e": v26,
        __proto__: v26,
        "a": v25,
        [v26]: v17,
        ...a29,
        "c": f0,
    };
    return o36;
}
const v37 = f27(v20, v18);
f27(v25, v37);
f27(v22, v37);
+v21;
new BigUint64Array(15);
new Int16Array(129);
new Uint16Array(129);
