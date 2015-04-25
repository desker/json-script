```js
function isString(param) {
  return (typeof(param)).toString().toLowerCase()==='string';
}
```

**same js, but unpacked**
```js
function isString(param) {
  var realType = typeof(param);
  realType = realType.toString().toLowerCase();
  return realType==='string';
}
```

**And now trying to translate that smallest and easiest function you ever seen :)**
```json
[ 
  ["function", { "isString": ["param", "arg2", "etc"] }, [
    ["var", {"realType": {"typeof":"param"} }],
    ["set", {"realType": ["realType", {"toString":[]}, {"toLowerCase":[] }] }],
    {"return": ["realType","===","string"]}
  ] ]


  {
    "function" : "isString",
    "arguments": ["param"]
  }, [
        ["var", {
          "realType": { "typeof":"param" }
        }]   
      ]
  }

]
```