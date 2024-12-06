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
function f57(a58, a59) {
    a59 = a58;
}
new Promise(f57);
v22.h = 181;
try { v3.isNaN(C9, Uint8ClampedArray); } catch (e) {}
const v67 = new Uint32Array(181);
let v69 = BigUint64Array;
let v70 = new v69(1);
let v71 = 253;
[v71,,v69,v70] = v67;
try { v69["abs"](181, v71, v69); } catch (e) {}
new Uint16Array(v71);
for (let i84 = 0; i84 < 2; i84++) {
    v71[Symbol.search];
    Math.pow(v70, 7);
    Math.sign(i84);
    let v97 = i84 % i84;
    ++v97;
    const v99 = new Function("x");
    v99.name;
}
Function();
