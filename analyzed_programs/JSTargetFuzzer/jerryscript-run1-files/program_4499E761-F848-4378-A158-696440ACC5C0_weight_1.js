const v10 = new WeakSet();
function f14(a15, a16) {
    const o23 = {
        get h() {
            this[46667] = a15;
            try { a16(a16, a16); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a20) {
            this[a20] *= 46667;
            [] = 39946;
            const v21 = super.a;
            let v22;
            try { v22 = new v21(v21, a20); } catch (e) {}
            v22[2147483648] = v22;
            return a20;
        },
    };
    return o23;
}
const v24 = f14(39946, 46667);
f14(255, 46667);
f14(255, 46667);
function f27() {
}
function f28() {
    const o34 = {
        get g() {
            new f27();
            return f27;
        },
        "h": f27,
        ...f27,
        "g": f27,
        "a": f27,
        ...f27,
    };
    return o34;
}
f28();
const v36 = f28();
const v37 = f28();
let v40 = Int32Array;
let v41 = new v40(4096);
new Uint32Array(129);
let v47 = new Int16Array(512, v37);
[,v40,v47,v41] = v47;
v36.g += 4096;
v10[f27] |= 129;
Symbol[v47];
const v53 = Symbol.iterator;
const o62 = {
    [v53]() {
        let v55 = 10;
        const o61 = {
            next() {
                v55--;
                const v59 = v55 == 0;
                const o60 = {
                    "done": v59,
                    "value": v55,
                };
                return o60;
            },
        };
        return o61;
    },
};
const v68 = new BigUint64Array(16);
const v71 = new Float32Array(3007);
const v74 = new Float32Array(5);
Object.defineProperty(v68, "a", { configurable: true, value: v74 });
v71[v74];
let v76 = v71[2936874794];
v24.g = -1024;
let v79 = --v76;
const v80 = v24 ** v79;
const v81 = v24 ** v76;
!v80;
Math.clz32(v81);
--v79;
~v81;
