function f3() {
    return 4096n;
}
function f7() {
    return -1e-15;
}
[[1000000.0,f7,268435441n,-1240031545n]];
[-1.5194313677036684e+308];
function f11() {
    const o17 = {
        set g(a13) {
            try { a13(); } catch (e) {}
            512 / a13;
        },
    };
    o17.g = f11;
    return o17;
}
let v19;
try { v19 = undefined.o(undefined, undefined, undefined); } catch (e) {}
const v21 = [,,];
function f22(a23, a24) {
    return f22;
}
Object.defineProperty(v21, -9.980181287646149, { configurable: true, get: f22, set: v19 });
f11();
