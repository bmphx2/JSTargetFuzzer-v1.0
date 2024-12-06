function f0() {
    const o10 = {
        get f() {
            new Array(2);
            try {
                super.catch("e");
            } catch(e9) {
            }
            return "e";
        },
    };
    return f0;
}
f0();
const v12 = f0();
f0();
new f0(127);
new BigInt64Array(v12);
new Int8Array(257);
function f28(a29, a30) {
    const o34 = {
        ["a"]: "27204",
        ["a"](a32, a33) {
        },
    };
    return "27204";
}
let v35 = f28();
const v36 = f28(f28, f28);
class C37 {
    valueOf(a39, a40, a41) {
        this[0] = v36;
    }
}
new C37();
({"length":v35,...C37} = "27204");
if (!v35) {
    function f43() {
    }
}
