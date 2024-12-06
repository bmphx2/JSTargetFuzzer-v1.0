function f0() {
    const o9 = {
        "h": -13,
        set a(a5) {
            let v4 = this;
            v4 |= v4;
        },
        1044619679: "NaN",
        268435440: 40864,
        [-13]: 40864,
    };
    return o9;
}
const v10 = f0();
const v11 = f0();
const v12 = f0();
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a15;
}
new F13(v10);
new F13(v11);
const v18 = new F13(v12);
function f19() {
    return v18;
}
const v28 = new Int16Array(19);
const v31 = new Uint32Array(64);
new Int8Array(1700);
const o35 = {
};
const v37 = new Proxy(v31, o35);
let v39;
try { v39 = v37["valueOf"](Uint32Array, Uint32Array, v12, v31); } catch (e) {}
[v37,1700,[v39,-36134n,v39,Uint32Array],v28,v37];
[-13n];
try { v39(v37); } catch (e) {}
