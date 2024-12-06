function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = 65535;
    t2.b = 65535;
    this.d = 65535;
    this.c = 65535;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v4,v5,v5,v5];
[v5];
[F0,v5,v4,v4,v6];
new Int32Array(Int32Array);
new Int32Array(8);
new Uint16Array(0);
const o19 = {
};
const v21 = new Proxy(Int16Array, o19);
new Uint8Array(v21);
