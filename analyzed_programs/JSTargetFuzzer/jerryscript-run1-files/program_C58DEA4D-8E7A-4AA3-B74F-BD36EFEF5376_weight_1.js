const v0 = [-0.0,0.7255848488049482,-2.2898068283271744,-0.0,2.220446049250313e-16,1.5209454092195552e+308];
const v1 = [-1.2610589229886898e+307,557611.0641226058,8.29354501907741,-220.1428214571837,845808.210852629,-8.980449669542846,3.0,-2.0];
const v2 = [2.2250738585072014e-308,-646.68930601619,0.15013823907426405,1.0,5.0,Infinity,-1000000000.0];
function f3(a4, a5) {
    const o16 = {
        [a4](a7, a8) {
            a4[v2] = a4;
            v0.length = a8;
            return a5;
        },
        [v0]: v2,
        "b": v2,
        2: v2,
        get e() {
            const v11 = new WeakMap();
            RegExp();
            try {
                super.clear(v0, v2, v11, v11);
            } catch(e15) {
            }
            return this;
        },
    };
    return o16;
}
f3(v0, v0);
const v18 = f3(v0, v1);
const v19 = f3(v2, v0);
function F20(a22, a23) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f3;
}
new F20(v19, v2);
const v25 = new F20(v19, v1);
new F20(v18, v0);
[v1,v2,v1,[v0,[f3],f3,v25,v18]];
const v31 = Uint8ClampedArray.__proto__;
try { v31(); } catch (e) {}
