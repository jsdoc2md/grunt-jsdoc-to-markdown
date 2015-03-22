var test = require("tape");
var exec = require("child_process").exec;
var fs = require("fs");

test("run grunt", function(t){
    t.plan(1);
    exec("grunt", function(err, stdout, stderr){
        if (err) throw err;

        var output = fs.readFileSync("test/output/class.md", "utf8");
        t.ok(/a class with all of the things/.test(output));
    });
});
