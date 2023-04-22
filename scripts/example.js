const script = {
  name: "My Example Scriptt",
  description:
    "This is an example of how you can create a custom InfinityMint script",
  executor: async (infinitymint) => {
    infinitymint.log("Hello World");
  },
};
module.exports = script;
