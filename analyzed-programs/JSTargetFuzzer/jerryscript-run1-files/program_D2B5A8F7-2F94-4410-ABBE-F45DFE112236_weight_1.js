class C3 {
    static get e() {
        super.f = 5.0;
        this.g = -1e-15;
        super.d = this;
        let {"g":v5,"h":v6,...v7} = this;
        const o10 = {
            "maxByteLength": 16,
        };
        const v12 = new ArrayBuffer(9, o10);
        new Uint8ClampedArray(v12);
        return v6;
    }
}
const v15 = new C3();
new C3();
new C3();
const v26 = new Int32Array(2083);
let v27;
try { v27 = v15(...536870888n, v15, 9.718739244673514e+307, 9.718739244673514e+307); } catch (e) {}
try { v15.p(v27, v27); } catch (e) {}
const v31 = new Uint16Array(753);
new Int16Array(2762);
const v37 = new Int16Array(3);
new Uint8Array(255);
const v43 = new Int16Array(7);
function f44(a45, a46, a47) {
    const o54 = {
        "f": v43,
        9: Int16Array,
        8: C3,
        "b": v31,
        "g": v37,
        "h": Int32Array,
        set e(a49) {
            e = a46;
            [a47,a46];
            [v26];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v43,
        "b": Uint8Array,
        "c": 255,
        ...a45,
        1053877365: a46,
    };
    return o54;
}
const v55 = f44(2083, 255, 7);
const v56 = f44(v55, 7, 2083);
f44(f44, 255, 7);
v55[-2] &= 2083;
v43[-1] -= 7;
let v58 = 10;
for (; v58--;) {
    v56.h;
    function f65(a66) {
        return a66;
    }
    class C67 extends f65 {
        [0];
    }
    v56[Symbol.toPrimitive] = 7;
}
