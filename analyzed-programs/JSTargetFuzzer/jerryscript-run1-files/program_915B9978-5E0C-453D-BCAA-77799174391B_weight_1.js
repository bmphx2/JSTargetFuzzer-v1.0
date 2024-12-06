function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = this;
    this.f = 46164;
}
new F0();
const v4 = new F0();
new F0();
new Uint8Array(2);
new Int16Array(0);
new Uint8Array(3245);
new Uint8ClampedArray(9);
new Float64Array(v4);
new Uint8Array(512);
function F24() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 1024;
    this.a = 1024;
    function f27() {
        return Uint8Array;
    }
    new Uint8Array(235);
    new Uint32Array(4);
    new Uint8Array(1000);
}
const v37 = new F24();
new F24();
const v39 = new F24();
[1801814284,v39,1801814284,v37];
[v39];
[-2,-2];
[Infinity,228711.8701669043,1000.0,0.6549688747910699];
[0.7717665177211909,-838.3936909463185,-0.0];
const v48 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o49 = {
};
const v51 = new Proxy(v48, o49);
const o52 = {
};
new Proxy(v51, o52);
try { F24(); } catch (e) {}
o49.a = v37;
