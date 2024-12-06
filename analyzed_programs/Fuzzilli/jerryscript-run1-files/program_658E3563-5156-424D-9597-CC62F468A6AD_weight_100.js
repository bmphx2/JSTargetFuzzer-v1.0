const v0 = [1.0];
const v1 = [-1e-15,1000.0,-0.0,-2.0,-2.3711675655912234,782083.7546273244,1.3570443097505994e+308,-5.0];
const v2 = [Infinity,-1.1859117813604162e+308,0.44423308212305235,-5.0];
const v3 = [69.51167617220244,0.0,0.8690491710839234,-1000000.0,6.325894633315276,-0.0,-6.131559393435584,429.05983835398024,0.4821544309602781];
const v4 = [1.109205182829574e+308,1000000000000.0,6.196825491158894,-1e-15,1.0,0.6085304658919894,2.2250738585072014e-308];
const v5 = [Infinity,116.5679343489644,NaN,NaN,-183265.01234158094];
const v7 = new Set();
function f8(a9, a10) {
    const o17 = {
        __proto__: a9,
        ...a9,
        set a(a12) {
            a12[v5] = v7;
            let v13;
            try { v13 = v1.copyWithin(a12, a12, a12); } catch (e) {}
            const v14 = [v13,v5,v13,a10,v4];
            [v14,v14,v5,v14,a9];
            [v13,v2,v4,v4];
        },
        "a": a10,
        "d": a10,
        "e": a9,
        "h": v0,
        [v1]: v7,
    };
    return o17;
}
const v18 = f8(v0, Set);
const v19 = f8(v2, v7);
const v20 = f8(v3, v7);
function F21(a23, a24) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a24;
    this.d = a23;
}
new F21(v3, v19);
new F21(v5, v18);
const v27 = new F21(v1, v20);
v27[v3] = v2;
new Array(3);
Object.defineProperty(v1, "a", { writable: true, get: f8 });
v20 instanceof Set;
try { v18.p(); } catch (e) {}
