function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = -27524;
}
new F0();
new F0();
new F0();
new Uint16Array(10);
new Int8Array(16);
new Int8Array(124);
([[]]).every(parseFloat);
