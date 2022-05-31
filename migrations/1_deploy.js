// const Metakages = artifacts.require('Metakages');

// module.exports = async function (deployer) {
//   await deployer.deploy(
//     Metakages
//     );
// };

const Kage = artifacts.require('KageV2');

module.exports = async function (deployer) {
  await deployer.deploy(
    Kage,"0xb5f8ca23320ad5bd6d5263bfa008b4dbeab4f0d2"
    );
};