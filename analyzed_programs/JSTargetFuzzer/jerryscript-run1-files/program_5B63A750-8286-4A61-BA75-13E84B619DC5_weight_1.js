const v0 = [];
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.d = v0;
}
new F1();
new F1();
new F1();
new Uint16Array(744);
new Int8Array(8);
new Uint16Array(3146);
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    const v21 = new Uint8Array();
    gc(v21);
}
new F18();
new F18();
