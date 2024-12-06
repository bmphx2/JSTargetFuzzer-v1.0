new WeakMap();
const v4 = new Uint16Array(128);
new Int16Array(256);
const v10 = new Uint8ClampedArray(1);
new Float64Array(1024);
new Uint16Array(7);
const v19 = new BigInt64Array(1024);
const v21 = new Uint8Array(Uint8Array, Uint8Array);
const v23 = new Int8Array();
const v26 = new Float64Array();
function f27() {
    return v26;
}
function f28(a29, a30, a31) {
    const o42 = {
        get e() {
            function F33(a35, a36, a37) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v38 = F33(64, this, v21);
            Object.defineProperty(this, 5, { writable: true, get: f28 });
            const v39 = new Float64Array(v19);
            const v40 = v39.byteLength;
            v38 = F33;
            try { a29(v40, v4, this); } catch (e) {}
            return v38;
        },
        [f27]: v23,
    };
    return o42;
}
const v43 = f28(64, v23, v21);
const v44 = f28();
const v46 = f27 !== v26 ? f27 : v26;
delete v10[v46];
[v46,Int8Array];
[f27,Uint16Array,WeakMap];
[128,BigInt64Array];
f28(v44, v23, v44);
v44[Symbol.source];
for (let v55 = 0; v55 < 5; v55++) {
    v43["p" + v55] = v55;
}
