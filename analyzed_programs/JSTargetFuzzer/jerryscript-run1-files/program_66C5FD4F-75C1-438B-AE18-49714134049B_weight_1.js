class C3 {
    static get a() {
        let v5 = 0;
        do {
            function F6(a8, a9, a10, a11) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = a10;
                this.a = C3;
                this.b = C3;
            }
            new F6("d", C3, "d", "PMXa");
            new F6(this, "d", "d", "resolve");
            new F6("d", this, "d", "PMXa");
            this.e;
            function f16(a17, a18, a19) {
                const o20 = {
                    ...a17,
                    ...a18,
                };
                return o20;
            }
            const v21 = f16(this, "resolve", f16);
            f16("d", v21, f16("d", "PMXa", v21));
            v5++;
        } while (v5 < 5)
        return "d";
    }
}
new C3();
new C3();
new C3();
new Set();
new Int32Array(1000);
new Float64Array(512);
new Int16Array(3);
function F41() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -65537;
    this[15] = F41;
    this.valueOf = -65537 in this;
    for (let v45 = 0; v45 < 32; v45++) {
        this["p" + v45] = v45;
    }
    this.f = -65537;
}
let v48 = new F41();
new F41();
const v50 = new F41();
new Uint32Array(5);
new Int32Array(5);
const v59 = new Uint8Array(150);
function f60() {
}
let v61 = 0;
do {
    v50 / v50;
    v61++;
} while (v61 < 9)
new Uint8Array(0);
let v79 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
const v81 = new Int32Array(127);
const v82 = ("2147483647")[11];
v59 instanceof v79;
RegExp[8] = 4.0;
const t64 = "2147483647";
t64.__proto__ = v50;
Uint32Array < v82;
v79 /= v81;
const v86 = new WeakSet();
const v92 = new BigInt64Array(2);
127 instanceof Int32Array;
function f95() {
    return v92;
}
v48 = v86;
([5]).reverse();
