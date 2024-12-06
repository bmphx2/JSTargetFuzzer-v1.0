const v0 = [];
function f1() {
    const o10 = {
        __proto__: v0,
        ...v0,
        get d() {
            function F3(a5, a6) {
                if (!new.target) { throw 'must be called with new'; }
                this.h = this;
                this.a = a6;
            }
            const v7 = new F3(v0, F3, this, this);
            const v8 = new F3(v7, v7);
            new F3(this, v8);
            return v7;
        },
        "g": v0,
        "c": v0,
    };
    return o10;
}
const v11 = f1();
const v12 = f1();
const v13 = f1();
const v14 = [1000.0,5.726285569407277e+307,-1e-15,Infinity,-1.5970667016431723e+308];
[629.6822384101931,0.01657978920322778,-234132.44985622633];
const v16 = [-1.7976931348623157e+308,1000000000000.0,5.0,1.7976931348623157e+308];
function f20(a21, a22, a23) {
    const o36 = {
        __proto__: a22,
        "NaN": v0,
        ...v0,
        [a21](a25, a26) {
            const v29 = Math.exp(-6);
            const v30 = ++a22;
            Math.sinh(v30);
            const v32 = !-6;
            v29.tanh(v30);
            v32 || a22;
            a22++;
            return v11;
        },
    };
    return o36;
}
f20(f20(f20(v16, v12, v12, v13, v0, v14), v11, v11), v13, v12);
Function();
