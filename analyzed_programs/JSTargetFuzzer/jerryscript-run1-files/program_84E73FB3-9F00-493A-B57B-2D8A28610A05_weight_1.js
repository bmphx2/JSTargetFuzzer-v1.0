const v1 = new WeakMap();
function f2(a3, a4) {
    const o11 = {
        "g": a4,
        ...a3,
        set f(a6) {
            let v7;
            try { v7 = a6(this); } catch (e) {}
            const v8 = delete this[a3];
            try { new a4(v8, v7); } catch (e) {}
            v1.__proto__;
        },
        "d": a4,
        "a": v1,
        "c": a4,
    };
    return o11;
}
const v12 = f2(WeakMap, f2);
const v13 = f2(f2, f2);
const v14 = f2(v1, WeakMap);
try {
const t0 = -61913n;
t0();
} catch (e) {}
const v18 = new Date();
v18.setMonth();
function f20(a21, a22, a23, a24) {
    const o91 = {
        __proto__: v14,
        set e(a26) {
            this.lastIndexOf(a22);
        },
        n(a29, a30) {
            for (const v31 of a29) {
            }
            return this;
        },
        [a24]: v14,
        set b(a33) {
            const v34 = delete this[a33];
            v12.a >>>= a24;
            try {
                super.valueOf(a21, v13);
                try {
                    for (const v37 of "preventExtensions") {
                        break;
                    }
                } finally {
                }
            } catch(e38) {
            }
            super.b = v34;
            function f39() {
                function f40() {
                    return f40;
                }
                const v42 = new Uint8Array();
                v42.map(f40);
                const o56 = {
                    __proto__: "-536870912",
                    "d": "-536870912",
                    "g": "-536870912",
                    ..."-536870912",
                    "c": 1.7976931348623157e+308,
                    9: -24152,
                    "h": -24152,
                    get f() {
                        this[7] = -24152;
                        let v48;
                        try { v48 = this.n(); } catch (e) {}
                        let [v49,v50] = v48;
                        Int8Array(3);
                        Int8Array(8);
                        return f39;
                    },
                };
                return o56;
            }
            const v59 = new Uint32Array(112);
            function F60(a62, a63, a64, a65) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = v59;
            }
        },
        [a22](a67, a68) {
            try { new a21(); } catch (e) {}
            try {
                (-2n) ** 63703n;
                +-2;
                super.getYear(a21);
            } catch(e76) {
            }
            with (a68) {
                e = this;
                class C77 {
                }
                new C77();
                const v82 = Math.min(RegExp);
                try { RegExp.apply(Date, v82); } catch (e) {}
                -4096 >>> v13;
                Math.ceil(a68);
                !0.1523926944197822;
            }
            return a68;
        },
    };
    return o91;
}
const v92 = f20(v12, v12, v12, v12);
v1.__proto__ = v92;
Object.defineProperty(v92, 536870912, { get: f20 });
const v96 = f20(v1, v14, v1, f20);
f20(v96, v13, v1, v96);
0n < 0n;
