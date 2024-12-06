function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = -268435456;
    this.h = -268435456;
    this.e = -268435456;
}
const v3 = new F0();
let v4 = new F0();
new F0();
let v8 = 0;
while ((() => {
        const v10 = v8 < 6;
        function F11() {
            if (!new.target) { throw 'must be called with new'; }
        }
        function f14(a15, a16) {
            return F11;
        }
        Object.defineProperty(f14(), 257, { enumerable: true, get: f14 });
        return v10;
    })()) {
    v4.valueOf = 512n;
    v4 = v3;
    typeof F0 === "symbol";
    v8++;
}
[895.432510985619,423.27752792976594,440690.252773141,3.0,209429.99693354662];
[9.112376439602272,0.3947276442112594,0.8512695143296545,-3.8994181347967576,5.0];
[1.1565726038476427,-4.0,-883639.7644716161,0.3446536146536493,Infinity,0.9689965438149334,-0.0,-710.243127764681,-4.61674165964951];
const v33 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o34 = {
};
const v36 = new Proxy(v33, o34);
new Uint32Array(v36);
const v40 = new Uint32Array(181);
let v42 = BigUint64Array;
let v43 = new v42(1);
let v44 = 253;
[v44,,v42,v43] = v40;
try { v42["abs"](181, v44, v42); } catch (e) {}
new Uint16Array(v44);
for (let i57 = 0; i57 < 2; i57++) {
    const v63 = new Function("x");
    v63.name;
}
Function();
