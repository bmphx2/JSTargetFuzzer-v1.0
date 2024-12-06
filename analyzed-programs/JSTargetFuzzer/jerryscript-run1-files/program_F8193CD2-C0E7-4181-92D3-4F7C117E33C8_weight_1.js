let v2 = 9830;
v2[268435441] = v2;
++v2;
typeof -12545 === "object";
new Int8Array(7, 4);
new BigUint64Array(127);
new Date(10000);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    if (a19) {
        function F21(a23, a24) {
            if (!new.target) { throw 'must be called with new'; }
            a24(F21);
        }
    }
}
new F17(0.1725881460737685);
