var models = require('../models');

exports.addGroup = function(req, res)
{
	var newGroup = new models.Group({
		"name": req.query.name
	})
	.save(afterSaving);

	function afterSaving(err) {
		if (err) {
			console.log(err);
		}
		console.log("New Group:"+newGroup);
		res.json(newGroup);
		//res.redirect('/');
	}
}

function addGroupCallBack(){
}

exports.deleteGroup = function(req, res) {
  var groupID = req.params.id;

  models.Group
    .find({"_id": taskID})
    .remove()
    .exec(afterRemoving);

  function afterRemoving(err, groups) {
    if(err) console.log(err);
    res.send(500);
  }
}

//exports.editTask = 