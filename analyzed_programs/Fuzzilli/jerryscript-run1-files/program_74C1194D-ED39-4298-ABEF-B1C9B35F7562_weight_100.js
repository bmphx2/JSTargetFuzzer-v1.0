const v1 = new WeakMap();
class C2 extends WeakMap {
    get a() {
        const v8 = [42916432,WeakMap];
        Reflect.apply(v1.set, v1, v8);
        return WeakMap;
    }
    h = v1;
    #d;
}
new C2();
new C2();
new C2();
new WeakSet();
new Uint8Array(2288);
new Float32Array(16);
const v30 = new BigInt64Array(1000);
v1[v30];
