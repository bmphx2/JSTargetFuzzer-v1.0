function f0() {
    let v2 = 1000000000.0;
    const o8 = {
        "d": v2,
        "c": -4294967296,
        __proto__: v2,
        p(a5) {
            if (v2 < this) {
                try { this.getOwnPropertyNames(a5); } catch (e) {}
            } else {
                v2 ^= a5;
            }
            return a5;
        },
        "f": v2,
        [v2]: -4294967296,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
const v12 = [173162513,512,-2147483647,10,14,268435441];
const v13 = [64605,8,6];
const v14 = [-16,4294967297,-35474];
class C15 extends f0 {
    get e() {
        const v17 = this instanceof f0;
        super.c;
        const o21 = {
            6: 268435456,
            [ArrayBuffer]: v10,
            "h": v13,
            __proto__: v12,
            [v14]: v10,
            "maxByteLength": 268435456,
        };
        const v23 = new ArrayBuffer(145, o21);
        new Int8Array(v23);
        return v17;
    }
}
const v26 = new C15();
new C15();
const v28 = new C15();
[v28,v10,C15];
const v30 = [v9,v26,v26];
[v11,v30,v28,v30];
Reflect.apply(Array.of);
