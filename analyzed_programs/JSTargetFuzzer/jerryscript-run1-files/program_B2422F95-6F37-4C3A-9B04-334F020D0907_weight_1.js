function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.e = 4294967295;
}
new F0();
new F0();
new F0();
[1968846033,-12,499543138,-6,1073741824,-25329,10268,17646];
[1657330379,-1565987741,-65536,5,10,-1];
[2147483649,16,-34652,-25285,-7,-2147483649,-65537];
eval();
RangeError();
([-16,4]).pop();
Math.sign(268435439);
class C20 {
    constructor(a22, a23, a24, a25) {
        arguments && a23;
    }
}
function f28() {
}
const v32 = [-1000000.0,f28,-807.6596022618603,-1000000.0];
const v33 = [v32,-1000000.0,0.014069366437978514,v32];
const v34 = [v33,f28,-807.6596022618603];
function* f38(a39, a40, a41, a42) {
    try { a41.padStart(a39, "object"); } catch (e) {}
    const o44 = {
        "construct": f28,
        "ownKeys": f28,
        "preventExtensions": a41,
    };
    new Proxy(v34, o44);
    yield* "object";
    return a39;
}
f38(-807.6596022618603, "U7O", "U7O", v33);
