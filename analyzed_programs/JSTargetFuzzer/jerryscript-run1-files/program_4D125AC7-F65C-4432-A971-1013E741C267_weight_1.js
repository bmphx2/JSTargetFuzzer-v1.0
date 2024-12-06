function f3(a4, a5) {
    const o9 = {
        536870888: -2.2250738585072014e-308,
        [a4]: -1000.0,
        7: a5,
        get e() {
            let v6 = this;
            v6[2356986670] = v6;
            let v7 = super.a;
            [a4,v7,v6] = v7;
            try { v6(); } catch (e) {}
            a4.valueOf = v7;
            return -2.2250738585072014e-308;
        },
    };
    return o9;
}
f3(-1000.0, -1000.0);
f3(-2.2250738585072014e-308, -2.2250738585072014e-308);
f3(1000000.0, -1000.0);
new Uint32Array(0);
new Float64Array(3089);
new Uint32Array(3401);
function f22() {
}
const v26 = [-1000000.0,f22,-807.6596022618603,-1000000.0];
const v27 = [v26,-1000000.0,0.014069366437978514,v26];
class C28 {
}
C28.bind();
const v30 = [v27,f22,-807.6596022618603];
function f34() {
    return f34;
}
class C35 extends f34 {
}
const v36 = new C35();
v36[5];
function* f38(a39, a40, a41, a42) {
    try { a41.padStart(a39, "object"); } catch (e) {}
    const o52 = {
        "construct": f22,
        "ownKeys": f22,
        ...a41,
        [C35]() {
            let v45 = 10;
            const o51 = {
                next() {
                    v45--;
                    const v49 = v45 == 0;
                    const o50 = {
                        "done": v49,
                        "value": v45,
                    };
                    return o50;
                },
            };
            return o51;
        },
        "preventExtensions": f22,
    };
    new Proxy(v30, o52);
    yield* "object";
    return a39;
}
let v55 = 0;
while (v55 < 2) {
    for (let v58 = 0; v58 < 5; v58++) {
    }
    v55++;
}
f38(-807.6596022618603, "U7O", "U7O", v27);
