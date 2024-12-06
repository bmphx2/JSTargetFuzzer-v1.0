function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 50663;
    this.c = 50663;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v6 = [1e-15,-1000000.0,-1000.0,4.500438758907001e+307,1.0,-1.7976931348623157e+308];
const v7 = [-6.357265790452955];
const v8 = [536.5176351596765,-484.3258834435469,3.0];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = F0;
}
let v15;
try { v15 = v7(v5, v7); } catch (e) {}
const v16 = [-1.0,904.751342829046,-Infinity,-1.781920414840869e+308,0.459476211987478,0.12771223830136524,-642.0912673056885,1e-15,4.0];
[0.38477942322461023,0.4829491214636502,2.2873479936814753];
const v18 = [0.0,6.051082999287509,-8.453012308010411e+307,1.0340357335392094e+308];
const v19 = v18[1794];
const v20 = new F9(v3, v4, v5, v5);
const v21 = new F9(v20, v8, v3, v3);
v21.__proto__ = v7;
function F22(a24, a25) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v18;
    this.a = a25;
}
const v26 = new F22(v3, v16);
new F22(v5, v6);
new F22(v15, v19);
const v29 = new F9(v21, v21, v3, v3);
function F30(a32, a33, a34) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a33;
    this.b = v6;
    this.e = v6;
}
new F30(v29, v5, v21);
new F30(v21, v21, F0);
new F30(v4, v21, v7);
const v43 = new Array(9);
let {"a":v44,"d":v45,"h":v46,...v47} = v26;
const v54 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v64 = `
    Uint32Array >= Uint32Array;
    let v66;
    try { v66 = v54.join(v64); } catch (e) {}
    v43[v66];
`;
const o70 = {
    "maxByteLength": 129,
};
const v72 = new ArrayBuffer(128, o70);
new Uint32Array(v72);
function F75() {
    if (!new.target) { throw 'must be called with new'; }
}
const v77 = new F75();
with (v77) {
    const o80 = {
        valueOf() {
            this();
            return v77;
        },
    };
}
eval(v64);
