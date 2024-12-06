function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 2;
    this.d = 2;
    this.a = 2;
}
const v3 = new F0();
const v4 = new F0();
new F0();
const v9 = ["f","f","d",F0,F0];
[v9,"f",v4,v9,v4];
[v3,v4,v4,v3,"length"];
const v20 = new Uint8Array(512);
new Int16Array(447);
new Uint32Array(2438);
function f30() {
}
v20.description <<= 2006448021;
for (let v38 = 0; v38 < 5; v38++) {
    const v39 = `
        function F40(a42, a43) {
            if (!new.target) { throw 'must be called with new'; }
        }
    `;
    eval(v39);
}
const v46 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v46.copyWithin(v46, v46));
const v53 = new Set();
const v55 = new WeakMap();
v53.add(v55);
new Uint8Array(0);
let v62 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v64 = new Int32Array(127);
v62 /= v64;
new WeakSet();
new Uint8Array();
([2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308]).copyWithin(4, 4);
new BigInt64Array(2);
([5]).reverse();
