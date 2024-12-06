new WeakSet();
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
f28();
let v40 = Int32Array;
let v41 = new v40(4096);
new Uint32Array(129);
let v47 = new Int16Array(512);
[,v40,v47,v41] = v47;
v36.g += 4096;
const v49 = Symbol.iterator;
const o58 = {
    [v49]() {
        let v51 = 10;
        const o57 = {
            next() {
                v51--;
                const v55 = v51 == 0;
                const o56 = {
                    "done": v55,
                    "value": v51,
                };
                return o56;
            },
        };
        return o57;
    },
};
const v64 = new BigUint64Array(16);
const v67 = new Float32Array(3007);
const v70 = new Float32Array(3);
Object.defineProperty(v64, "byteOffset", { configurable: true, value: v70 });
v67[v70];
let v72 = v67[2936874794];
v24.g = -1024;
let v75 = --v72;
const v76 = v24 | v75;
const v77 = v24 ** v72;
!v76;
Math.clz32(v77);
--v75;
~v77;
