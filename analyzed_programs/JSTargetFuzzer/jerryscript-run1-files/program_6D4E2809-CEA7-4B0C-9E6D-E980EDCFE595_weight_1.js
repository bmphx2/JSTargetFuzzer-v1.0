function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -2;
    this.c = -2;
}
const v3 = new F0();
new F0();
const v5 = new F0();
const v12 = [-12,-65535];
const v13 = [v3,"5",v12,-12,257];
[F0,v13,v13,"5",F0];
let v15 = undefined;
const o18 = {
    get search() {
        return v15 = arguments;
    },
    "a": 257,
    ...v5,
    "c": -65535,
    "f": v3,
    "b": "object",
};
o18.c;
v12[10] = 257;
new Uint8ClampedArray(3691);
new Float32Array(1449);
new Int8Array(554);
const o29 = {
    ...v3,
};
