function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 1000;
    this.e = 1000;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v4,v5];
const v7 = [v5,v5,F0,v6];
const v8 = [v7];
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a15;
}
new F12(v8, 1073741824, v6);
new F12(v6, 1073741824, v7);
new F12(v7, -858955163, v6);
const v20 = [];
class C21 {
    valueOf(a23, a24) {
        const v25 = `
            RegExp.prototype ^= 0.9875862750480174;
            const t23 = v20.__proto__;
            delete t23?.d;
        `;
        eval(v25);
    }
}
const v32 = new C21();
async function f33(a34, a35) {
    return a34 /= C21;
}
f33(v32);
