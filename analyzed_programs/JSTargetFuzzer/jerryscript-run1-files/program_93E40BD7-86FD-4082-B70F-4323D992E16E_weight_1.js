function f0() {
}
const v1 = [f0,f0,f0,f0];
const v2 = [v1];
const v3 = [f0,v2,v1];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v3;
}
const v8 = new F4(v1, v3);
const v9 = new F4(v8, v3);
new F4(F4, v2);
const v11 = [v3,v9];
const v12 = [v11,f0];
const v13 = [v12,v9,v11,v9,v11];
const v14 = /L(?:ab)+/gim;
const v15 = /[(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10]/diu;
const v16 = /o(x)(x)(x)(x)(x)(x)(x)(x)(x)(x)\10?/dvm;
if (v13) {
} else {
    function F20(a22, a23, a24) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = v15;
        this.c = a23;
    }
    new F20(v14, v11, v11);
    new F20(v16, v11, v12);
    new F20(v16, v2, v2);
}
