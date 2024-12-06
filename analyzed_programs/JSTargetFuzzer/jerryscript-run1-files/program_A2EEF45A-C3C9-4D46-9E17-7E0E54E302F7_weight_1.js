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
try { v7(v5, v7); } catch (e) {}
[-1.0,904.751342829046,-Infinity,-1.781920414840869e+308,0.459476211987478,0.12771223830136524,-642.0912673056885,1e-15,4.0];
[0.38477942322461023,0.4829491214636502,2.2873479936814753];
([0.0,6.051082999287509,-8.453012308010411e+307,1.0340357335392094e+308])[1794];
const v20 = new F9(v3, v4, v5, v5);
const v21 = new F9(v20, v8, v3, v3);
const v22 = new F9(v21, v21, v3, v3);
function F23(a25, a26, a27) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a26;
    this.b = v6;
    this.e = v6;
}
new F23(v22, v5, v21);
new F23(v21, v21, F0);
new F23(v4, v21, v7);
const v36 = new Array(9);
const v39 = new Uint32Array(2334);
new Uint32Array(4);
new Int16Array(129);
const v49 = `
    Uint32Array >= Uint32Array;
    let v51;
    try { v51 = v39.join(v49); } catch (e) {}
    v36[v51];
`;
function F53() {
    if (!new.target) { throw 'must be called with new'; }
}
const v55 = new F53();
with (v55) {
    const o58 = {
        valueOf() {
            this();
            return v55;
        },
    };
}
eval(v49);
