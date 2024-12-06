const v0 = [];
const v1 = [v0,v0,v0];
const v2 = [v1];
const v3 = [v1,v2];
let v5 = "E";
const v8 = new WeakSet();
function f9(a10, a11) {
    const o24 = {
        [a10]: "undefined",
        __proto__: a11,
        3996128254: WeakSet,
        set e(a13) {
            let v12 = this;
            const v14 = a11.length;
            v1[268435441] = v0;
            v12 /= v12;
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = WeakSet;
                this.h = v1;
            }
            const v20 = new F16(a13, "trimStart");
            new F16(v20, v14);
            new F16(v5, "trimStart");
            a11["trimStart"]();
        },
        "c": v2,
        "h": v5,
        "b": "undefined",
        [v0]: a11,
        "e": a11,
        512: v0,
        ...a10,
        "e": "undefined",
        "g": WeakSet,
        [v8]: v8,
        "d": v0,
        "f": v0,
        3: v3,
        "d": "CD",
    };
    return o24;
}
const v25 = f9(v1, "CD");
const v26 = f9(v0, v5);
const v27 = f9(v1, "undefined");
class C28 extends f9 {
    n(a30, a31, a32, a33) {
        const v35 = (a33 != f9) % v5;
        try { a32(f9, f9, a32, a32, v35); } catch (e) {}
        return "CD";
    }
    static get h() {
        v5 >>= v5;
        const v38 = [WeakSet,"CD","undefined","undefined",v25];
        const v39 = [v25,v5];
        [v27,this,v26,v1,v5];
        const v42 = Symbol.iterator;
        const o56 = {
            [v42]() {
                let v44 = 10;
                const o55 = {
                    next() {
                        v44--;
                        const v50 = new BigUint64Array(v42);
                        try { v50.map(Array); } catch (e) {}
                        const v53 = v44 == 0;
                        const o54 = {
                            "done": v53,
                            [v44]: v26,
                            "a": Array,
                            [v39]: this,
                            ...v39,
                            ...v8,
                            "value": v44,
                        };
                        return o54;
                    },
                };
                return o55;
            },
        };
        return v38;
    }
}
new C28();
new C28();
new C28();
function f61(a62, a63, a64, a65) {
    a64 == 127;
    return a63;
}
const v67 = [127,127,127,127,127];
const v68 = [v67];
for (let i = 0; i < 5; i++) {
    try { v68.map(f61); } catch (e) {}
    v67[252] = v67;
}
