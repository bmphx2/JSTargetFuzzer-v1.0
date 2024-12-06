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
v12 = 4;
try { v10(Uint8Array, v17, v14, Map, v17); } catch (e) {}
const v27 = new Int16Array(255);
const v30 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f34(a35, a36) {
    const o63 = {
        174: a35,
        "c": v30,
        65536: a35,
        [v27]: v17,
        [4294967296]: v17,
        "g": v20,
        "f": v30,
        [a35]: v20,
        "e": v30,
        set f(a38) {
            let v39;
            try { v39 = a38(Int16Array, a38, a38, this); } catch (e) {}
            v9.b = v17;
            !v10;
            v14.byteLength = v39;
            const v44 = new Date();
            v44.__proto__ = [12];
            v44.length = 1;
            function F47(a49, a50, a51, a52) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = v2;
                this.e = 4294967296;
                this.c = Uint8Array;
            }
            new F47(v4, Uint8ClampedArray, v3, 2);
            new F47(v3, v39, v4, 2);
            new F47(a38, Float64Array, v39, v12);
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o63;
}
f34(5, 255);
const v65 = f34(255, 257);
f34(257, 255);
const v67 = new Uint8Array(257, 257, 255);
let v68;
try { v68 = v67.includes(v67); } catch (e) {}
Object.defineProperty(v65, 257, { enumerable: true, get: f34 });
for (let v69 = 0; v69 < 32; v69++) {
    v30["p" + v69] = v69;
}
v30[3];
try { v68["p"](Int16Array); } catch (e) {}
