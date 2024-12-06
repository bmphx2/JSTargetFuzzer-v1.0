function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 3;
}
new F0();
new F0();
new F0();
const v11 = new Float32Array(3726);
new Uint8ClampedArray(5);
new Uint32Array(1024);
new WeakMap();
function f20() {
    return WeakMap;
}
const v23 = new Int8Array(5);
const v26 = new Function(190);
new Float32Array(127);
function f36(a37, a38) {
    const o48 = {
        get h() {
            this[803142468] = a37;
            const o40 = {
                "deleteProperty": f36,
                "getPrototypeOf": v26,
            };
            new Proxy(this, o40);
            try { a38(a38, a38); } catch (e) {}
            return 255;
        },
        __proto__: 255,
        m(a45) {
            this[a45] *= 803142468;
            [] = 39946;
            const v46 = super.a;
            let v47;
            try { v47 = new v46(v46, a45, a45, 190); } catch (e) {}
            v47[2147483648] = v47;
            return a45;
        },
    };
    return o48;
}
const v49 = f36(39946, 803142468);
const v50 = f36(255, 803142468);
[v49,3726,f36(255, 803142468)];
[[Int8Array,Function,1073741824n,v23],Uint32Array,f36,v11];
for (let v55 = 0; v55 < 32; v55++) {
    v50["p" + v55] = v55;
}
const v63 = new BigUint64Array(16);
const v66 = new Float32Array(3007);
const v69 = new Float32Array(3);
Object.defineProperty(v63, "byteOffset", { configurable: true, value: v69 });
v66[v69];
for (let i72 = 0; i72 < 6; i72++) {
    typeof i72 === "boolean";
}
let v81 = v66[2936874794];
v49.g = -1024;
let v84 = --v81;
const v85 = v49 | v84;
const v86 = v49 ** v81;
!v85;
Math.clz32(v86);
--v84;
~v86;
