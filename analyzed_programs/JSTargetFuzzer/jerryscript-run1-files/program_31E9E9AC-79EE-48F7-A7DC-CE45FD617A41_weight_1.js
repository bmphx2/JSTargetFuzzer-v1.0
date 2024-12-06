const v1 = new Map();
const v2 = [v1];
const v3 = [Map,v2,v2];
const v4 = [v3];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a8;
    this.g = a8;
    this.a = v2;
}
const v9 = new F5(F5, v2);
const v10 = new F5(v1, v1);
new F5(v1, F5);
let v12 = 256;
const v14 = new Uint8ClampedArray(v12);
const v17 = new Uint8Array(1);
const v20 = new Float64Array(241);
function F25() {
    if (!new.target) { throw 'must be called with new'; }
}
const v27 = new F25();
class C28 extends F25 {
    constructor(a30, a31) {
        super();
        this.__proto__ = v27;
    }
}
new C28();
v12 = 4;
try { v10(Uint8Array, v17, v14, Map, v17); } catch (e) {}
const v35 = new Int16Array(255);
const v38 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f42(a43, a44) {
    const o71 = {
        174: a43,
        "c": v38,
        65536: a43,
        [v35]: v17,
        [4294967296]: v17,
        "g": 5,
        "f": v38,
        [a43]: v20,
        "e": v38,
        set f(a46) {
            let v47;
            try { v47 = a46(Int16Array, a46, a46, this); } catch (e) {}
            v9.b = v17;
            !v10;
            v14.byteLength = v47;
            const v52 = new Date();
            [12];
            v52.__proto__ = v35;
            v52.length = 1;
            function F55(a57, a58, a59, a60) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = v2;
                v9.e = 4294967296;
                this.c = Uint8Array;
            }
            new F55(v4, Uint8ClampedArray, v3, 2);
            new F55(v3, v47, v4, 2);
            new F55(a46, Float64Array, v47, v12);
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o71;
}
f42(5, 255);
const v73 = f42(255, 257);
f42(257, 255);
const v75 = new Uint8Array(257, 257, 255);
let v76;
try { v76 = v75.includes(v75); } catch (e) {}
Object.defineProperty(v73, 257, { enumerable: true, get: f42 });
for (let v77 = 0; v77 < 32; v77++) {
    v38["p" + v77] = v77;
}
v35[3];
try { v76["p"](Int16Array); } catch (e) {}
