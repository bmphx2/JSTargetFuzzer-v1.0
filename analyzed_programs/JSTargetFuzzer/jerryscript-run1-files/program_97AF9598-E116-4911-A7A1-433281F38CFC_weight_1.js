function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = 6;
    t2.b = 6;
    this.d = 6;
}
const v3 = new F0();
new F0();
new F0();
for (let i9 = 0; i9 < 8; i9++) {
}
function f34(a35, a36) {
    const o44 = {
        ...a36,
        "c": v3,
        "b": 1073741824,
        "e": 1395614063,
        __proto__: a35,
        [3](a38, a39, a40) {
            try {
                super.m(a36, a38, a40, a38);
            } catch(e42) {
            }
            const v43 = this[8];
            a35 **= v43;
            return v43;
        },
    };
    return o44;
}
f34(10000, 512);
f34(-33749, f34);
f34(3, f34);
function F48(a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a51;
}
new F48(10000, 53825);
const v53 = new F48(512, 22165);
new F48(1073741824, 3);
delete v53[1509295508];
Math.sinh(F48);
Math.sinh(10000);
const v65 = 127 * 3;
10000 >> -1000000000.0;
Math.atan(v65);
