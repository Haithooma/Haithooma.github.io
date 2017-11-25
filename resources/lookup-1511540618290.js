(function(window, undefined) {
  var dictionary = {
    "2b7f3c94-b229-4fc8-abae-b7d4a923a9a6": "EmployeesList",
    "3977411a-7708-495f-a27d-e7023ef440cd": "Drinks-partial",
    "6a570814-64b9-4b60-8124-16b9c3e93940": "Drinks",
    "f6b630c2-65cb-45cb-b307-a54911acd452": "Sweets",
    "c79acb03-8893-447b-8c1d-c6f5e3f2a79b": "EmployeesList-thereal",
    "11c80aa9-affe-48f4-b0e1-c78f122e5f32": "3 options",
    "85c67b74-4588-4fb3-9d04-b86ec8c7b551": "Browse offers-week",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "28dbd157-c875-4b6e-b143-7271b678624c": "Sweets-partial",
    "0c1e600c-38ce-4369-a706-4cc131893544": "Sandwich",
    "81657c21-d5c4-49a4-9479-f43cf3630bdc": "RegisterScreen",
    "404aef3d-c978-4c12-bf68-9b74645d4eb6": "Browse offers",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);