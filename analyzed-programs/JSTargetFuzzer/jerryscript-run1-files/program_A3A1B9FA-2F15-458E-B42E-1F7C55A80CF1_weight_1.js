const v3 = [-2.220446049250313e-16,-2.220446049250313e-16];
const v5 = [-4.011853917264727,0.7209435954628134,v3,-2.220446049250313e-16,[v3,v3]];
class C6 {
    get b() {
        const v9 = Symbol.iterator;
        const o27 = {
            [v9]() {
                let v11 = 10;
                const o17 = {
                    next() {
                        v11--;
                        const v15 = v11 == 0;
                        const o16 = {
                            "done": v15,
                            "value": v11,
                        };
                        return o16;
                    },
                };
                const o23 = {
                    m(a20, a21, a22) {
                        super.c = Date;
                        return Date;
                    },
                };
                Reflect.apply(o23.m);
                return o17;
            },
        };
        return v5;
    }
}
new C6();
new C6();
new C6();
new Int8Array(832);
new Uint32Array(4096);
new Uint16Array(127);
function f43(a44, a45) {
    const o52 = {
        get h() {
            this[46667] = a44;
            try { a45(a45, a45); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a49) {
            this[a49] *= 46667;
            [] = 39946;
            const v50 = super.a;
            let v51;
            try { v51 = new v50(v50, a49); } catch (e) {}
            v51[2147483648] = v51;
            return a49;
        },
    };
    return o52;
}
const v53 = f43(39946, 46667);
const v56 = new BigInt64Array();
switch (0) {
    case v56:
        break;
}
f43(255, 46667);
f43(255, 46667);
const v64 = new BigUint64Array(16);
const v67 = new Float32Array(3007);
const v70 = new Float32Array(3);
Object.defineProperty(v64, "byteOffset", { configurable: true, value: v70 });
v67[v70];
let v72 = v67[2936874794];
v53.g = -1024;
let v75 = --v72;
const v76 = v53 | v75;
const v77 = v53 ** v72;
!v76;
Math.clz32(v77);
--v75;
~v77;
