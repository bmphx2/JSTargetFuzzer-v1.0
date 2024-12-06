const v0 = [];
const v3 = new BigUint64Array(257);
const v6 = new Uint8Array(6);
const v7 = v0 instanceof BigUint64Array;
const v9 = v0["flat"](6);
const t4 = "flat";
delete t4[5];
v3.__proto__ = v0;
const v13 = new Int8Array(167);
function f14(a15, a16) {
    const o46 = {
        toString(a18, a19, a20) {
            const o24 = {
                "maxByteLength": 65535,
            };
            const v26 = new ArrayBuffer(255, o24);
            new Float32Array(v26);
            Object.defineProperty(v6, 257, { writable: true, configurable: true, enumerable: true, get: f14, set: f14 });
            let {"a":v30,"f":v31,"length":v32,...v33} = v0;
            -4096n >= v33;
            65536n < a16 ? 65536n : v3;
            const v38 = a16 / 65535n;
            v13[v7] = v7;
            a15 % v38;
            return -4096n;
        },
        "b": v13,
        "d": 167,
        "g": a15,
        __proto__: v13,
        "c": v0,
        "h": a16,
        ...v13,
        "f": 257,
        "g": 257,
    };
    return o46;
}
const v47 = f14(6, 167);
f14(167, 6);
f14(257, 6);
let v55 = new Float32Array(538);
v55 <<= v55;
let v56;
try { v56 = f14(16n, f14, ...v13, ...v6, v47, ...7n); } catch (e) {}
v56 = v9;
try { v6.set(v6, 6); } catch (e) {}
v56.byteLength -= 538;
new Float64Array(14);
new Float32Array(257);
Float64Array instanceof Float32Array;
const o74 = {
    valueOf() {
        let v73 = super.d;
        v73 |= v73;
        return 257;
    },
};
try { (167).entries(); } catch (e) {}
