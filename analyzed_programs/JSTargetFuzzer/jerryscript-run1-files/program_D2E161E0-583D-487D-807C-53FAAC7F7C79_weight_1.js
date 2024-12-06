"cause" - 4;
let v16 = 10;
for (; v16--;) {
    let v18;
    try { v18 = ("2147483647").trim(); } catch (e) {}
    try { ("stringify").padEnd(v18, "stringify"); } catch (e) {}
    ("stringify")[80] in "2147483647";
}
