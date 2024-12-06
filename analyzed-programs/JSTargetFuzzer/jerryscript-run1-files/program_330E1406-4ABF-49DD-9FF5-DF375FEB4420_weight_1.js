function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 0;
    this.c = 0;
}
new F0();
new F0();
new F0();
function f14(a15) {
    return arguments;
}
const v17 = f14(5, Uint32Array);
function f18(a19, a20) {
    const o21 = {
        ...v17,
    };
    return o21;
}
f18();
f18();
function F24(a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    const v29 = [-16,4];
    try { v29.sort(45103); } catch (e) {}
    this.g = a26;
    this.h = a26;
}
new F24(495.98311020404003, -1000000000000.0);
new F24(-1000000000000.0, 495.98311020404003);
new F24(495.98311020404003, 1.7976931348623157e+308);
Array()["fill"]();
