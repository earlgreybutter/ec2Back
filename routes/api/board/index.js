const router = require("express").Router();
const resultData = require("./ec2_describeinstances");

router.get("/", (req, res) => {
  //화면에 good 노출
  resultData.then(
    function (result) {
      console.log("success");
      res.send(result);
    },
    function (error) {
      console.log("error");
    }
  );
  //console.log(typeof resultData);
});

router.all("*", (req, res) => {
  res
    .status(404)
    .send({ success: false, msg: "board unknown uri ${req.path}" });
});

module.exports = router;
