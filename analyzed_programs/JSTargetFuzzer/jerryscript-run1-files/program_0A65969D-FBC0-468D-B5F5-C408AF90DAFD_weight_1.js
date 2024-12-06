function f0() {
    const o9 = {
        set f(a5) {
            for (let v6 = 0; v6 < 32; v6++) {
                a5["p" + v6] = v6;
            }
        },
        __proto__: 0.7154278628143215,
        "h": 0.7154278628143215,
        "b": 56145.24137172033,
        ...56145.24137172033,
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
f0();
const v18 = new Array(7);
class C19 {
    m(a21, a22) {
        let v20 = this;
        async function f23(a24, a25) {
            a25 = Array;
            a24 = a25;
            ({"g":a25,"length":v20,} = v18);
            Object.defineProperty(v10, 255, { writable: true, configurable: true, value: SharedArrayBuffer });
            v11[536870888] = v20;
            const o28 = {
                "maxByteLength": 255,
            };
            const v30 = new SharedArrayBuffer(255, o28);
            new Int16Array(v30);
            return await a21;
        }
        C19 ^ Array;
        Object.defineProperty(v10, a22, { writable: true, get: Array });
        new Set();
        Array.__proto__ = v10;
        f23(v11, 6n);
        return f23;
    }
}
new C19();
new C19();
new C19();
try { Float64Array(); } catch (e) {}
