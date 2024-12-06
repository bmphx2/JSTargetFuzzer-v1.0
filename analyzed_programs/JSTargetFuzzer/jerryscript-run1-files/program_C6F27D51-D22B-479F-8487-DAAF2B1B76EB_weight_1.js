const v1 = new WeakSet();
let v2 = 32976n;
typeof v2 === "symbol";
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a10;
}
new F8(23294n, v2, 23294n, -37626n);
new F8(-37626n, 23294n, -37626n, -37626n);
new F8(-37626n, 23294n, 23294n, -37626n);
function f17(a18) {
    const o23 = {
        "d": v2,
        ...v1,
        __proto__: v1,
        ...v1,
        get h() {
            this.valueOf = -37626n;
            v1[9];
            v2 = -37626n;
            let {"b":v21,"d":v22,} = this;
            return v21;
        },
    };
    return o23;
}
f17(23294n);
f17(23294n);
f17(v2);
const v35 = new Int16Array(65535);
const v38 = new Uint32Array(64);
new Int8Array(1700, 65535);
const o42 = {
};
const v44 = new Proxy(v38, o42);
let v46;
try { v46 = v44["valueOf"](Uint32Array, Uint32Array, v44, v38); } catch (e) {}
const v47 = [v46,-36134n,v46,Uint32Array];
[v44,1700,v47,v35,v47];
const v49 = [-65536n];
try { v46(v49); } catch (e) {}
