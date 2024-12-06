function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 129;
    const t3 = 129;
    t3.b = 129;
    this.e = F0;
}
new F0();
const v4 = new F0();
const v5 = new F0();
const v12 = ["object","object",-65536,v4];
[F0,v5,v12,v12,"object"];
[F0,v4,-65536,"object"];
("bkq").localeCompare("b");
