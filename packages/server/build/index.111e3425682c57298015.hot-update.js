require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/admin/graphql/Frags/PrdSiteMap.graphql":
/***/ (function(module, exports) {

throw new Error("Module build failed (from /Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql-tag/loader.js):\nSyntax Error: Expected Name, found }\n\nGraphQL request (7:5)\n6:       featuredImage {\n7:     }\n       ^\n8:   }\n\n    at syntaxError (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/error/syntaxError.js:24:10)\n    at expect (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:1299:32)\n    at parseName (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:92:15)\n    at parseField (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:295:21)\n    at parseSelection (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:284:72)\n    at many (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:1348:16)\n    at parseSelectionSet (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:272:17)\n    at parseField (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:311:59)\n    at parseSelection (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:284:72)\n    at many (/Users/austinreynolds/Documents/MOD/chf-rcomm/node_modules/graphql/language/parser.js:1350:16)");

/***/ }),

/***/ "../client/src/modules/admin/graphql/SiteMapProds.graphql":
/***/ (function(module, exports, __webpack_require__) {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"productsSiteMap"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"admin_products"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProductsSM"},"directives":[]}]}}]}}],"loc":{"start":0,"end":195}};
    doc.loc.source = {"body":"#import \"./Frags/PrdSiteMap.graphql\"\n\nquery productsSiteMap($first: Int, $after: String, $query: String) {\n  admin_products(first: $first, after: $after, query: $query) {\n    ...ProductsSM\n  }\n}\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  doc.definitions = doc.definitions.concat(unique(__webpack_require__("../client/src/modules/admin/graphql/Frags/PrdSiteMap.graphql").definitions));


    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set(opRefs);
      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }

    module.exports = doc;
    
        module.exports["productsSiteMap"] = oneQuery(doc, "productsSiteMap");
        


/***/ })

};
//# sourceMappingURL=index.2dc7cd86d909b6f1905d.js.map