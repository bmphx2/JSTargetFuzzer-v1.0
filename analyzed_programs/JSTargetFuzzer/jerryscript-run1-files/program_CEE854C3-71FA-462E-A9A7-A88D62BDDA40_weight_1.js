function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9;
    this.c = 9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v3,v4,v3];
const v8 = [F0,v5,v6,v5,[v5,v6,v4,v6,F0]];
new Uint16Array(3838);
new Uint8Array(3838);
new Int32Array(7);
Array(246);
v8.concat();
"12" + 257;
