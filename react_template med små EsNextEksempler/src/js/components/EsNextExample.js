// The global this was not standardized before ES10. The solution was
var getGlobal = function() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
};

// ES10 added globalThis object which should be used from now on to access global scope on any platform

// Access global array constructor
globalThis.Array(0, 1, 2); // [0, 1, 2]

// Similar to window.v = { value: true } in <= ES10 in browsers
globalThis.v = { value: true };
// ------------------------------------
function OptionalCatchBinding() {
  try {
    undefined_Function("I'm trying");
  } catch (error) {
    console.log("action");
  }
  try {
    undefined_Function("I'm trying");
  } catch {
    console.log("action");
  }
}

// --------------------------------------
// The Optional Chaining operator is spelled ?. It may appear in three positions:
/*
obj?.prop         //optional static property access
obj?.[expr]       //optional dynamic property access
func?.(...args)   //optional function or method call
*/

const book = {
  created_at: "Christmas eve",
  id: 12345,
  entities: {
    hashtags: ["Angular"]
  }
};
const hashtags1 = book.entities && book.entities.hashtags;

// Optional Chaining operator
const hashtags2 = book.entities?.hashtags;
console.log(hashtags2);

