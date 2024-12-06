new Int32Array(Int32Array);
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new F5(F5);
const o9 = {
};
const v11 = new Proxy(v8, o9);
v11.__proto__;
const v13 = new Uint8Array(3123);
new Uint8ClampedArray(v13);
[1000000000.0,-2.2250738585072014e-308,-2.0,8.424467821029534,-5.0,658700.5778769522,1000000000000.0,1e-15,-1000000000000.0,-6.615556192516994];
[-4.656847861100879,Infinity,0.1226872327721501,0.8532678362704171,1000000000000.0,1.058087210336635e+308,-4.310343652070687,-1e-15,1.7976931348623157e+308,1000000000000.0];
[-1000.0,-2.0,-1.0,-5.1778274434879235];
try { Uint8ClampedArray(Uint8ClampedArray, Uint8ClampedArray); } catch (e) {}
