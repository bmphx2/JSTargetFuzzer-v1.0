function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 9007199254740992;
    this.f = 9007199254740992;
    this.e = 9007199254740992;
}
new F0();
const v4 = new F0();
new F0();
function f9() {
    return v4;
}
const v13 = [];
function f16() {
    return -4294967295;
}
const v19 = new Uint16Array(2643);
const v20 = new Uint16Array();
v13["concat"](1, v20);
v19.sort(f16);
