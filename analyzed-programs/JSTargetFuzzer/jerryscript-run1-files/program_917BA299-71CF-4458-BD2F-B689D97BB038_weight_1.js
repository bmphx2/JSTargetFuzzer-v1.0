const v0 = [0.2574186569642174,-1.0,1e-15,-9.750145888591579,3.0,0.29986523268233145,-1000000.0,-5.319860846945041e+307,4.0,2.0];
const v1 = [-5.523956443490912e+307,-0.0];
const v2 = [1000000000000.0,4.0];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v2;
}
const v7 = new F3(v1, v0);
new F3(v0, v1);
const v9 = new F3(v0, v1);
const v10 = [v9,v9,v2,v2];
const v11 = [v10,v10,v9];
[v11,v9,F3,v2,v7,v11,v11];
const v15 = new Int32Array(1024);
const o26 = {
    p(a17, a18) {
        let v19;
        try {
        const t0 = 1024;
        v19 = t0(this, a18, a17, a18, v15);
        } catch (e) {}
        Reflect.apply(("object").charCodeAt, a18);
        v15[0] in v19;
        return Int32Array;
    },
};
try { o26.p(Int32Array, v15); } catch (e) {}
