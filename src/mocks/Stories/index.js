export const mockStoryList = (qty) =>
  new Array(qty).fill(0).map((item, id) => ({
    id,
    author: {
      avatar:
        "https://res.cloudinary.com/dknvhah81/image/upload/v1614582614/default/default-image_c2znfe.png",
      isSocialAccount: false,
      _id: "603a4c6d20de9f001538f1e1",
      name: "Toan",
      email: "kurokenshiz@gmail.com",
      phone: "0394646737",
      createAt: "2021-02-27T13:43:09.938Z",
      updateAt: "2021-02-27T13:43:09.938Z",
      __v: 0,
    },
    date: "2021-02-27T13:43:09.938Z",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium pulvinar eros eu tristique. Nam non odio eleifend, vestibulum lorem non, tincidunt purus. Pellentesque nunc tortor, convallis in mauris laoreet, varius dictum dui. Quisque egestas magna at leo sagittis, ut sollicitudin est ornare. Nulla pretium ullamcorper libero eget ultricies. Nullam est est, scelerisque eu elit nec, varius vehicula lacus. Pellentesque sagittis dapibus tellus in finibus. Nunc eu venenatis nulla",
    attachments: [
      "https://www.w3schools.com/w3css/img_lights.jpg",
      "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
    ],
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 100),
  }));
