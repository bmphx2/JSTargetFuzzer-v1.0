function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = -10;
    this.g = -10;
}
const v3 = new F0();
new F0();
const v5 = new F0();
class C6 extends F0 {
    set h(a8) {
        Object.defineProperty(v5, "e", { writable: true, enumerable: true, value: a8 });
        v3.h = v5;
    }
    get d() {
        this.length = 2;
        const v14 = v3 * v3;
        v3[v14] += 2;
        return v14;
    }
}
const v15 = new C6();
new C6();
new C6();
function f18() {
    return F0;
}
new BigInt64Array(10);
new Uint32Array(2543);
const v27 = new BigInt64Array(3);
v15.__proto__ = v27;
v5 >>> v27;
/JG/vygsid;
const v30 = /xyz{93}/vyg;
const v31 = /(?<!)[^Fa[a]la(?:b)[B]?]/ugmsd;
v30[93] = C6;
[1000000.0,0.0,NaN,1000000.0];
[1000000000.0,-3.311448483146056e+307,-2.9489854467475096,0.9793533095570781,1.0];
[2.2158360030996516,-1000000000000.0,-1000000000000.0];
v31[1938746584];
