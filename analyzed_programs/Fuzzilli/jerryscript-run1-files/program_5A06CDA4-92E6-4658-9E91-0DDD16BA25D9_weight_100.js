const v6 = [128,1000,12,0];
const v7 = [1843575390,-65535,-3,-9223372036854775807,-511605161,268435440,1073741825,2147483649];
const v8 = [0,1637374887,875376177,-2,65535];
function f9(a10, a11, a12) {
    const o16 = {
        set e(a14) {
            a14.toString = a14;
            try { new a14(this, v8, 16, a14, this); } catch (e) {}
            super.d = v8;
            a10[3772264794] = a11;
        },
        [a11]: a12,
        "b": 28961,
        [v6]: 0,
        "e": v8,
        16: a11,
        [a10]: v7,
        "d": a12,
        [28961]: a10,
        ...a12,
    };
    return o16;
}
const v17 = f9(v7, v6, v7);
const v18 = f9(v6, v8, v8);
const v19 = f9(v8, v6, v6);
function f20(a21, a22) {
    const o33 = {
        "d": a22,
        [16]: a21,
        "c": 2022700027,
        set h(a24) {
            let v25 = 0;
            while (v25 < 0) {
                let v28;
                try { v28 = new a24(v19, v18, v8, a24, a24); } catch (e) {}
                v18.__proto__ = v28;
                const v29 = [v25,v17,this,a24];
                const v30 = [v28,v29,v29];
                [a21,0,v30,v30];
                v25++;
            }
        },
    };
    return o33;
}
f20(64, 9223372036854775807);
f20(2022700027, 2022700027);
f20(9223372036854775807, 64);
const v40 = [-4.787122745317884,1e-15,0.159427829090815,-4.0,4.0];
const v41 = [-2.2250738585072014e-308,2.220446049250313e-16];
const v42 = [-2.0,8.244453298149473,383.34787466532,1.7976931348623157e+308,-1e-15,-1.7976931348623157e+308,0.6991827060942476,-1.6130826735195417e+308,4.0,3.878656741684596e+307];
function f43() {
    return v41;
}
const v44 = [2n,v40,v40,2n,-48013n];
const v45 = [1796068352n,f43,v44,v44];
[v42,v42,v40];
const v48 = new Date();
function F50(a52, a53) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a52;
}
function F54() {
    if (!new.target) { throw 'must be called with new'; }
    for (const v57 of v48) {
        let v58 = v57.__proto__;
        v58[1796068352n] <<= 9;
        function F59(a61, a62) {
            if (!new.target) { throw 'must be called with new'; }
            this.h = a61;
        }
        const v63 = new F59(2n, v45);
        v58 &= 9;
        this.__proto__ = v57;
        v63[F59] = 9;
        Date[v48] >>>= v57;
        new F59(2n, v45);
        new F59(1796068352n, v44);
        Object.defineProperty(v48, "c", { get: Date, set: Date });
        const v67 = Date + 9;
        9 === v67 ? 9 : v67;
    }
    this.e = 9;
    this.c = 9;
    [];
    const v73 = ([9])["unshift"]();
    for (; F50--;) {
        with (v73) {
        }
    }
}
const v76 = new F50(v48, F50);
const v77 = new F50(16, v76);
new F50(v77, Date);
new Int8Array(512);
new Uint32Array(10);
new BigInt64Array(407);
class C89 {
    h = C89;
}
