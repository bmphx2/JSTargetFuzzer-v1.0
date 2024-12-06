const o5 = {
    get g() {
        return this;
    },
    set g(a4) {
    },
};
function f13(a14, a15, a16) {
    const o28 = {
        "b": a15,
        __proto__: a16,
        "d": 13,
        "g": -65536,
        "c": a14,
        "a": a16,
        o(a18, a19, a20) {
            Object.defineProperty(this, a20, { configurable: true, enumerable: true, value: a15 });
            function f21(a22, a23) {
                const o24 = {
                    "d": a22,
                    "e": a15,
                    __proto__: this,
                };
                return o24;
            }
            f21(-65535, a15);
            f21(a15, 13);
            f21(a16, -65535);
            return -48653;
        },
    };
    return 268435441;
}
f13(127n, -65535, 13);
f13(-1928810518n, -65536, 13, -1928810518n);
f13(1815834906n, -48653, -65536);
new Uint8ClampedArray(3906);
new Int8Array(2547);
new Uint8ClampedArray(1);
const v46 = new Int16Array(19);
const v49 = new Uint32Array(64);
new Int8Array(1700);
const o53 = {
};
const v55 = new Proxy(v49, o53);
let v57;
try { v57 = v55["valueOf"](Uint32Array, Uint32Array, v55, v49); } catch (e) {}
const v58 = [v57,-36134n,v57,Uint32Array];
[v55,1700,v58,v46,v58];
const v60 = [-65536n];
try { v57(v60); } catch (e) {}
