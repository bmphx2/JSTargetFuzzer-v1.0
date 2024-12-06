const v3 = [-27740,-27740,-1481815720,16453,-27740];
const v4 = [v3];
const v5 = [v3,v4,v4,-27740,16453];
const v6 = [-27740];
const v7 = [v5,v4,16453,v3];
[v7,v6,-1481815720];
function f9(a10) {
    return a10;
}
class C11 extends f9 {
    static [16453] = v6;
}
function F12(a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a15;
    this.d = v5;
    a15[a14] -= a15;
    Object.defineProperty(this, "c", { writable: true, configurable: true, value: this });
    v5[1] = v3;
    this.c = -1481815720;
}
new F12(-27740, v6);
new F12(-1481815720, v7);
new F12(16453, v5);
function f23(a24, a25, a26, a27) {
    const o30 = {
        set g(a29) {
        },
        ...a24,
    };
    return o30;
}
const v31 = f23();
f23(2, v31);
v31.g **= 2;
