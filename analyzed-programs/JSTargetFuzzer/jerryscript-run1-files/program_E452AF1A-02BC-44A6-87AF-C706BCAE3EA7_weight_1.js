const v1 = new WeakMap();
function f2() {
    return WeakMap;
}
function f3(a4, a5) {
    const o14 = {
        ...a5,
        valueOf(a7, a8) {
            try { new a8(); } catch (e) {}
            try { v1.delete(a7); } catch (e) {}
            super.e = v1;
            v1["get"](this);
            return a5;
        },
        ...a4,
        "h": WeakMap,
        "c": v1,
    };
    return o14;
}
const v15 = f3(f2, f3);
f3(v1, WeakMap);
f3(v15, v1);
class C18 extends f2 {
    static valueOf(a20, a21, a22, a23) {
        a22.toString = a20;
        return a23;
    }
    f;
    p(a28, a29) {
        super.f;
        class C31 {
            static b;
            d = f3;
            b = a29;
            c;
        }
        new C31();
        new C31();
        const v34 = new C31();
        return v34;
    }
}
new C18();
new C18();
new C18();
new Int32Array(256);
new Uint16Array(6);
new Int32Array(231);
[1073741823,-16,15,4096];
const v48 = [9007199254740992,2986,-2132228841,-2];
const v49 = [1374742841];
function f51(a52, a53, a54) {
    arguments.callee;
    return arguments;
}
f51(f51, v48, f51, f51, v49);
let v65 = -1;
const v67 = [v65,999197796,v65,999197796,999197796];
let v68 = [v65,v67,-1491302985,v67];
[v68,v68];
class C73 {
    valueOf(a75, a76) {
        let v77;
        try { v77 = new a76(a75, -1491302985, this); } catch (e) {}
        ({"b":v68,"e":a75,} = v77);
        this[512] = 512;
        return a75;
    }
    static n(a79, a80, a81, a82) {
        try {
            super.p();
        } catch(e84) {
        }
        return this;
    }
}
const v85 = new C73();
new C73();
[-911.1526404589405,1e-15];
[0.4729322601549657,-224.90380400742652,NaN];
[-1000000.0,8.398137877083811e+307,1000000000000.0,-1000000000000.0,0.6500829403503308,1.7502414239883888e+308,-3.0];
try { v68["o"](f51, "o"); } catch (e) {}
const v92 = new C73();
v65 >>= -1491302985 >>> v65;
async function f94(a95, a96) {
    g = 999197796;
    a95 /= C73;
    await 512;
    return C73;
}
const v102 = f94(v92, 1403512483);
delete v85[250];
v102[-1491302985];
