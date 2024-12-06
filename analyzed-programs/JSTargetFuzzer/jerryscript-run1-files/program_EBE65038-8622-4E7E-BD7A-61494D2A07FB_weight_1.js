new Int16Array(127);
new Float64Array(11);
new Uint8ClampedArray(256);
function f9() {
    return 11;
}
function F10(a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a13;
}
new F10(127, 256);
new F10(127, 11);
new F10(127, 256);
const v22 = new Int16Array(19);
const v25 = new Uint32Array(64);
new Int8Array(1700);
const o29 = {
};
const v31 = new Proxy(v25, o29);
let v33;
try { v33 = v31["valueOf"](Uint32Array, Uint32Array, v31, v25); } catch (e) {}
const v34 = [v33,Uint8ClampedArray,v33,Uint32Array];
[v34,1700,v34,v22,v34];
const v36 = [-36134n];
try { v33(v36); } catch (e) {}
