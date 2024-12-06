const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.b = v0;
    this.d = v0;
}
new F1();
const v4 = new F1();
new F1();
const v7 = new WeakMap();
const v9 = new WeakSet();
function f13() {
    return v0;
}
const o20 = {
    valueOf() {
        v4.e = v9;
        new f13(v7, 184.915255270947, delete v4[-1.0], WeakMap);
        return -1.234465294929955e+308;
    },
};
v0[v0] = F1;
v0[6] = v4;
