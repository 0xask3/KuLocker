const Locker = artifacts.require("KuLocker")

module.exports = function (deployer) {
  deployer.deploy(Locker);
};
