exports.getPosts = (req, res, next) => {
  res.status(201).json({
    posts: [
      { firstpost: "hi hellow 1", contant: "hellow ajith this is first post" },
      {
        firstpost: "hi hellow 33",
        contant: "hellow ajith this is second post",
      },
    ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const contants = req.body.contant;
  res.status(201).json({
    message: "post created sucessfully",
    post: { id: new Date().toISOString(), title: title, contants: contants },
  });
};
