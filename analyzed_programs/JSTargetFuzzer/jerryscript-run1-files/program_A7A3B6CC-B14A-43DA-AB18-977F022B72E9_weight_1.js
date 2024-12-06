const v0 = [268435441,-4294967295,3,1181822879];
const v1 = [-12,2147483648,-32855,9,6,268435456,1073741824,129];
const v2 = [-8079,7,16,3];
new Float32Array(1794);
const v8 = new Uint8Array(1);
const v11 = new BigInt64Array(6);
function f12(a13, a14) {
    const o37 = {
        set a(a16) {
            try { a16(a16, this, this, a16); } catch (e) {}
        },
        120: 6,
        "f": a14,
        [a14]: a14,
        [a14]: 1794,
        "a": v11,
        ...v0,
        [v8]: a14,
        valueOf(a19, a20, a21) {
            let {"g":v22,"length":v23,} = a20;
            function F24(a26, a27, a28) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = v22;
                this.e = a19;
            }
            new F24(v2, v23, v2);
            new F24(v0, v8, v0);
            const v31 = `
                v1.__proto__;
                a20?.a;
                Object.defineProperty(v2, v1, { configurable: true, value: a13 });
            `;
            eval(v31);
            const v36 = new F24(v0, v23, a19);
            return v36;
        },
    };
    return o37;
}
f12(f12, 1794);
f12(f12(v8, 1794), 1794);
new Int16Array(255);
const v46 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f50(a51, a52) {
    const o65 = {
        174: a51,
        "c": v46,
        65536: a51,
        "e": v46,
        set byteLength(a54) {
            try { a54(Int16Array, a54, a54, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o65;
}
f50(5, 255);
const v67 = f50(255, 257);
const v68 = f50(257, 255);
const v69 = new Uint8Array(257, 257, 255);
let v70;
try { v70 = v69.includes(v69); } catch (e) {}
Object.defineProperty(v67, 257, { enumerable: true, get: f50 });
for (let v71 = 0; v71 < 32; v71++) {
    v46["p" + v71] = v71;
}
v68[3];
try { v70["p"](Int16Array); } catch (e) {}
