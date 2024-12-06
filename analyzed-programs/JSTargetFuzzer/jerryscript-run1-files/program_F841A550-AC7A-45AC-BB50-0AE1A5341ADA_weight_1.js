function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 59624n;
    this.d = "FBD";
}
const v10 = new F6(4n, 4n);
const v11 = new F6(4n, 59624n);
const v12 = new F6(59624n, 4n);
function f13(a14, a15, a16) {
    const o29 = {
        ...v12,
        set a(a18) {
            const v20 = Symbol.g;
            this[v20] = v20;
        },
        ...v11,
        get d() {
            const o24 = {
                "maxByteLength": 514814290,
            };
            const v26 = new SharedArrayBuffer(10, o24);
            new Uint16Array(v26);
            return v10;
        },
    };
    return o29;
}
f13(f13, "undefined", "undefined");
f13(f13, "FBD", "boolean");
f13(4n, "FBD", "FBD");
const v38 = new Int16Array(19);
const v41 = new Uint32Array(3);
new Int8Array(1700);
const o45 = {
};
const v47 = new Proxy(v41, o45);
let v49;
try { v49 = v47["valueOf"](Uint32Array, Uint32Array, v47, v41); } catch (e) {}
const v50 = [v49,-36134n,v49,Uint32Array];
[v47,1700,v50,v38,v50];
const v52 = [-65536n];
try { v49(v52); } catch (e) {}
