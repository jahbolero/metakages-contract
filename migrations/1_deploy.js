const Metakages = artifacts.require('Metakages');

module.exports = async function (deployer) {
  await deployer.deploy(
    Metakages
    );
};