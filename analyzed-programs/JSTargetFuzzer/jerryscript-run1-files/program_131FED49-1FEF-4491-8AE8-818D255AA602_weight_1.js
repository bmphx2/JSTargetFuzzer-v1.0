const v5 = [String];
Reflect.apply(String.raw, String, v5);
("description")["repeat"]();
new Uint8Array(3);
new Uint32Array(16);
new Int8Array(3346);
function F26() {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new F26();
let v30 = RegExp.bind(RegExp, F26, RegExp);
const v32 = new Int32Array();
v30.__proto__ = v28;
v30 /= v32;
