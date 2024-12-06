function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -2;
    this.a = -2;
    this.b = -2;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o18 = {
        "d": v3,
        __proto__: a8,
        set g(a10) {
            const o13 = {
                "maxByteLength": 3967,
            };
            const v15 = new SharedArrayBuffer(1000, o13);
            new Float32Array(v15);
        },
    };
    return o18;
}
let v19 = f6(v4, v5);
const v20 = f6(v19, v5);
const v21 = f6(v19, v3);
class C22 {
    static 2498;
    valueOf(a24, a25, a26) {
        for (let v30 = 0; v30 < 32; v30++) {
            v20["p" + v30] = v30;
        }
        return a25;
    }
}
let v33 = new C22();
new C22();
new C22();
v5[C22] = f6;
try { C22["o"](v4, C22, C22, "o", "o"); } catch (e) {}
v19 = v21;
v33 = C22;
const v40 = new Uint32Array(181);
let v42 = BigUint64Array;
let v43 = new v42(1);
let v44 = 253;
[v44,,v42,v43] = v40;
try { v42["abs"](181, v44, v42); } catch (e) {}
new Uint16Array(v44);
for (let i57 = 0;
    i57 < 2;
    (() => {
        function f61(a62, a63, a64, a65) {
            return a62;
        }
        f61(181, v42, f61, v20);
        i57++;
    })()) {
    const v72 = new Function("x");
    v72.name;
}
Function();
