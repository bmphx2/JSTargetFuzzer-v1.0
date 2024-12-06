function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 9007199254740992;
}
new F0();
new F0();
new F0();
new Int8Array(512);
new Float32Array(13);
new Uint16Array(4096);
function f18() {
}
function F19(a21, a22, a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
}
const v25 = new F19();
const o26 = {
    "deleteProperty": f18,
};
const v28 = new Proxy(v25, o26);
delete v28[108704231];
