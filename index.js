var cson = require("cson-light");
var colors = require("colors");
var pkg = require("./package.json");

function print(obj, ws) {
    var str = "";
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] instanceof Array) {
                var arr = obj[key];
                str += ws + key.green.bold + " : " + "[\n".gray
                for (var i in arr) {
                    i = arr[i];
                    str += ws + "  " + i;
                    if (i !== arr.length-1) {
                        str += ",".gray;
                    }
                    str += "\n";
                }
                str += ws + "]\n".gray;
            }
            else if (obj[key] instanceof Object) {
                str += ws + key.green.bold + " :\n";
                str += print(obj[key], ws + "  ");
            } else {
                str += ws + key.green.bold + " : " + obj[key] + "\n";
            }
        }
    }
    return str;
}


var test = {
    "foo": "a",
    "bar": "b",
    "baz": {
        "a": "b",
        "b": [0,1,2,3,4]
    }
}

console.log(print(pkg, "  "));