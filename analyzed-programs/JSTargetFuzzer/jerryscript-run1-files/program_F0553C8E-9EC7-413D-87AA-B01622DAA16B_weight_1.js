function f0() {
    let v3 = "MAX_SAFE_INTEGER";
    class C4 {
        static set h(a6) {
        }
    }
    const v8 = new Uint8Array(C4, Uint8Array, Uint8Array);
    const v11 = new Uint16Array(7);
    delete v8[v11];
    const o30 = {
        __proto__: "unicode",
        set h(a14) {
            const o17 = {
                "maxByteLength": 1636,
            };
            const v19 = new ArrayBuffer(128, o17);
            new Float32Array(v19);
            var b = this;
        },
        m(a24, a25) {
            try { a25(); } catch (e) {}
            v3 = a25;
            return f0;
        },
        [v3]: v3,
    };
    return o30;
}
const v31 = f0();
const v32 = f0();
const v33 = f0();
function f34() {
    return v31;
}
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a38;
    this.d = f34;
}
let v39 = new F35(v32, v32);
const v40 = new F35(v33, v32);
let v41;
try { v41 = v32.m(v40); } catch (e) {}
try { v41(v32, f34, v33); } catch (e) {}
F35 !== v41;
v39 <<= v40;
new F35(v40, v33);
("undefined")[[-0.0,2.2250738585072014e-308,5.0,1.207728181434696e+308,-5.0]];
