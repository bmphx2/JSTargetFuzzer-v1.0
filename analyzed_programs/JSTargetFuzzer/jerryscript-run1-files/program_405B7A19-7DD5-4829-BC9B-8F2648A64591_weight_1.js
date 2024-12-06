function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.c = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
const v6 = [v3,F1,v3,f0];
const v7 = [f0,v4,v6,v5];
[F1,f0,f0];
class C9 extends f0 {
    set g(a11) {
        const o14 = {
            "maxByteLength": 162,
        };
        const v16 = new SharedArrayBuffer(162, o14);
        new Uint8Array(v16);
        v16[v7];
        function f20() {
            return v5;
        }
        try { v6.at(162); } catch (e) {}
    }
    [-1];
    [v3];
}
const v22 = new C9();
new C9();
new C9();
for (let i27 = 0, i28 = 10; i27 < i28; i27++, i28--) {
    const v37 = Symbol.iterator;
    const o46 = {
        [v37]() {
            let v39 = 10;
            const o45 = {
                next() {
                    v39--;
                    const v43 = v39 == 0;
                    const o44 = {
                        "done": v43,
                        "value": v39,
                    };
                    return o44;
                },
            };
            return o45;
        },
    };
}
new Uint8ClampedArray(127);
new BigUint64Array(16);
new BigUint64Array(3010);
v22.h = 181;
try { v3.isNaN(C9, Uint8ClampedArray); } catch (e) {}
const v62 = new Uint32Array(181);
let v64 = BigUint64Array;
let v65 = new v64(1);
let v66 = 253;
[v66,,v64,v65] = v62;
try { v64["abs"](181, v66, v64); } catch (e) {}
new Uint16Array(v66);
for (let i79 = 0; i79 < 2; i79++) {
    const v85 = new Function("x");
    v85.name;
}
Function();
