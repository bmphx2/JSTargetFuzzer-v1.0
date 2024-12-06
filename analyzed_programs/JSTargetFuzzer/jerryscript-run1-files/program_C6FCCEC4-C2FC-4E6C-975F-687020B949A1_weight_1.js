function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 11;
    this.b = 1073741823;
    this.g = a6;
}
new F3(F3, 11);
const v8 = new F3(F3, 1073741823);
const v9 = new F3(v8, 1073741823);
const v10 = [11,v9,v9,F3];
[v8,11,F3,2147483649];
[v10,v9];
const v21 = new Array(10);
let v23 = 4096;
function f25(a26, a27, a28, a29) {
    const o39 = {
        "g": v23,
        ...a29,
        "e": a27,
        set b(a31) {
            function F32(a34, a35) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a34;
            }
            new F32(a29, 129);
            new F32(a28, a28);
            new F32(F32, 481111932);
        },
    };
    return o39;
}
let v40 = f25(v23, 481111932, 129, v21);
f25(10, 481111932, 10, f25);
f25(v40, v23, 481111932, v23);
v40.g;
try {
    let v44;
    try { v44 = v40.isSealed(); } catch (e) {}
    v40 = v44;
    v23 = v44;
} catch(e45) {
    e45[0] = e45;
    try { e45(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
