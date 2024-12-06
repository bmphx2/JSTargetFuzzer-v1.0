function f0() {
    const o21 = {
        "a": f0,
        ["symbol"](a5, a6) {
            for (let i9 = 0, i10 = 10; i9 < i10; i9++, i10--) {
            }
            return a5;
        },
    };
    return o21;
}
const v22 = f0();
const v23 = f0();
const v24 = f0();
class C25 {
    n(a27, a28) {
        let v31 = 689303033;
        try { a27.o(-2147483648, v31); } catch (e) {}
        ++v31;
        Object.defineProperty(a27, 4294967296, { writable: true, configurable: true, enumerable: true, set: f0 });
        return v31;
    }
    constructor(a35, a36) {
        try { a35.n(a35, a36, v24); } catch (e) {}
        const o40 = {
            "maxByteLength": 190,
        };
        o40[a35] = f0;
        v22[this.__proto__];
        ArrayBuffer[C25];
        new WeakSet();
        const v47 = new ArrayBuffer(190, o40);
        new f0(v47);
    }
}
new C25(v22, v22);
const v51 = new C25(v23, v22);
const v52 = new C25(v23, v51);
function f53(a54, a55, a56, a57) {
    const o64 = {
        4: f0,
        2: v23,
        "d": a56,
        set e(a59) {
            const v60 = this / v22;
            [v22,v60,a59,v23];
            [v51,a56,[v60,v51,v52]];
        },
        "f": a56,
        __proto__: v22,
        "h": a55,
        "a": a56,
        "b": a56,
        ...a55,
    };
    return o64;
}
const v65 = f53(v52, v23, v51, v23);
const v66 = f53(v52, v65, v65, v52);
const v67 = f53(v23, v66, v51, v22);
class C68 {
    1;
    constructor(a70, a71, a72) {
        new C25(v66, a70);
        try { a71.n(f53, v23); } catch (e) {}
        const o77 = {
            "maxByteLength": 3842,
        };
        const v79 = new ArrayBuffer(1, v52);
        const o80 = {
        };
        new Proxy(ArrayBuffer, o80);
        new Uint8ClampedArray(3295);
        new Float64Array(2767);
        new Uint16Array(302);
        new Uint8ClampedArray(v79);
    }
    static f;
}
new C68(v65, v52, v66);
new C68(v52, v24, v66);
new C68(v67, C25, v65);
let v98 = 6n;
v98 &= -27645n;
