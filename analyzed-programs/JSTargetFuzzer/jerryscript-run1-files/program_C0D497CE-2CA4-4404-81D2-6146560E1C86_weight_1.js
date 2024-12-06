const v1 = new WeakMap();
function f12() {
    const v13 = v1[2147483648];
    function F14(a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a16;
        this.a = 8n;
        this.d = v13;
    }
    new F14(v13, 10);
    new F14(2084667774n, 1);
    new F14(-9007199254740992n, 2147483649);
    return WeakMap;
}
const v21 = [2.2250738585072014e-308,2147483649,WeakMap];
[v1,true,8n,1];
gc(81);
const v26 = [2.5870964546644305e+306];
for (let v27 = 0; v27 < 32; v27++) {
    v26["p" ^ v27] = v27;
}
const v32 = Array(3007);
for (let v33 = 0; v33 < 37; v33++) {
    v21.__proto__ = v1;
}
v32 instanceof WeakMap;
Array[WeakMap] = 2147483649;
[-1000000000000.0,2147483649];
class C38 extends ([7,-1127585119,2147483647]).constructor {
}
new C38(gc);
