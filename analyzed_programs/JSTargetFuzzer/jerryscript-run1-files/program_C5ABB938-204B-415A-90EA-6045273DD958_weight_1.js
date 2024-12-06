let v2 = "global";
const v3 = [v2,v2,v2];
const v4 = ["WRfu","object",v3,v3,v3];
const v5 = [v2,v4,"object","WRfu","WRfu"];
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v4;
    this.g = a11;
    this.e = "WRfu";
}
const v15 = new F9("object", v5, v5, 5.0);
const v16 = new F9("object", v5, v4, -5.1512908645928395);
const v19 = ("object")["toUpperCase"]();
const t13 = "WRfu";
t13.length = v19;
try { v19(v15, ..."toUpperCase", ...v5, undefined, ...v2); } catch (e) {}
new F9("object", v3, v4, -2.220446049250313e-16);
v16.e;
v16[-5.1512908645928395] = v2;
("toUpperCase")["endsWith"](-5.1512908645928395);
v2 ^= "object";
new Int8Array(4096);
const v30 = Symbol.iterator;
const o39 = {
    [v30]() {
        let v32 = 10;
        const o38 = {
            next() {
                v32--;
                const v36 = v32 == 0;
                const o37 = {
                    "done": v36,
                    "value": v32,
                };
                return o37;
            },
        };
        return o38;
    },
};
new Float32Array(255);
new Int8Array(3);
const v46 = -26144 % -26144;
v46 + v46;
