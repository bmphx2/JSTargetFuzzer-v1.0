const v2 = new BigUint64Array(0);
const v5 = new Uint32Array(0);
let v8 = new Int8Array(257);
function f9(a10, a11) {
    const o26 = {
        set a(a13) {
            try { v5.includes(this); } catch (e) {}
            v5.length = 204;
            204 >> this;
            let {"buffer":v16,"e":v17,"length":v18,...v19} = v8;
            v8 >>>= v19;
        },
        __proto__: BigUint64Array,
        [a11](a21, a22) {
            try { v2.includes(a22, 204); } catch (e) {}
            a22 + 0;
            this.valueOf = this[v2];
            return a21;
        },
    };
    return o26;
}
f9(Int8Array, 204);
f9(257, 257);
f9(257, 257);
const v31 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
v31.copyWithin(v31);
