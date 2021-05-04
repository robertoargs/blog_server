const home = require('./home');

module.exports.getHome = (_, res) => {
  home.getHomeData()
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
};

module.exports.postHome = (req, res) => {
  home.postHomeData(req.body)
  .then(data => {
    res.status(200).send(data)
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
};

module.exports.getPost = (req, res) => {
  let id = req.params.postId;
  home.getPostData(id)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
};

module.exports.deletePost = (req, res) => {
  let id = req.params.postId;
  home.deletePostData(id)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
};

module.exports.addComment = (req, res) => {
  const id = req.params.id;

  const {username, comment} = req.body;

  let jsn = {
    "id": id,
    "username": username,
    "comment": comment
  }
 
  home.addCommentData(jsn)
  .then(data => {
    res.status(200).send(data)
  })
  .catch(err => {
    console.log(err)
  })
}


