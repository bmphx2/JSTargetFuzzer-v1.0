function f0() {
}
const v1 = [f0];
const v2 = [v1,f0];
const v3 = [v2,f0,f0,f0,v2];
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
    v2.a = v1;
    this.b = v2;
    this.f = v2;
}
const v7 = new F4(v3);
new F4(F4);
new F4(v2);
const v11 = [[v1,f0,v7,v2,v2],F4];
[v2,v11,v11];
function f13(a14, a15) {
    return a14.o(a15, a14, a15, f13);
}
const v18 = new Promise(Promise);
const v20 = Array(v18);
const v23 = new Uint32Array(2334);
v20[v23.join(v18)];
