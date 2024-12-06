function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -53422;
    this.c = -53422;
    const v3 = [-1073741824,1073741824,-566284451,9,44901,2147483649];
    const v4 = [10000,-4096,1073741823,4294967297];
    v4.push(v3, -53422, v4);
    let v7 = new WeakMap();
    v7 ^= v7.__proto__;
}
const v9 = new F0();
const v10 = new F0();
const v11 = new F0();
function f12(a13) {
    const o36 = {
        [v10](a15, a16) {
            return a15;
        },
        "e": F0,
        n(a21) {
            v11.__proto__ = a21;
            let v25 = Date["UTC"](3353);
            const o27 = {
                get d() {
                    this[this] *= 3353;
                    return this;
                },
            };
            super.f = v10;
            for (let v29 = 0; v29 < 32; v29++) {
                const v31 = "p" + v29;
                v10[v31] = v29;
                const v32 = new f12(F0);
                v32[v31] &= a13;
                v25 = a13;
                Object.defineProperty("p", 65535, { enumerable: true, set: Date });
            }
            return this;
        },
    };
    return o36;
}
const v38 = f12(f12(v11));
function f39(a40, a41, a42) {
    const o43 = {
        ...a40,
    };
    return a41;
}
const v44 = f12(v38);
const v46 = new WeakSet();
function F47(a49, a50, a51, a52) {
    if (!new.target) { throw 'must be called with new'; }
    new Uint8Array();
    ArrayBuffer["isView"]();
    this.c = F0;
    this.h = a52;
    this.g = f12;
}
const v58 = new F47(v10, WeakSet, v9, v46);
ReferenceError.apply();
const v63 = new BigUint64Array(3);
[4096,-9223372036854775807,9223372036854775807,1] < v63;
new F47(v58, v9, v46, v11);
const v67 = new F47(v44, v38, v11, v9);
const v68 = [v67,v67,v44,v67,v67];
for (let v69 = 0; v69 < 32; v69++) {
    v58["p" + v69] = v69;
}
[F0,v44,v9];
[v68,v38];
let v74 = -21275;
-2.220446049250313e-16 * --v74;
