function f0() {
}
new BigUint64Array(100);
new Float64Array(7);
const v9 = new Int16Array(3);
let v10 = [7];
const v11 = [100,v10];
const v12 = [BigUint64Array,v9,f0];
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a16;
    this.e = a18;
}
new F13(3, 7, v11, v11);
new F13(7, 7, v11, v12);
new F13(7, 7, v11, v12);
class C22 {
}
for (let i = 0; i < 5; i++) {
    function F23() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v25 = new F23();
    Math.fround();
    Math.random();
    v10 ** -53523;
    Math.log(-1669914430);
    v10--;
    Math.min(0.2148301603058278);
    v25 <= F23;
    const v38 = `
        function f39(a40, a41, a42, a43) {
            return C22;
        }
    `;
    eval(v38);
    class C46 {
    }
}
