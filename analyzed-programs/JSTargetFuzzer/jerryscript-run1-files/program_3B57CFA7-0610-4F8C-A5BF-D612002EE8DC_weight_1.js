const v1 = new WeakSet();
const v2 = [WeakSet,WeakSet,v1];
let v3 = [WeakSet,WeakSet,v2];
const v4 = [v3,v3,v3,v1];
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9) {
        return this;
    }
    class C10 extends f8 {
        static c;
        static [v4] = F5;
    }
    this.e = v1;
}
const v11 = new F5(v2);
new F5(v3);
new F5(v4);
const v19 = new Uint32Array(181);
let v21 = BigUint64Array;
let v22 = new v21(1);
let v23 = 253;
[v23,,v21,v22] = v19;
try { v21["abs"](181, v23, v21); } catch (e) {}
new Uint16Array(v23);
for (let i36 = 0;
    (() => {
        const v37 = typeof i36;
        v37 === "string";
        v3 >>= v2;
        v4[v37] = v11;
        return i36 < 2;
    })();
    i36++) {
    const v45 = new Function("x");
    v45.name;
}
Function();
