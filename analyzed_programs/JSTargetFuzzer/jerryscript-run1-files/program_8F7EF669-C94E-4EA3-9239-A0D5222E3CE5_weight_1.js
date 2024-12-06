class C3 {
    static set e(a5) {
        this.c = a5;
        function F6(a8) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = a8;
            this.e = this;
        }
        new F6(1024);
        new F6(F6);
        new F6(1024);
    }
}
const v12 = new C3();
new C3();
new C3();
const v20 = new Uint8Array(2);
const o21 = {
};
const v23 = new Proxy(v12, o21);
const v25 = Symbol.search;
v23[v25] = v25;
let v27 = Float32Array;
const v28 = new v27(127);
new Int32Array(243);
new WeakSet();
new Float64Array(127);
new BigInt64Array(3886);
new Uint32Array(0);
v27 += v27;
let v43;
try { v43 = WeakSet(v20); } catch (e) {}
const v45 = [v43];
Reflect.apply(v28.sort, v28, v45);
try { v45.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
