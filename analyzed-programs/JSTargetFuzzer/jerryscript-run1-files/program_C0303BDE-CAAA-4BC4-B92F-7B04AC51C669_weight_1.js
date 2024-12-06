new Float32Array(622);
new Float32Array(10);
new Int8Array(1209);
const v14 = [-38216];
const v15 = [v14,v14,v14];
const v17 = new Int16Array(v14);
function f18(a19, a20) {
    const v21 = v17[-1];
    Object.defineProperty(v21, v15, { writable: true, value: v21 });
    return v15;
}
try { v14.forEach(f18); } catch (e) {}
new Int16Array(2491);
new BigInt64Array(254);
new Int8Array(9);
const v32 = new Array(10);
let v34 = 4096;
function f36(a37, a38, a39, a40) {
    const o50 = {
        "g": v34,
        ...a40,
        "e": a38,
        set b(a42) {
            function F43(a45, a46) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a45;
            }
            new F43(a40, 129);
            new F43(a39, a39);
            new F43(F43, 481111932);
        },
    };
    return o50;
}
let v51 = f36(v34, 481111932, 129, v32);
f36(10, 481111932, 10, f36);
f36(v51, v34, 481111932, v34);
v51.g;
try {
    let v55;
    try { v55 = v51.isSealed(); } catch (e) {}
    v51 = v55;
    v34 = v55;
} catch(e56) {
    e56[0] = e56;
    try { e56(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
