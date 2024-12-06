const v0 = /a\sc?/uygmi;
const v1 = /X2q[\ca]/u;
const v2 = /[an]/uyid;
const v3 = [1513189023,-11,-536870912,-2147483647,-65537];
const v4 = [11,2147483649,-219834020,65537,-14,-32914,-4294967295,4484,9304];
const v5 = [43118,4294967296,2,15077,-1401651759];
const v6 = [v3,v5];
const v8 = [v2,v5,v5,v4,[v3,v5]];
const v10 = new Map();
function f11(a12, a13, a14) {
    const o22 = {
        "a": a14,
        ...a14,
        [v5](a16, a17, a18, a19) {
            v2[v1] = v0;
            let v20;
            try { v20 = a16.reduceRight(v0); } catch (e) {}
            try { v20(a12, v20, v5); } catch (e) {}
            return v0;
        },
        "b": v1,
        "d": v8,
        [v10]: a13,
        "g": Map,
    };
    return o22;
}
f11(v0, v4, v6);
f11(v0, v6, v4);
const v25 = f11(v2, v3, v5);
v4["toLocaleString"]();
function f28(a29, a30, a31) {
    return typeof v25 === "object";
}
f28(v2, v0, v0);
f28(v5, v1, v0);
