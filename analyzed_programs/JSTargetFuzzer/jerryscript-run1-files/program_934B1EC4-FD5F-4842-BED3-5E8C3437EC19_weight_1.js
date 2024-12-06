function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 9;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [v4,v5,v5,v3];
const v7 = [v5,v5,F0,v3];
const v8 = [v7,v6];
[v7,v5,F0,v5,[v5,v8,v4]];
[F0,v8];
new Int32Array(2);
new Uint16Array(6);
new Uint8Array(3518);
const v22 = new BigUint64Array();
const v23 = v22.values;
const o24 = {
    ...v23,
};
