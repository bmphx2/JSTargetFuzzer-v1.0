function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = f0;
}
new F1();
const v4 = new F1();
new F1();
function f9() {
    return v4;
}
eval("isNaN");
new Int16Array(255);
const v24 = new Uint8Array(5);
(996601957 / ~996601957) * "p";
new Uint8ClampedArray(257);
function f33(a34, a35) {
    function F36(a38, a39, a40) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function F41() {
        if (!new.target) { throw 'must be called with new'; }
    }
    new F41();
    const o94 = {
        174: a34,
        "c": v24,
        65536: a34,
        "e": v24,
        set f(a45) {
            const v46 = a45.atanh(a45);
            function F47() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v49 = new F47();
            class C50 {
            }
            const v51 = new C50();
            const v53 = `
                const v54 = F47 ^ -1.0;
                function F55(a57, a58, a59) {
                    if (!new.target) { throw 'must be called with new'; }
                    this.g = v54;
                    this.a = -1.0;
                    this.f = a57;
                }
                const v60 = new F55(C50, v49, v51);
                new F55(v54, v49, v60);
            `;
            const v64 = v46 != 45 ? v46 : 45;
            function f66() {
                return -2.0;
            }
            const v67 = new v64();
            const o68 = {
                "deleteProperty": f66,
            };
            new Proxy(v67, o68);
            -(-4294967297n);
            const v76 = new BigUint64Array(165);
            const v77 = v76.fill(255);
            try { a45(Int16Array, a45, a45, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            const o90 = {
                o(a87, a88, a89) {
                    Object.defineProperty("isNaN", 5, { configurable: true, enumerable: true, get: Date });
                    return this;
                },
                ...v77,
            };
            new Int16Array(16);
        },
    };
    return o94;
}
f33(5, 255);
const v96 = f33(255, 257);
f33(257, 255);
const v98 = new Uint8Array(257, 257, 255);
let v99;
try { v99 = v98.includes(v98); } catch (e) {}
Object.defineProperty(v96, 257, { enumerable: true, get: f33 });
for (let v100 = 0; v100 < 32; v100++) {
    v24["p" + v100] = v100;
}
v24[3];
try { v99["p"](Int16Array); } catch (e) {}
