new Int16Array(15);
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a7;
}
const v8 = new F5(2480);
new F5(F5);
const v10 = new F5(Int16Array);
const v11 = new Uint32Array(2480);
const v14 = new Float32Array(76);
function f15(a16, a17, a18) {
    const o32 = {
        get f() {
            let v20;
            try { v20 = v14.toLocaleString(a16); } catch (e) {}
            const v22 = Symbol.iterator;
            const o31 = {
                [v22]() {
                    let v24 = 10;
                    const o30 = {
                        next() {
                            v24--;
                            const v28 = v24 == 0;
                            const o29 = {
                                "done": v28,
                                "value": v24,
                            };
                            return o29;
                        },
                    };
                    return o30;
                },
            };
            return v20;
        },
    };
    return o32;
}
f15(Float32Array, 76, 2480);
f15(f15(Float32Array, 15, 76), 2480, 76);
new Uint16Array(9);
const v44 = new Float64Array(256);
const v47 = new Int8Array(4096);
const v49 = [256,9,4096,[v47,Float64Array,256]];
[9,v44,Uint16Array,Uint16Array,v49];
new Array(127);
const v56 = new Uint32Array(181);
let v58 = BigUint64Array;
let v59 = new v58(1);
let v60 = 253;
[v60,,v58,v59] = v56;
let v62;
try { v62 = v58["abs"](181, v60, v58); } catch (e) {}
new Uint16Array(v60);
for (let i73 = 0; i73 < 2; i73++) {
    const v79 = new Function("x");
    v79.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
new Int32Array(16);
function f89(a90, a91, a92, a93) {
    const o94 = {
        [Uint8ClampedArray]: Uint16Array,
        "g": a90,
    };
    return o94;
}
f89(v10, "xX7QN", v47, v49);
f89(v8, v58, 127, v11);
f89(v10, v62, Uint16Array, v14);
new Int8Array(255);
Function();
