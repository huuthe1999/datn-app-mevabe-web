export const mockHandbookList = new Array(50).fill(0).map((item, index) => ({
  id: index,
  title:
    "Làm sao để nuôi dạy con cho tốt Làm sao để nuôi dạy con cho tốt Làm sao để nuôi dạy con cho tốt Làm sao để nuôi dạy con cho tốt",
  summary:
    "Quận Tân Bình không chỉ là địa điểm vui chơi mà còn được gọi là thiên đường ẩm thực, bởi vậy để tìm một Quận Tân Bình không chỉ là địa điểm vui chơi mà còn được gọi là thiên đường ẩm thực, bởi vậy để tìm một",
  watched: Math.floor(Math.random() * 100),
  categories: [
    {
      id: `category${index}`,
      title: "Trước khi sinh",
    },
    {
      id: `category${index + 1}`,
      title: "Sau khi sinh",
    },
  ],
}));
