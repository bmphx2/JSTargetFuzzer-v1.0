function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
new f0();
new F1();
const v5 = new F1();
class C6 {
    [v5];
    static valueOf(a8, a9) {
        const o10 = {
            "construct": a9,
            "defineProperty": f0,
            "getPrototypeOf": f0,
            "setPrototypeOf": f0,
        };
        new Proxy(a8, o10);
        return F1;
    }
}
const v13 = new C6();
const v14 = new C6();
new C6();
[129586836,89451228,-1,512,-4096,-65536,24414735,9007199254740990,-11];
[-4096,0,417936093,1536463441,1685943629,268435440,4294967295,0];
[-2,4,1860316019,-4096,1073741825,268995577,512,65536,-9007199254740992,-4];
const v26 = new Set();
class C30 {
    6 = -1073741824n;
    set e(a32) {
        try {
            super.toString(-1073741824n, 12);
        } catch(e34) {
        }
    }
    static 3;
    m(a36, a37, a38) {
        a38 *= 2023143923n;
        v26[268435439] <<= -1550667973;
        new Float32Array(0);
        function f43() {
        }
        [9.529192887103498,-5.0,-680123.9779744686,1e-15,81.69963431340238,6.059006012608875e+307,0.824015933544211,-870.8828045491306,-4.569904480596199e+307];
        const v45 = [-6.4610972807674205,347.6705586854091,-406.66521858332374,335300.5402220483,-1000000000000.0,-9.793550296727327];
        [0.4957027016418917,1.4169040519612537,2.0,2.0,-8.50164741928448,604325.9908552598,5.0,0.0,206.06051757079854];
        let v55 = 9007199254740990;
        new Int16Array(255);
        const v61 = new Uint8Array(5);
        new Uint8ClampedArray(257);
        function f65(a66, a67) {
            const o80 = {
                ...v45,
                ["yk4P"]: v45,
                1053877365: f43,
                174: a66,
                "c": v61,
                65536: a67,
                "e": a67,
                set f(a69) {
                    try { a69(Int16Array, a69, a69, this); } catch (e) {}
                    new Uint8ClampedArray(Uint8ClampedArray);
                    new Uint16Array(341);
                    new Int16Array(16);
                },
            };
            return o80;
        }
        f65(5, 255);
        const v82 = f65(255, 257);
        const v83 = f65(257, v82);
        const v84 = new Uint8Array(257, 257, 255);
        const v85 = `
            v55 /= 257;
            const v88 = new Date();
            const v90 = [Date,Date,Date,Date];
            for (const v93 of Reflect.apply(v88.toUTCString, v88)) {
                v93.__proto__ = v90;
            }
            function F95() {
                if (!new.target) { throw 'must be called with new'; }
                this.e = 1024;
                this.a = 1024;
            }
        `;
        eval(v85);
        let v101;
        try { v101 = v84.includes(v84); } catch (e) {}
        Object.defineProperty(v82, 257, { enumerable: true, get: f65 });
        for (let v102 = 0; v102 < 32; v102++) {
            v61["p" + v102] = v102;
        }
        v61[3];
        try { v101[v83](Int16Array); } catch (e) {}
        for (let [i111, i112] = (() => {
                for (let v109 = 0; v109 < 5; v109++) {
                }
                return [v14, 10];
            })();
            i111 < i112;
            (() => {
                const o116 = {
                };
                i111++;
            })()) {
        }
        new Float32Array(9);
        let v123 = 59;
        --v123 * 4096;
        new Int32Array(1000);
        return 0;
    }
}
new C30();
new C30();
new C30();
const v134 = new Int32Array(2083);
new Uint8Array(255);
const v140 = new Int16Array(7);
function f141(a142, a143, a144) {
    const o151 = {
        "h": Int32Array,
        set e(a146) {
            e = a143;
            [a144,a143];
            [v134];
            [Int16Array,Uint8Array];
            (12).h;
        },
        __proto__: v13,
        "b": Uint8Array,
        "c": -1550667973,
        ...a142,
        [Int16Array]: a143,
        [2083]: 12,
        "f": a144,
        "e": v134,
        ...C30,
        1053877365: a143,
    };
    return o151;
}
const v152 = f141(2083, 255, 7);
const v153 = f141(v152, 7, 2083);
f141(f141, 255, 7);
v152[-2] &= 2083;
v140[-1] -= 7;
let v155 = 10;
for (; v155--;) {
    v153.h;
    v153[Symbol.toPrimitive] = 7;
}
