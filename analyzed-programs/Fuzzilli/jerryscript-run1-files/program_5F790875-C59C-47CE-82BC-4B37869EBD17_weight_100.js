function f6(a7, a8, a9, a10) {
    const o25 = {
        "a": 536870887n,
        set f(a12) {
        },
        p(a17, a18, a19, a20) {
            Object.defineProperty(a18, a9, { writable: true, value: this });
            typeof a8 === "number";
            const t7 = a18?.[a17];
            t7.__proto__ = a18;
            return "number";
        },
    };
    return o25;
}
f6(-60380n, -60380n, -11, -11);
f6(-60380n, 536870887, 536870887, -65535);
const v28 = f6(2147483649n, 536870887, -65535, 536870887);
const v29 = [-4294967297,255,-2147483648,30194,536870887];
const v30 = [2066366586,-9007199254740991,-12120,64307,-6616,-9007199254740991,5,-1508425381];
const v31 = [-128,5508,2147483648,61647,-536870912,39093,9007199254740990,1073741823,-65536];
function f32(a33, a34, a35, a36) {
    a34.__proto__ = arguments;
    return a34;
}
const v38 = f32(2147483649n, v31, v30, v28);
let v39;
try { v39 = new f32(...2147483649n, ...v38, v28, ...v38); } catch (e) {}
v29 instanceof v39;
for (let v41 = 0; v41 < 32; v41++) {
    v29["p" + v41] = v41;
}
