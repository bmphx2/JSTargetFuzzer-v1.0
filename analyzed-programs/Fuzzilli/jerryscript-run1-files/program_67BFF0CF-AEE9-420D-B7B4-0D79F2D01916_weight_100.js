const v1 = new WeakSet();
function f2(a3) {
    const o11 = {
        "b": a3,
        get g() {
            function F5(a7) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = a7;
                this.a = a7;
            }
            const v8 = new F5(v1);
            const v9 = new F5(v8);
            const v10 = new F5(v9);
            return v10;
        },
    };
    return o11;
}
const v12 = f2(v1);
const v13 = f2(f2);
f2(v12);
class C15 extends WeakSet {
    static #f;
    static {
        let v17 = this[this];
        v17 >>>= v17;
        let v20 = -2.220446049250313e-16;
        3 * 3;
        const v22 = f2++;
        Math.atanh(v22);
        const v24 = --v20;
        Math.hypot(v24);
        v24 ** v22;
    }
}
const v27 = new C15();
new C15();
const v29 = new C15();
function f30(a31, a32) {
    const o40 = {
        [a32](a34, a35, a36) {
            a31 = a34;
            return 9007199254740990n;
        },
        "e": a32,
        ...v1,
        ...v12,
        ...a32,
    };
    return o40;
}
f30(v1, v29);
f30(v1, v1);
const v43 = f30(v1, v27);
for (let i46 = 0, i47 = 10; i46 < i47; i46++, i47--) {
    f2 = i46;
    v43.__proto__;
    [i47,v13,i46,v1];
}
