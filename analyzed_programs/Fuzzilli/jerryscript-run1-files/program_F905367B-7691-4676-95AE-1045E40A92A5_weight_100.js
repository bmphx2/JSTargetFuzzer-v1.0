[];
function f4() {
    return 1073741823;
}
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a10;
}
new F8(5, 5);
new F8(1073741823, -1);
new F8(951942401, 5);
new Set();
function F18() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 268435440;
}
const v21 = new F18();
const o25 = {
    [1073741825]: 1.7976931348623157e+308,
    "a": "length",
    "c": 1.7976931348623157e+308,
    ..."length",
    ..."length",
    4096: 1.7976931348623157e+308,
    __proto__: "length",
    "g": 1073741825,
    536870889: 1073741825,
    3: 1.7976931348623157e+308,
    "e": v21,
};
const v26 = new Uint16Array();
v26["keys"]();
const v29 = `
    function F30(a32, a33) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = 1073741825;
    }
    new Promise(F30);
`;
[[-2,-9007199254740992,1726940612,65535,30936,3,175721459,-9007199254740990,65536,13],4n,[-22938,128,-14785,-45958,5,268435439,-563026776,9007199254740990,-1073741824,3]];
[-1,1073741823,1426091983,1073741823];
eval(v29);
