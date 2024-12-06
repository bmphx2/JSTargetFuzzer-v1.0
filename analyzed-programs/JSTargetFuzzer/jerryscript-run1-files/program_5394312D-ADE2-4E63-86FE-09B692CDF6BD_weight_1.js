function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 59624n;
    this.d = "arguments";
}
const v10 = new F6(4n, 4n);
const v11 = new F6(4n, 59624n);
const v12 = new F6(59624n, 4n, 59624n, "boolean");
function f13(a14, a15, a16) {
    const o29 = {
        ...v12,
        set a(a18) {
            const v20 = eval.g;
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
f13(f13, "arguments", "boolean", "undefined", 4n, 4n);
f13(4n, "arguments", "arguments");
v11.length = 1;
const v42 = new Uint16Array(19);
const v45 = new Uint32Array(3);
new Int8Array(1700);
const o49 = {
};
const v51 = new Proxy(v45, o49);
let v53;
try { v53 = v51["valueOf"](Uint32Array, Uint32Array, v51, v45); } catch (e) {}
const v54 = [v53,-36134n,v53,Uint32Array];
[v51,1700,v54,v42,v54];
const v56 = [-65536n];
try { v53(v56); } catch (e) {}
