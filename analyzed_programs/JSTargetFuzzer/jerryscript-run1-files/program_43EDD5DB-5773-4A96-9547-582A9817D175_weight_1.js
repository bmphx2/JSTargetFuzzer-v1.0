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
Object.defineProperty(o21, "d", { configurable: true, enumerable: true, value: v12 });
const v23 = 1000000000000.0 || o21;
let v25 = 45927;
const v27 = --v25;
Math.tan(v25);
v25 << v27;
const v30 = v25 & v25;
const v31 = 1024 & v27;
const v32 = new Proxy(v12, o21);
const v34 = Symbol.search;
v32[v34] = v34;
let v36 = Float32Array;
const v37 = new v36(127);
new Int32Array(243);
new WeakSet();
new Float64Array(127);
const v48 = new BigInt64Array(3886);
const o52 = {
    set a(a50) {
    },
    get a() {
        return this;
    },
};
Uint8Array instanceof Float64Array;
v23.a ^= v31;
v48 || v27;
new Float64Array(v31, 3886, v30);
v25 & v27;
new Uint32Array(0);
v36 += v36;
let v60;
try { v60 = WeakSet(v20); } catch (e) {}
const v62 = [v60];
Reflect.apply(v37.sort, v37, v62);
try { v62.flat(); } catch (e) {}
[498897049];
[-57150070,-2147483647,-11,-19440739,257,-65536,5,-1371366486,-5,-4294967296];
[-9007199254740990,-530113451,4,-14,-45856,2];
