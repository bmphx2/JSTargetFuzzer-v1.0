new Int8Array(5);
new Uint8Array(10);
new Float64Array(5);
function F12() {
    if (!new.target) { throw 'must be called with new'; }
}
const v14 = new F12();
Math.fround();
Math.min(4.0);
v14 <= F12;
