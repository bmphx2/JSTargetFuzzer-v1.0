function f0() {
}
class C1 extends f0 {
    static {
        let v3;
        try { v3 = this.seal(f0, this, f0); } catch (e) {}
        let [v4,,v5,v6] = v3;
    }
    static {
        [-907186.6456484135,-644.3233696435332,-0.0,-5.0,340.2621303807655,5.0,-1.2252782677829443e+308];
        [-440.9636356473892,0.4383444539428497,1000000000000.0,-7.8168744638452665,-3.0,-0.0,0.5296398057735168];
        [-789.3408595039322,-350403.70767971396,1.0,-3.0,-9.31070117346698,-867095.2461043389,-2.220446049250313e-16,5.760625991887638,2.2250738585072014e-308];
    }
    d = f0;
    static #c = f0;
    #h;
}
new C1();
const v12 = new C1();
const v13 = new C1();
const v19 = new Int8Array(460);
new Float64Array(10);
new Uint8Array(3);
function f26(a27, a28, a29) {
    let v30;
    try { v30 = a28(Float64Array, v12, a29, 1835606358n, a29); } catch (e) {}
    v19[5] = v30;
    function F31(a33, a34, a35, a36) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a34;
    }
    new F31(9n, v13, -32207n, v30);
    const v38 = new F31(a28, v12, 1835606358n, 460);
    new F31(9n, C1, C1, v38);
    return a29;
}
f26(10, 10, 460);
