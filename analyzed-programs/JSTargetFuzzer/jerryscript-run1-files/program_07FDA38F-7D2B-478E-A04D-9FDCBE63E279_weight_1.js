const v2 = new Uint8Array(0);
const v5 = new Float32Array(889);
const v8 = new Uint8Array(7);
function f9(a10, a11, a12, a13) {
    const o20 = {
        ...v2,
        get g() {
            v5[this] = v8;
            try { a13(); } catch (e) {}
            let v16 = `
                a13.__proto__ = a13;
                let v17 = v16 * 0;
                v17 = a12;
                ({"h":v16,} = a13);
            `;
            eval(v16);
            return Uint8Array;
        },
        ...Uint8Array,
    };
    return o20;
}
const v21 = f9(889, 7, 889, v5);
v21[0] = 889;
function F22(a24, a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a24;
    this.a = a26;
}
new F22(7, 7, 7, 0);
new F22(0, 0, 7, 7);
new F22(889, 0, 889, 7);
f9(0, 889, f9(0, 0, 0, 0), Uint8Array);
const v38 = new Uint32Array(181);
let v40 = BigUint64Array;
let v41 = new v40(1);
let v42 = 253;
[v42,,v40,v41] = v38;
try { v40["abs"](181, v42, v40); } catch (e) {}
new Uint16Array(v42);
-4294967295 == 0;
function f51() {
    return v21;
}
v8[9] = v38;
for (let i59 = (() => {
        try { v42(); } catch (e) {}
        const t1 = "x";
        t1.length &= 16;
        function f58() {
            return Uint16Array;
        }
        return 0;
    })();
    i59 < 2;
    i59++) {
    const v65 = new Function("x");
    v65.name;
}
Function();
