function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 898236554;
    this.e = a5;
    this.c = a5;
}
const v6 = new F3(1);
const v7 = new F3(-5);
new F3(898236554);
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a16;
}
new F13(v7, 536870888);
new F13(v7, -50617);
const v19 = new F13(v7, -50617);
const v20 = delete v7[62];
v19.f = 1;
Object.defineProperty(v6, 1073741823, { configurable: true, value: v20 });
v6.f ^= 536870888;
function f21(a22) {
    return a22;
}
class C23 extends f21 {
    #d = v20;
    b;
    #e = -5;
    static #g;
}
