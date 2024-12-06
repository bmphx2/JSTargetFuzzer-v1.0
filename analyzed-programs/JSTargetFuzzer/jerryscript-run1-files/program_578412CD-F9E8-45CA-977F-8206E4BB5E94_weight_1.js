function f3(a4, a5) {
    const o23 = {
        "g": a4,
        get d() {
            let v7;
            try { v7 = new this(a4, 48373n, this, a5, a4); } catch (e) {}
            try { v7(65535, 7, 7, 65535, 65535); } catch (e) {}
            return a4;
        },
        "e": -128n,
        __proto__: -128n,
        set a(a13) {
            function F14(a16, a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = f3;
                this.h = a17;
                this.f = 48373n;
            }
            new F14(a13, a5, F14, a13);
            const v21 = new F14(a4, a4, f3, a5);
            new F14(v21, this, v21, v21);
        },
        "d": 48373n,
        "f": -128n,
        "h": a5,
    };
    return o23;
}
const v24 = (-128n)[2];
let v28 = ~8;
v28++;
Math.sqrt(8);
-8;
v24 * v28;
const v33 = f3(-298239554n, 48373n);
const v34 = f3(-298239554n, -128n);
const v35 = f3(-128n, -128n);
function F36(a38, a39, a40, a41) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a38;
}
const v42 = new F36(v33, F36, v35, -128n);
const v43 = new F36(v34, v42, v34, -298239554n);
new F36(v35, v43, v42, -298239554n);
function f48() {
}
const v52 = [-1000000.0,f48,-807.6596022618603,-1000000.0];
const v53 = [v52,-1000000.0,0.014069366437978514,v52];
const v54 = [v53,f48,-807.6596022618603];
function* f58(a59, a60, a61, a62) {
    try { a61.padStart(a59, "object"); } catch (e) {}
    const o64 = {
        "construct": f48,
        "ownKeys": f48,
        "preventExtensions": f48,
    };
    new Proxy(v54, o64);
    for (let v67 = 0; v67 < 95; v67++) {
    }
    yield* "object";
    return a59;
}
f58(-807.6596022618603, "U7O", "U7O", v53);
