function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 65535;
    try { this(F0); } catch (e) {}
    this.f = 65535;
    this.e = 65535;
}
const v7 = new F0();
const v8 = new F0(F0, v7, F0);
const v9 = new F0(v8, F0, v7);
[v8,v7];
[v9,v8,F0];
[F0];
[-2.0,-2.220446049250313e-16,498798.4203667443,-832.9600555480197,NaN,5.0,1000000000000.0,-1.7976931348623157e+308];
[-2.0,4.0,-1.2925303404058426e+308];
[-726.8642296639358,853.9139072651806,-2.2250738585072014e-308];
const v22 = [65535n,0n,-1419n];
let v23 = [-1419n,-1419n,v22,v22];
const v24 = [v23,v23,v22,-1419n,0n];
const v25 = [65535n,v23];
[v24,0n];
const v27 = [v23];
const t22 = "1184045398";
t22[0] = 65535n;
let v34;
try {
const t0 = "localeCompare";
v34 = new t0(v22, v27, v27, 58270);
} catch (e) {}
async function* f35(a36, a37, a38) {
    ({"length":a36,...v23} = a37);
    yield v22;
    await a36;
    yield "1184045398";
    return a36;
}
f35(58270, v25, v34);
