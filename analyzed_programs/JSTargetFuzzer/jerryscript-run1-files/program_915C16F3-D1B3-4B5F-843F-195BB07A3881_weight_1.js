const v3 = [992.8042074437715,-53.22282882889647,-6.46888722357242,1000000.0,-9.792725739616209e+307,-2.0,0.6799536982439116,-605166.430039607];
const v4 = [1000.0,-1000.0,-1000.0,-770.0302679404274,5.0,1000000.0,0.5675929329954712,1.7976931348623157e+308];
const v5 = [-751922.5187651664,-0.3443180241204242,NaN,-2.220446049250313e-16,0.7372191240271223,-383.3512386525035,1.512533352521741e+308];
[v5,4087n,859112468n,4087n];
[859112468n,v4,[v3,v5],v5];
const v11 = new Uint32Array(128);
const v14 = new Uint8Array(1638);
new BigInt64Array(1071);
try {
    new Uint32Array(4087n, 1071, ...v3, ...v14, ...v11);
} catch(e19) {
    try { e19.toString(4087n); } catch (e) {}
} finally {
    v14.buffer;
}
const v24 = new Array(10);
let v26 = 4096;
function f28(a29, a30, a31, a32) {
    const o42 = {
        "g": 129,
        ...v11,
        "e": a31,
        set b(a34) {
            function F35(a37, a38) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a37;
            }
            new F35(a32, 129);
            new F35(a31, a31);
            new F35(F35, 481111932);
        },
    };
    return o42;
}
let v43 = f28(v26, 481111932, 129, v24);
f28(10, 481111932, 10, f28);
f28(v43, v26, 481111932, v26);
v43.g;
try {
    let v47;
    try { v47 = v43.isSealed(); } catch (e) {}
    v43 = v47;
    v26 = v47;
} catch(e48) {
    e48[0] = e48;
    try { e48(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
