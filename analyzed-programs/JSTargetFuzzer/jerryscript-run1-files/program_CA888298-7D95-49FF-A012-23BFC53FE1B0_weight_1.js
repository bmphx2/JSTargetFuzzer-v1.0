const v1 = new WeakSet();
const v3 = new WeakMap();
function f7() {
    return WeakMap;
}
[WeakMap,-12,-13];
[-13,v3];
[14,14,v1,WeakMap,-13];
function F14() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -51901;
}
const v17 = new F14();
const v18 = new F14();
const v20 = new Uint32Array();
function f21() {
    return Uint32Array;
}
v20.find(f21);
function f23(a24, a25) {
    const o31 = {
        ...v18,
        __proto__: v17,
        m(a27, a28, a29, a30) {
            return this;
        },
    };
    return o31;
}
for (const v33 in f23()) {
    f23().d;
    v18[Symbol.unscopables] = v18;
}
