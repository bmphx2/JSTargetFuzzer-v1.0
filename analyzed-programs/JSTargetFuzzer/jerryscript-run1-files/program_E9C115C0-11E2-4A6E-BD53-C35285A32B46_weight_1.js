function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 51138;
    Uint8ClampedArray.__proto__;
    function F5(a7) {
        if (!new.target) { throw 'must be called with new'; }
        this.g = a7;
    }
    new F5();
}
new F0();
new F0();
new F0();
let v18 = 11n;
new Int16Array();
const v22 = (-55853n).valueOf();
let v23 = -4028n;
v18 = v23;
try { v22(); } catch (e) {}
v23 += v23;
const v31 = [2036046200,-9223372036854775807,-61646];
const v33 = v31["map"](Array);
try {
    new BigUint64Array(v33);
} catch(e36) {
    const v37 = [v31,v31,v31,v31,v31];
    function f38(a39) {
        return a39;
    }
    class C40 extends f38 {
    }
    for (let [i46, i47] = (() => {
            function f43(a44) {
                return f38;
            }
            class C45 extends f43 {
                static [F0];
            }
            return [0, 10];
        })();
        i46 < i47;
        ) {
        ({"f":i47,"length":i46,...C40} = v37);
    }
} finally {
}
