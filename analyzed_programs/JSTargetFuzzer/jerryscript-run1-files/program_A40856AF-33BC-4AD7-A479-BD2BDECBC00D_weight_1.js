let v3 = ("m")["m"];
v3 ^= v3;
const t2 = "number";
t2["m"] *= v3;
"c" !== "number" ? "c" : "number";
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a8;
}
const v10 = new F6("m", "m");
const v11 = new F6("number", "m");
const v12 = new F6("m", v11);
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a18;
    this.a = "c";
}
const v19 = new F13("m", v11, v11, "number");
const v20 = new F13("c", v11, v12, "c");
const v21 = new F13("c", v20, v10, "c");
try { v19.all(v11, v20, "number"); } catch (e) {}
const v23 = v12 >> v12;
try { ("c").charAt(v23); } catch (e) {}
const v26 = Symbol.iterator;
const o35 = {
    [v26]() {
        let v28 = 10;
        const o34 = {
            next() {
                v28--;
                const v32 = v28 == 0;
                const o33 = {
                    "done": v32,
                    "value": v28,
                };
                return o33;
            },
        };
        return o34;
    },
};
function f36() {
    return v21;
}
with (v12) {
}
const t46 = "number";
delete t46[280];
Math.trunc(0.5680262004501945);
