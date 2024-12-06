const v1 = new WeakSet();
let v2 = 4294967295;
function f5() {
    Object.defineProperty(v1, "b", { writable: true, configurable: true, set: f5 });
    const v6 = v1.b;
    v1.b = WeakSet;
    const v7 = v2--;
    try { v6(v7, v7); } catch (e) {}
    return -2;
}
[-2096936160,-46773,-32084,90858361];
[-28128];
[2147483647,-1,4,-10,10,-1762500921,-682540531];
function f16(a17, a18) {
    return a18;
}
f16([6,9,546238442,-128,-61790,18583,-1526577038,128,31511,-28320], 9223372036854775807, ...[-1127973939,35096,39164,7,-15,256]);
