function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 4096;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
[F0];
[v3,F0,v4,v5];
[F0,v4,v3];
new Int32Array(3953);
new Uint32Array(1);
new Int8Array(2);
new Int16Array(128);
new Int8Array(180);
new Uint8ClampedArray(16);
[-536870912,1073741825,-7,-33356,-65537,10000,-289298025,-536870912,-5,-9007199254740991];
[-6,-2147483648,538064741,3];
[9,-63381,-13,-999662425,127,36139,-42263,-256,-1024];
