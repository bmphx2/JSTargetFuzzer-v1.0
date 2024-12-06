function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -7;
    this.g = -7;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    const o21 = {
        __proto__: a8,
        "g": F0,
        3479828204: a7,
        set c(a10) {
            this[1024];
            super.h = a7;
        },
        get b() {
            const v16 = super.g;
            for (let v17 = 0; v17 < 32; v17++) {
                this["p" + v17] = v17;
            }
            v5[2] = v5;
            let v20;
            try { v20 = new v16(); } catch (e) {}
            return v20;
        },
    };
    return o21;
}
f6(v3, v5);
f6(v5, v4);
f6(v4, v3);
new Float32Array(1505);
new Int32Array(16);
new Uint8ClampedArray(190);
new Uint16Array(9);
const v42 = new Float64Array(256);
const v45 = new Int8Array(4096);
const v47 = [256,9,4096,[v45,Float64Array,256]];
[9,v42,Uint16Array,Uint16Array,v47];
new Array(127);
const v54 = new Uint32Array(181);
let v56 = BigUint64Array;
let v57 = new v56(1);
let v58 = 253;
[v58,,v56,v57] = v54;
const o59 = {
};
new Proxy(Int8Array, o59);
try { v58(190, f6); } catch (e) {}
try { v56["abs"](181, v58, v56); } catch (e) {}
new Uint16Array(v58);
for (let i75 = 0; i75 < 2; i75++) {
    const v81 = new Function("x");
    v81.name;
}
638046528 + "x";
new Uint8ClampedArray(9);
const t59 = "2147483648";
t59.toString = Array;
v47[Proxy] = -1321922607;
new Int32Array(16);
new Int8Array(255);
Function();
