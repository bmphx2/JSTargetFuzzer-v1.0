function f0() {
    const o15 = {
        valueOf(a5) {
            let v6;
            try { v6 = ("boolean").padEnd(a5, -47127, ...this, this); } catch (e) {}
            super.b = v6;
            try { a5(a5, this); } catch (e) {}
            let [,...v8] = "boolean";
            v8?.[3];
            return v6;
        },
        toString(a11) {
            const v12 = [this,-47127,this,257,257];
            [-47127,257,["boolean",v12,"boolean","boolean"],v12,this];
            return a11;
        },
    };
    return o15;
}
f0();
const v17 = f0();
const v18 = f0();
new Uint8Array(81);
const v27 = new Uint8ClampedArray(72);
const v30 = new Uint8Array(2991);
function f31(a32) {
    return v17;
}
class C33 extends f31 {
    [Uint8ClampedArray] = 72;
    static #g;
    [f0] = v18;
    3;
}
const v35 = [v18,72,72];
Reflect.apply(v27.fill, v30, v35);
