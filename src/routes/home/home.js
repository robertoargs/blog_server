const db = require('./../../config/mongo_connection');
const postSchema = require('./../../models/post');

exports.getHomeData = () => {
  return new Promise( (resolve, reject) => {
    const posts = postSchema.find();
    
    posts.then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })

  });
};

exports.getPostData = (id) => {
  return new Promise((resolve, reject) => {
    const post = postSchema.findById(id);

    post.then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })

  })  
}

exports.deletePostData = (id) => {
  return new Promise((resolve, reject) => {
    
    const deletedPost = postSchema.remove({_id: id});

    deletedPost.then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })

  })  
}

exports.postHomeData = (req , _) => {
  return new Promise( (resolve, reject) => {
    const {username, email, image, title, text, date} = req;

    const post = new postSchema({
      username: username,
      email: email,
      image: image,
      title: title,
      text: text,
      date: date
    })

    post.save()
    .then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
  }) 
};


exports.addCommentData = async (data) => {
  return new Promise( (resolve, reject) => {
    //const {username, comment} = req.body;
    const {id, username, comment} = data;
    let date = Date.now();

    let comentario = {
      "username": username,
      "comment": comment,
      "date": date
    }

    //addToSet
    const addComment = postSchema.findOneAndUpdate({_id: id}, {$push: {comments: comentario}})
    
    addComment.then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
    
    /*
    posts.then(data => {
      resolve(data)
    })
    .catch(err => {
      reject(err)
    })
    */

    
  }) 

}

/*
  OBSERVACIONES DUDAS

  1. Se puede hacer con try / catch?
  2. Tiene sentido async await aquí? Esto es una promesa
*/

/*
  postSchema.find()
  .then(data => {
    resolve(data)
  })
  .catch(err => {
    reject(err)
  })
*/

