class C3 {
    static [-2.0];
    toString(a5, a6) {
        for (let v7 = 0; v7 < 32; v7++) {
            const t4 = "b";
            t4["p" + v7] = v7;
        }
        return a5;
    }
    static p(a11, a12) {
        a11[a12 > a11] = -2.0;
        try { new a11(); } catch (e) {}
        return "b";
    }
}
const v15 = new C3();
const v16 = new C3();
const v17 = new C3();
function F18(a20, a21, a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -2.0;
    this.d = v16;
    this.g = -2.0;
}
const v24 = new F18(v15, v15, v17, v17);
const v25 = new F18(v17, v16, v16, v17);
const v26 = new F18(v17, v25, v17, -1);
const v27 = ["b",v26,v24,F18];
[F18,-1,C3,"b"];
[v27,F18];
const v33 = [0.7232674142291522,701118.1621341272,-Infinity,-9.497028516865004,9.911164307375006e+307,162030.69801292918,-1.3184861223005049e+308,5.860617559714003];
v33[1073741824] = v33;
let v37 = new Uint32Array(1024);
const v38 = v37++;
const v39 = 1024 >> 1024;
v33[v38] = 4;
v33.length = v39;
