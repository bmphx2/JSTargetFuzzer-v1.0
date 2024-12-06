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
const t10 = (5).constructor;
t10(6n);
function f18(a19, a20, a21, a22) {
    return arguments;
}
new Int32Array(2);
new Uint16Array(6);
new Uint8Array(3518);
const v32 = new BigUint64Array();
const v33 = v32.values;
const o34 = {
    ...v33,
};
