function f9(a10, a11, a12) {
    const o24 = {
        "b": a11,
        __proto__: a12,
        "d": 13,
        "g": -65536,
        "c": a10,
        "a": a12,
        o(a14, a15, a16) {
            Object.defineProperty(this, a16, { configurable: true, enumerable: true, value: a11 });
            function f17(a18, a19) {
                const o20 = {
                    "d": a18,
                    "e": a11,
                    __proto__: this,
                };
                return o20;
            }
            f17(-65535, a11);
            f17(a11, 13);
            f17(a12, -65535);
            return -48653;
        },
    };
    return 268435441;
}
f9(127n, -65535, 13);
f9(-1928810518n, -65536, 13, -1928810518n);
f9(1815834906n, -48653, -65536);
new Uint8ClampedArray(3906);
new Int8Array(2547);
new Uint8ClampedArray(1);
const v42 = new Int16Array(19);
const v45 = new Uint32Array(64);
new Int8Array(1700);
const o49 = {
};
const v51 = new Proxy(v45, o49);
let v53;
try { v53 = v51["valueOf"](Uint32Array, Uint32Array, v51, v45); } catch (e) {}
const v54 = [v53,-36134n,v53,Uint32Array];
[v51,1700,v54,v42,v54];
const v56 = [-65536n];
try { v53(v56); } catch (e) {}
