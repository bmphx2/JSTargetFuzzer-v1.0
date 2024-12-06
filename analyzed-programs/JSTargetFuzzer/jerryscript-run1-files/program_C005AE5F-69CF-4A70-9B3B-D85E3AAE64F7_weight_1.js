function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 4;
    this.b = a5;
}
new F3(-15);
new F3(4);
new F3(4);
new WeakMap();
function F11() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = -536870912;
    for (const v14 in this) {
        v14.search();
    }
}
new F11();
const v20 = [];
v20.includes(v20, v20);
